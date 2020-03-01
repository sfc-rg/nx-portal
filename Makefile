clean:
	rm -rf frontend/dist/

build:
	./frontend/node_modules/.bin/webpack -d

CURDIR = $(CURDIR)

.PHONY: format
format:
	pipenv run format
	cd shell && yarn format
