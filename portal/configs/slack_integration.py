from os import environ

try:
    SLACK_INCOMING_TOKEN = environ["SLACK_INCOMING_TOKEN"]

except BaseException:
    SLACK_INCOMING_TOKEN = ""
