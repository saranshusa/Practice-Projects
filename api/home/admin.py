from django.contrib import admin
from .models import ToDo, User

# Register your models here.
admin.site.register(User)
admin.site.register(ToDo)
