import os

# NECO Portal Configurations
try:
    APPLICATION_URL = os.environ["APPLICATION_URL"]
except:
    APPLICATION_URL = "localhost:8080"


try:
    SEASONABLE_EMOJI = os.environ["SEASONABLE_EMOJI"] + "  "
except:
    SEASONABLE_EMOJI = ""

try:
    APPLICATION_NAME = os.environ["APP_NAME"]
except:
    APPLICATION_NAME = "NECO Portal"
