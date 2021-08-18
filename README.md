[![Tests](https://github.com/juanpablocruz/needleman-wunsch-javascript/actions/workflows/test.yml/badge.svg)](https://github.com/juanpablocruz/needleman-wunsch-javascript/actions/workflows/test.yml)
# Needleman-Wunsch algorithm

This project provides a simple implementation of the Needleman-Wunsch algorithm for searching strings in a pool while supporting errors in the needle.

## Installation

Download the package and install it to your dependencies

```bash
npm install needleman-js
```


## Usage

You can work with this class as is, with the default configuration:

```javascript
const NeedlemanSearch = require('needleman-js');

const needleman = new NeedlemanSearch();

const pool = ["cat", "cats", "cut", "pig","dog", "elephant", "camel"]

const result = needleman.search("cat", pool);

```

Or you can tweak the different values:

- indePenalty: The default is -1. This will be subtracted from the score for each space error on letters from the pool item.
- missPenalty: The default is -2. This will be subtracted from the score for each miss on letters from the pool item.
- matchReward: The default is +5. This will be added to the score for each letter matching the pool item.
- scoringFn: The default compares a direct match. This provides how the scoring of an element is calculated for each pool item.
- calcMinExpectedScore: The default calculates the (needle.length * this.matchReward) / 2.0;

```javascript
const needleman = new NeedlemanSearch(
	indePenalty, 
	missPenalty, 
	matchReward, 
	scoringFn, 
	calcMinExpectedScore);
```

## Authors

- [Juan Pablo Cruz](https://www.github.com/juanpablocruz)


## License

[MIT](LICENSE)
