install:
	npm install

brain-games:
	 node index.js

lint:
	npx eslint .

publish:
	npm publish --dry-run
	npm link