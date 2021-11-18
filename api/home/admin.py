from django.contrib import admin
from .models import ToDo, User, EmailAuth

# Register your models here.
admin.site.register(User)
admin.site.register(ToDo)
admin.site.register(EmailAuth)
