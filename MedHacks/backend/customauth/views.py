from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny 
import json

# Create your views here.
@api_view(['POST'])
@permission_classes([AllowAny])
def login_user(request):        
    data = json.loads(request.body)
    user = authenticate(request, username=data['username'], password=data['password'])
    if user is not None:
        login(request, user)
        return Response({'success': 'User logged in'})
    else:
        return Response({'error': 'Wrong email or password, please try again!'})
    

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def logout(request):
    logout(request)
    return Response({'success': 'User succesfully logged out'})

@api_view(['POST'])
@permission_classes([AllowAny])
def signup(request):
    data = json.loads(request.body)
    serializer = UserSerializer(data=data)
    if serializer.is_valid():
        user = User.objects.create_user(data['email'], data['email'], data['password'])
        user.first_name = data['first_name']
        user.last_name = data['last_name']
        user.save()
        login(request, user)
        return Response({'Success': 'Succesfully signed up'})
    else:
        return Response({'error': 'Bad Request'})
