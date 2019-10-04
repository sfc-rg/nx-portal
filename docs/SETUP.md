# Setup Development Environment

*Last updated at 2019/10/04 by [shotan](mailto:shotan@sfc.wide.ad.jp)*.

## Supported Platforms

- macOS

- Ubuntu-based Linux distribution

- FreeBSD, Solaris and other Unix-based modern operating system.

>> If you're Window user, please setup WSL.

## Recommended Toolchains

- **pipenv** is necessary. `requirements.txt` is no longer used.

- If you're using macOS, try **Postgre.app**.

- If you're using Ubuntu, FreeBSD install **PostgreSQL11**.


## Clone poject repository & run local server

After completed cloning project repository, run following commands to restore Python environment.

```shell
pipenv shell
pipenv install
pipenv install -d
```


NX Portal uses SQLite3 on the local environment. So you have to run database migration by running `mg db:migrate` before you launch local server.
This command is superset of `python manage.py migrate`.

```shell
mg db:migrate
```

NX Portal uses `mirage` development tool. You can run local server by running `mg s` instead of `python manage.py runserver`.
After lanched server, access [http://127.0.0.1:8000/](http://127.0.0.1:8000/).

```shell
mg s
```
