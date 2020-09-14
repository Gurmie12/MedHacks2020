from django.db import models
from django.contrib.auth.models import User
from django.core.files.storage import FileSystemStorage
import uuid

fs = FileSystemStorage(location='/media/x-ray_photos')


# Create your models here.

class Patient(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    age = models.SmallIntegerField()

class Prediction(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    upload_image = models.ImageField(storage=fs)
    prediciton_result = models.CharField(max_length=350)
    time_stamp = models.TimeField(auto_now_add=True)
