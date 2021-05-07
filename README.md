# Needleman-Wunsch algorithm

This project provides a simple implementation of the Needleman-Wunsch algorithm for searching strings in a pool while supporting errors in the needle.

## Usage

You can work with this class as is, with the default configuration:

```javascript
const NeedlemanSearch = require('needleman');

const needleman = new NeedlemanSearch();

const pool = ["cat", "cats", "cut", "pig","dog", "elephant", "camel"]

const result = needleman.search("cat", pool);

```

Or you can tweak the different values:

- indePenalty: The default is -1. This will be subtracted from the score for each space error on letters from the pool item.
- missPenalty: The default is -2. This will be subtracted from the score for each miss on letters from the pool item.
- matchReward: The default is +5. This will be added to the score for each letter matching the pool item.
- calcMinExpectedScore: The default calculates the (needle.length * this.matchReward) / 2.0;
