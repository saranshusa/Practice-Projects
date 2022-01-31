from django.db import models

# Create your models here.


class User(models.Model):
    phone = models.CharField(max_length=10)
    code = models.CharField(max_length=4)
    uid = models.CharField(max_length=5)


class ToDo(models.Model):
    uid = models.CharField(max_length=5)
    note = models.CharField(max_length=1000)

class EmailAuth(models.Model):
    email = models.CharField(max_length=50)
    code = models.CharField(max_length=16)
    uid = models.CharField(max_length=5)
    otp = models.CharField(max_length=6)

class Banao(models.Model):
    fname = models.CharField(max_length=50)
    lname = models.CharField(max_length=50)
    username = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    password = models.CharField(max_length=16)
    line1 = models.CharField(max_length=100)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    pincode = models.CharField(max_length=6)
    role = models.CharField(max_length=10)
    
