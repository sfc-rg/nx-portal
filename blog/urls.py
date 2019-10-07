from django.urls import path
from blog.views import (
    BlogView, BlogCreateView
)

urlpatterns = [
    path('', BlogView.as_view(), name='blog'),
    path('create/', BlogCreateView.as_view(), name='create'),
]
