/**
 * Implementation of Needleman-Wunsch algorithm for searching words in a pool with or without errors.
 */
class NeedlemanSearch {
	/**
	 *
	 * @param {Number} indePenalty penalty for indentation unmatch
	 * @param {Number} missPenalty penalty for matching miss
	 * @param {Number} matchReward reward for value matching
	 * @param {(String) => Number} calcMinExpectedScore callback for calculating minimal score
	 */
	constructor(
		indePenalty = -1,
		missPenalty = -2,
		matchReward = 5,
		calcMinExpectedScore = null
	) {
		this.indePenalty = indePenalty;
		this.missPenalty = missPenalty;
		this.matchReward = matchReward;

		this.calcMinExpectedScore = calcMinExpectedScore
			? calcMinExpectedScore.bind(this)
			: this.defaultMinExpectedScore.bind(this);
	}

	defaultMinExpectedScore(needle) {
		return (needle.length * this.matchReward) / 2.0;
	}

	search(needle, pool) {
		const minExpectedVal = this.calcMinExpectedScore(needle);
		const matches = pool.reduce((acc, str) => {
			const val = this.matchingScore(needle, str);
			if (val > minExpectedVal) {
				acc[val] = [...(acc[val] ? acc[val] : []), str]
			}
			return acc;
		}, {});

		return matches;
	}

	matchingScore(needle, match) {
		let needleLower = needle.toLowerCase();
		let matchLower = match.toLowerCase();

		let M = Array.from(
			Array(needleLower.length + 1),
			() => new Array(matchLower.length + 1)
		);

		for (let i = 0; i <= needleLower.length; i++) {
			M[i][0] = i * this.indePenalty;
		}
		for (let i = 0; i <= matchLower.length; i++) {
			M[0][i] = i * this.indePenalty;
		}

		let score;
		for (let i = 1; i <= needleLower.length; i++) {
			for (let j = 1; j <= matchLower.length; j++) {
				score =
					needleLower[i - 1] === matchLower[j - 1]
						? this.matchReward
						: this.missPenalty;
				M[i][j] = Math.max(
					M[i - 1][j - 1] + score,
					M[i][j - 1] + this.indePenalty,
					M[i - 1][j] + this.indePenalty
				);
			}
		}
		return M[needleLower.length][matchLower.length];
	}
}

module.exports = NeedlemanSearch;
