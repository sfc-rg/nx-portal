import os

# SECURITY WARNING: keep the secret key used in production secret!
try:
    SECRET_KEY = os.environ["PORTAL_SECRET_KEY"]
except BaseException:
    print("\033[31m" + "************************************************************************")
    print("* [WARNING]                                                            *")
    print("* The secret key was not set!                                          *")
    print("* Use alternative hard coded key currently.                            *")
    print("************************************************************************" + "\033[0m")
    SECRET_KEY = '$3x)8ofs$9kkutzioi72i0ti4!s^*1j_2ivls#o4ca)--mzl2z'
