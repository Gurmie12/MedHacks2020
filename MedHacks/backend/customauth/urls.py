from django.urls import path
from .views import login_user, logout, signup

urlpatterns = [
    path('login/', login_user),
    path('logout/', signup),
    path('signup/', logout)
]