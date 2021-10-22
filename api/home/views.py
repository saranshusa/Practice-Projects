from django.http import HttpResponse
from django.shortcuts import render
import requests
import json

# epaper
from bs4 import BeautifulSoup

# auth
from .models import User

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
            responseData = {'status': 'success', 'message': 'Logged in!'}
            Data = json.dumps(responseData)
            return HttpResponse(Data)
        else:
            responseData = {'status': 'failed',
                            'message': 'Enter correct password to login.'}
            Data = json.dumps(responseData)
            return HttpResponse(Data)

    except:
        record = User(phone=username, code=password)
        record.save()

        responseData = {'status': 'success',
                        'message': 'Account created and logged in!.'}
        Data = json.dumps(responseData)

        return HttpResponse(Data)
