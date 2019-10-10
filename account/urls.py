from django.urls import path
from account.views import Login, Logout, ProfileView

urlpatterns = [
    path('', ProfileView.as_view()),
    path('login/', Login.as_view(), name='login'),
    path('logout/', Logout.as_view(), name='logout'),
]
