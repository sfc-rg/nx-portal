from django.urls import path
from meeting.views import MeetingView

urlpatterns = [
    # path('url_letter/', YOUR_VIEW_CLASS.as_view(), name='starts'),
    path('mtg/', MeetingView.as_view()),
]
