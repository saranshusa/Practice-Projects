from django.db import models

# Create your models here.


class User(models.Model):
    phone = models.CharField(max_length=10)
    code = models.CharField(max_length=4)
