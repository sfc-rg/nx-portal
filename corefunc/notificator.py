import requests

class SlackNotificator():
    


    def shoot(self, text):

        try:
            WEB_HOOK_URL = settings.SLACK_INCOMING_TOKEN

            requests.post(WEB_HOOK_URL, data = json.dumps({
                'text': text,
                'username': u'{0} Portal System'.format(settings.APPLICATION_NAME),
                'icon_emoji': u':smile_cat:',
                'link_names': 1,
            }))
        except:
            pass
