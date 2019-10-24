from django.shortcuts import render, redirect
from django.utils import html
from django.views.generic import View

from .models import (
    UploadFile
)


class UploadView(View):

    def get(self, request):
        
        files = UploadFile.objects.all()

        context = {
            'data': files,
        }

        return render(request, 'upload/index.html', context)
