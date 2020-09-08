from django.urls import path
from .views import login, logout, signup

urlpatterns = [
    path('login/', login),
    path('logout/', signup),
    path('signup/', logout)
]