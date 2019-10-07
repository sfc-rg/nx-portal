from django.urls import path
from blog.views import BlogView

urlpatterns = [
    path('', BlogView.as_view(), name='blog'),
]
