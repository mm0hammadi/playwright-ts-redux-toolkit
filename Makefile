install:
	npm ci

start:
	npm start

build:
	docker-compose build

deploy:
	npm run deploy

up:
	docker-compose up -d

down:
	docker-compose down

lint:
	npx eslint .

linter-fix:
	npx eslint . --fix

test:
	npx playwright test

test-install:
	npx playwright install --with-deps

app-install:
	docker-compose run --rm web make install

app-lint:
	docker-compose run --rm --no-deps web make lint

app-test:
	docker-compose run --rm web make test-install test

app-check: app-lint app-test

app-setup: build app-install
