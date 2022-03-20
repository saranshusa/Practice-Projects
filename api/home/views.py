from django.http import HttpResponse
from django.shortcuts import render
import requests
import json

# epaper
from bs4 import BeautifulSoup
from requests.api import get

# auth
from .models import User
import string
import random

# todo
from .models import ToDo

# emailauth
from .models import EmailAuth
import os
import smtplib
import dotenv

#sendemail

#banao
from .models import Banao


# Create your views here.


def index(request):

    html = '''
    
    <body style="margin: 0; align-items: center; justify-content: center;">    
        <p style="text-align: center; margin: 0; font-size: 25rem; font-weight: 600; font-family:monospace;">API</p>
        <p style="text-align: center; margin: 0; font-size: 4rem; margin-bottom: 50px; font-weight: 600; font-family:monospace; font-style: italic;">Running</p>
        <div style="background-color:rgb(73, 255, 128);">
            <marquee>
                <div style="text-align: center; background-color: rgb(0, 233, 70); max-width: 90px; border-radius: 25px; font-size: 1rem; font-weight: 600; font-family: monospace; padding: 10px 25px;">Status: OK</div>
            </marquee>
        </div>
    </body>'''

    return HttpResponse(html)


def epaper(request):
    query = request.GET['query']
    link = 'https://dailyepaper.in/' + query
    html_text = requests.get(link).text
    soup = BeautifulSoup(html_text, 'lxml')
    data = soup.find('a', text='Download Now')
    data = data['href']

    responseData = {"status": "Active", "paper": query,  "link": data}

    Data = json.dumps(responseData)

    return HttpResponse(Data)


def auth(request):
    username = request.GET['user']
    password = request.GET['pass']

    try:
        getRecord = User.objects.get(phone=username)
        if getRecord.code == password:
            responseData = {'status': 'success',
                            'message': 'Logged in!', 'uid': getRecord.uid}
            Data = json.dumps(responseData)
            return HttpResponse(Data)
        else:
            responseData = {'status': 'failed',
                            'message': 'Enter correct password to login.'}
            Data = json.dumps(responseData)
            return HttpResponse(Data)

    except:
        flag = 1
        while(flag):
            UID = ''.join(random.choice(string.ascii_uppercase + string.digits)
                          for _ in range(5))
            try:
                getRecord = User.objects.get(uid=UID)
            except:
                flag = 0
                record = User(phone=username, code=password, uid=UID)
                record.save()

                responseData = {'status': 'success', 'uid': UID,
                                'message': 'Account created and logged in!.'}
                Data = json.dumps(responseData)

        return HttpResponse(Data)


def todo(request):
    UID = request.GET['uid']
    Tilte = request.GET['note']
    Delete = request.GET['delete']

    if Delete != '':
        ToDo.objects.filter(uid=UID, note=Delete).delete()

        responseData = {'status': 'success',
                        'message': 'Note added'}
        Data = json.dumps(responseData)

        return HttpResponse(Data)

    elif Tilte != '':
        record = ToDo(uid=UID, note=Tilte)
        record.save()

        responseData = {'status': 'success',
                        'message': 'Note added'}
        Data = json.dumps(responseData)

        return HttpResponse(Data)

    else:
        getRecord = ToDo.objects.filter(uid=UID)
        notes = []
        for recordItem in getRecord:
            notes.append(recordItem.note)

        Data = json.dumps(notes)

        return HttpResponse(Data)


