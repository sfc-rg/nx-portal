from django.conf import settings


def shared_view_contexts(request):
    return {
        'APP_NAME': settings.APPLICATION_NAME,
        'SEASONABLE_EMOJI': settings.SEASONABLE_EMOJI,
        'DRIVE_ID': settings.DRIVE_ID,
        'CALENDAR_LINK': settings.CALENDAR_LINK
    }
