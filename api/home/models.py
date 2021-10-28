from django.db import models

# Create your models here.


class User(models.Model):
    phone = models.CharField(max_length=10)
    code = models.CharField(max_length=4)
    uid = models.CharField(max_length=5)


class ToDo(models.Model):
    uid = models.CharField(max_length=5)
    note = models.CharField(max_length=1000)