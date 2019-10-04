clean:
	rm -rf frontend/dist/

build:
	./frontend/node_modules/.bin/webpack -d
