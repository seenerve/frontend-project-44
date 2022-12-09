install: 
	npm ci 

brainGames:
	node bin/brainGames.js

brain-even:
	node bin/brainEven.js

brain-calc:
	node bin/brainCalc.js

brain-gcd:
	node bin/brainGcd.js

brain-progression:
	node bin/brainProgression.js

brain-prime:
	node bin/brainProgression.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
