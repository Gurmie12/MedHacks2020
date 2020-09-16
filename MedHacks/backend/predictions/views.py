from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from .models import Prediction, Patient
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny 
from PIL import Image
import json
import re
import base64
from cnn_model.evaluate_model import eval_xray_model

# Create your views here.
@api_view(['POST'])
@permission_classes([AllowAny])
def predict(request):
    dataUrlPattern = re.compile('data:image/(png|jpeg);base64,(.*)$')
    data = json.loads(request.body)
    img = dataUrlPattern.match(data['image']).group(2)
    img = base64.b64decode(img)
    with open('testing_image.png', 'wb') as outfile:
        outfile.write(img)
    res = eval_xray_model()
    possibilites = res.keys()
    total = 0
    for p in possibilites:
        if p != "Image Index":
            total += res[p][0] * 100
    for p in possibilites:
        if p != "Image Index":
            scale = 100/total
            res[p][0] = round(res[p][0] * 100,2) * scale
    return Response({'result': res})
