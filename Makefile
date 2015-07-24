SRC = index.js

default:
	@echo "No default task is set"

test:
	@./node_modules/.bin/mocha --harmony test

include node_modules/make-lint-es6/index.mk
