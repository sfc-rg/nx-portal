CURDIR = $(CURDIR)

.PHONY: format
format:
	pipenv run format
	cd shell && yarn format

.PHONY: clean
clean:
	rm -rf frontend/dist/

.PHONY: build
build:
	./frontend/node_modules/.bin/webpack -d
