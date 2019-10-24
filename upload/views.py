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




class UploadCreateView(View):

    def get(self, request):

        context = {
        }

        return render(request, 'upload/create.html', context)

    def post(self, request):

        title = request.POST['title']
        body = request.POST['body']


        new = Post(
            title = title,
            is_published = True,
            # created_by =
            body = body,
        )
        new.save()

        return redirect('/blog/')
