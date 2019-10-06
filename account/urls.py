from django.urls import path
from account.views import ProfileView

urlpatterns = [
    path('', ProfileView.as_view()),
]
