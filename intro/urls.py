from django.urls import path
from intro.views import index, login, signup

urlpatterns = [
    path('', index, name="index"),
    path('/login', login, name="login"),
    path('/signup', signup, name='signup'),
]