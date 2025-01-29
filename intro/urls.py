from django.urls import path
from intro.views import index, login

urlpatterns = [
    path('', index, name="index"),
    path('/login', login, name="login")
]