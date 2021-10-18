from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


from bs4 import BeautifulSoup
import requests

from datetime import date


# Create your views here.


def index(request):
    html_text = requests.get(
        'https://dailyepaper.in/dainik-jagran-newspaper-2021').text
    soup = BeautifulSoup(html_text, 'lxml')
    dainik = soup.find('a', text='Download Now')

    html_text = requests.get(
        'https://dailyepaper.in/amar-ujala-news-paper-today').text
    soup = BeautifulSoup(html_text, 'lxml')
    amar = soup.find('a', text='Download Now')

    html_text = requests.get(
        'https://dailyepaper.in/navbharat-times-epaper').text
    soup = BeautifulSoup(html_text, 'lxml')
    navbharat = soup.find('a', text='Download Now')

    html_text = requests.get(
        'https://dailyepaper.in/rashtriya-sahara-epaper').text
    soup = BeautifulSoup(html_text, 'lxml')
    rashtriya = soup.find('a', text='Download Now')

    html_text = requests.get(
        'https://dailyepaper.in/the-asian-age-epaper').text
    soup = BeautifulSoup(html_text, 'lxml')
    asian = soup.find('a', text='Download Now')

    html_text = requests.get(
        'https://dailyepaper.in/financial-express-newspaper').text
    soup = BeautifulSoup(html_text, 'lxml')
    financial = soup.find('a', text='Download Now')

    dainik = dainik['href']
    amar = amar['href']
    rashtriya = rashtriya['href']
    navbharat = navbharat['href']
    asian = asian['href']
    financial = financial['href']

    return render(request, 'index.html', {'dainik': dainik, 'amar': amar, 'navbharat': navbharat, 'rashtriya': rashtriya, 'asian': asian, 'financial': financial})
