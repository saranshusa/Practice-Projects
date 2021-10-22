from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('epaper/', views.epaper, name='epaper'),
    path('auth/', views.auth, name='auth'),
]
