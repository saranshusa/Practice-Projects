from django.http import HttpResponse
from django.shortcuts import render

from bs4 import BeautifulSoup
import requests
import json

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
