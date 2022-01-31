from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('epaper/', views.epaper, name='epaper'),
    path('auth/', views.auth, name='auth'),
    path('todo/', views.todo, name='todo'),
    path('emailauth/', views.emailauth, name='emailauth'),
    path('banao/', views.banao, name='banao'),
    path('sendemail/', views.sendemail, name='sendemail')
]
