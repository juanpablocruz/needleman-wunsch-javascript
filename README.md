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

## About the algorithm
This package is an implementation of Needleman-Wunsch algorithm. It is an algorithm developed in bioinformatics to align protein or nucleotide sequences. But it provides a fast and simple way of searching a needle in a pool of elements allowing some discordances:

```javascript

const pool = ["cat", "cats", "cut", "pig","dog", "elephant", "camel"]

const resultCat = needleman.search("cat", pool); 
// { '8': [ 'cut' ], '14': [ 'cats' ], '15': [ 'cat' ] }
const resultCet = needleman.search("cet", pool); 
// { '8': [ 'cat', 'cut' ] }

```

The output will be an object with the matching score as keys and an array of the pool elements as values.

We can tweak the algorithm by setting three variables:
- indePenalty: the scoring penalty when the matching elements are not aligned, i.e. there are some characters or spaces that will be required to match: the pair: (cat, cats) will require an element 's' to be inserted.
- missPenalty: The scoring penalty when two elements do not match directly. 
- matchReward: How much points will be awarded when two elements match.

With these three variables we can build a matrix for all the scores that would have each element of the needle compared with each element of each iteration of the pool:

![Sequence alignment](https://upload.wikimedia.org/wikipedia/commons/3/3f/Needleman-Wunsch_pairwise_sequence_alignment.png)

## Authors

- [Juan Pablo Cruz](https://www.github.com/juanpablocruz)


## License

[MIT](LICENSE)