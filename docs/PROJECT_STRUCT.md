# Project structure

## Applications

- ### account

Account management and user profile application that is integrated to Django auth system.

- ### blog

It provides `blog` service that is basic feature of RG portal. 

- ### portal

Main application of NX portal. Settings and shared models and variables are contained. 

- ### corefunc

This is one of Python package and not a Django application. It includes files stream, slack integration apart from other Django application.


## Folder structure

```
.
├── account             # Account application
│   └── migrations
├── blog                # Blog application
│   └── migrations
├── corefunc            # Core functions library
├── docs
├── frontend            # Front-end files such as HTML/CSS/JS
│   └── src
├── meeting             # Meeting application
│   └── migrations
└── portal              # Main application of NX portal
    └── configs

```
