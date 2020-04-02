from django.urls import path
from webprovider import views

urlpatterns = [
    path('', views.index),
]
