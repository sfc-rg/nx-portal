from django.urls import path
from upload.views import (
    UploadView, UploadCreateView
)

urlpatterns = [
    path('', UploadView.as_view(), name='upload'),
    path('create/', UploadCreateView.as_view(), name='create'),

]
