#
# Mirage Configuration Scripts Version 2018/03/23
# Copyright (c) 2017-2018 Shota Shimazu
# This software is licensed under the Apache v2, see LICENSE for detail.
#

from mirage import system as mys
from mirage.core import Void
from mirage.miragefile.conf import Category, Detail, Config
from mirage.confscript import ConfigScript
from mirage.confscript.settings import Settings

MIRAGE_CONFIG_SCRIPT_VERSION = "0.0.1"
MIRAGE_CONFIG_DEFAULT_CLASS = "MirageConfig"


class MirageConfig(ConfigScript):

    BASIC_PROJECT = {
        "NAME": "portal",
        "VERSION": "0.0.1",
        "AUTHOR": "Shota Shimazu <shotan@sfc.wide.ad.jp>",
        "GIT_URL": "https://github.com/sfc-rg/nx-portal",
        "LICENSE": "Apache",
        "DESCRIPTION": "Next RG Portal",
    }

    DJANGO_PROJECT = {
        "path": ".",
        "module": "portal",
        "package": "pipenv",
        "database": "PostgreSQL",
    }

    FRONT_END_PROJECT = {
        "path": "shell",
        "package": "yarn",
        "builder": "webpack",
    }

    COPYRIGHT = {
        "start_year": 2019,
        "copyrightors": [
            "Shota Shimazu",
        ]
    }

    def initialize(self) -> Void:
        mys.log("Mirage Setting Script v0.0.1")

    def main(self) -> int:
        # Add custom CLI script written in Python3
        # self.register_custom_command("custom-command", "<option>", "tools/scripts/custom_script.py")

        # Add custom CLI script written in other programming language.
        # self.register_custom_command_with_runtime("custom-command", "tools/scripts/custom_script.rb", "ruby")

        return 0

    def deinitialize(self) -> Void:
        mys.log("Bye : )")
