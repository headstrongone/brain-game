install:
	npm install

brain-games:
	 node index.js

lint:
	npx install eslint .

publish:
	npm publish --dry-run
	npm link