def emailauth(request):
    email = request.GET['email']
    action = request.GET['action']

    if ('@' not in email) or ('.' not in email):
        responseData = {'status': 'error', 'message': 'Incorrect email!'}
        Data = json.dumps(responseData)
        return HttpResponse(Data)

    #Signup
    if action == '1':
        password = request.GET['pass']
        flag = 1
        while(flag):
            UID = ''.join(random.choice(string.ascii_uppercase + string.digits)
                          for _ in range(5))
            try:
                getRecord = EmailAuth.objects.get(uid=UID)
            except:
                flag = 0

                try:
                    getRecord = EmailAuth.objects.get(email=email)
                    responseData = {'status': 'error', 'message': 'Email already exists!'}
                    Data = json.dumps(responseData)
                    return HttpResponse(Data)
                except:
                    record = EmailAuth(email=email, code=password, uid=UID)
                    record.save()

                    responseData = {'status': 'success', 'uid': UID,
                                    'message': 'Account created'}
                    Data = json.dumps(responseData)
    
    #Login
    elif action == '2':
        password = request.GET['pass']
        try:
            getRecord = EmailAuth.objects.get(email=email)
            if getRecord.code == password:
                responseData = {'status': 'success',
                                'message': 'Logged in!', 'uid': getRecord.uid}
                Data = json.dumps(responseData)
            else:
                responseData = {'status': 'error',
                                'message': 'Enter correct password to login.'}
                Data = json.dumps(responseData)
        except:
            responseData = {'status': 'error',
                                'message': "Account doesn't exists with this email."}
            Data = json.dumps(responseData)
 
    #Reset Password
    elif action == '3':
        password = request.GET['pass']
        otp = request.GET['otp']
        
        try:
            getRecord = EmailAuth.objects.get(email=email)
            if getRecord.otp == otp:
                getRecord.code = password
                getRecord.save()
                responseData = {'status': 'success',
                                    'message': "Password updated!"}
                Data = json.dumps(responseData)
            else:
                responseData = {'status': 'error',
                                    'message': "Incorrect OTP"}
                Data = json.dumps(responseData)
        except:
            responseData = {'status': 'error',
                                    'message': "Account doesn't exists with this email."}
            Data = json.dumps(responseData)
     
    #Send OTP
    elif action == '4':

        OTP = ''.join(random.choice(string.digits)for _ in range(6))
        try:
            getRecord = EmailAuth.objects.get(email=email)
            getRecord.otp = OTP
            getRecord.save()

            dotenv.read_dotenv()
            EMAIL_ADDRESS = os.environ.get('EMAIL_ADDRESS')
            EMAIL_PASSWORD = os.environ.get('EMAIL_PASSWORD')

            with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:

                smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)

                subject = 'OTP for your password reset request'
                body = f'Hi {email} !\n\nIt seems like you forgot your password. If this is true, use your secret code to change your password.\n\nYour 6-digit OTP is {OTP}.\n\nIf you did not request a password reset, please ignore this email or reply to let us know.'

                msg = f'Subject: {subject}\n\n{body}'

                smtp.sendmail(EMAIL_ADDRESS, email, msg)

            responseData = {'status': 'success',
                                    'message': 'OTP sent successfully!'}
            Data = json.dumps(responseData)
        
        except:
            responseData = {'status': 'error',
                                    'message': "Account doesn't exists with this email."}
            Data = json.dumps(responseData)
        
    #Error
    else:
        responseData = {'status': 'error', 'message': 'Invalid action'}
        Data = json.dumps(responseData)


    return HttpResponse(Data)

def sendemail(request):
    To = request.GET['to']
    Message = request.GET['message']
    Subject = request.GET['subject']
    From = request.GET['from']

    if To != '' and Message != '' and Subject != '':
        dotenv.read_dotenv()
        EMAIL_ADDRESS = os.environ.get('EMAIL_ADDRESS')
        EMAIL_PASSWORD = os.environ.get('EMAIL_PASSWORD')

        if From == '':
            From = 'Unknown Source'

        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:

            smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)

            msg = f'Subject: {Subject}\n\n{Message}\n\nFrom: {From}'

            smtp.sendmail(EMAIL_ADDRESS, To, msg)

        responseData = {'status': 'success',
                                    'message': 'Email sent successfully!'}
        Data = json.dumps(responseData)

        return HttpResponse(Data)

    else:
        responseData = {'status': 'error',
                                    'message': 'Some or all of the required data was not provided!'}
        Data = json.dumps(responseData)

        return HttpResponse(Data)

def banao(request):
    firstName = request.GET['fname']
    lastName = request.GET['lname']
    username = request.GET['user']
    email = request.GET['email']
    password = request.GET['pass']
    line1 = request.GET['line1']
    city = request.GET['city']
    state = request.GET['state']
    pincode = request.GET['pin']
    role = request.GET['role']
    mode = request.GET['mode']

    try:
        if mode == 'signup':
            try:
                getRecord = Banao.objects.get(email=email)
                responseData = {'status': 'error',
                                    'message': 'Email already registered!.'}
                Data = json.dumps(responseData)
                return HttpResponse(Data)

            except:
                record = Banao(fname=firstName, lname=lastName, username=username, email=email, password=password, line1=line1, city=city, state=state, pincode=pincode, role=role)
                record.save()

                responseData = {'status': 'success',
                                    'message': 'Account created and logged in!.', 'role': role}
                Data = json.dumps(responseData)
                return HttpResponse(Data)


        else:
            try:
                getRecord = Banao.objects.get(email=email)
                if getRecord.password == password:
                    responseData = {'status': 'success',
                                            'message': 'Logged in!', 'role': getRecord.role, 'fname': getRecord.fname, 'lname': getRecord.lname, 'username': getRecord.username, 'email': getRecord.email, 'line1': getRecord.line1, 'city': getRecord.city, 'state': getRecord.state, 'pincode': getRecord.pincode}
                    Data = json.dumps(responseData)
                    return HttpResponse(Data)
                else:
                    responseData = {'status': 'error',
                                            'message': 'Incorrect password!'}
                    Data = json.dumps(responseData)
                    return HttpResponse(Data)

            except:
                responseData = {'status': 'error',
                                            'message': 'Email not registered!'}
                Data = json.dumps(responseData)
                return HttpResponse(Data)

    except:
        responseData = {'status': 'error',
                                            'message': 'Server Error'}
        Data = json.dumps(responseData)
        return HttpResponse(Data)
