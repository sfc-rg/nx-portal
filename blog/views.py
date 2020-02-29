from django.shortcuts import render, redirect
from django.utils import html
from django.views.generic import View

from .models import (
    Post
)

import markdown


class BlogView(View):

    def get(self, request):

        if "post_id" in request.GET:
            post_id = request.GET.get("post_id")
            post = Post.objects.filter(published_id=post_id).last()

            context = {
                'title': post.title,
                'body': post.blog_contents,
            }

            return render(request, 'blog/post.html', context)

        posts = Post.objects.all()

        context = {
            'data': posts,
            'count': len(posts),
        }

        return render(request, 'blog/index.html', context)


class BlogCreateView(View):

    def get(self, request):

        context = {
            'restored_title': "ERROR",
            'restored_body': "ERROR",
        }

        return render(request, 'blog/create.html', context)

    def post(self, request):

        title = request.POST['title']
        body = request.POST['body']

        new = Post(
            title=title,
            is_published=True,
            # created_by =
            body=body,
        )
        new.save()

        return redirect('/blog/')
