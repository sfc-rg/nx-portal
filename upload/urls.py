from django.urls import path
from upload.views import (
    UploadView
)

urlpatterns = [
    path('', UploadView.as_view(), name='upload'),
]
