from django.shortcuts import render
from django.views.generic import View

from .models import (
    Post
)

import markdown
from markdownx.utils import markdownify
from markdownx.settings import (
    MARKDOWNX_MARKDOWN_EXTENSIONS,
    MARKDOWNX_MARKDOWN_EXTENSION_CONFIGS
)
from markdown.extensions import Extension




class BlogView(View):

    def get(self, request):

        posts = Post.objects.all()

        context = {
            'data': posts,
        }

        return render(request, 'blog/index.html', context)





class BlogCreateView(View):

    def get(self, request):


        context = {
        }

        return render(request, 'blog/create.html', context)
