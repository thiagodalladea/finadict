from django.urls import path
from intro.views import index

urlpatterns = [
    path('', index)
]