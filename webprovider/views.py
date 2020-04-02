from django.shortcuts import render


def index(request):
    return render(request, 'index.html')


def routable_index(request, aticle_slug):
    return render(request, 'index.html')
