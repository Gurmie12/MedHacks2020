from django.contrib import admin
from .models import Patient, Prediction

# Register your models here.
admin.register(Patient)
admin.register(Prediction)