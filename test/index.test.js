const NeedlemanSearch = require('../src/index')
const assert = require("chai").assert;

describe('NeedlemanSearch algorithm', () => {
	it('should instantiate', () => {
		const needleman = new NeedlemanSearch()
		assert.exists(needleman)
	})

	it('should return object with match and similar', () => {
		const words = ["cat", "cats", "cut", "pig","dog", "elephant", "camel"]

		const needleman = new NeedlemanSearch()

		const result = needleman.search("cat", words)

		assert.exists(result)
		assert.deepEqual({15: ["cat"], 14: ["cats"], 8: ["cut"]}, result)
	})

	it('should match with errors', () => {
		const words = ["cat", "cats", "cut", "pig","dog", "elephant", "camel"]

		const needleman = new NeedlemanSearch()

		const result = needleman.search("cet", words)

		assert.exists(result)
		assert.deepEqual({8: ["cat", "cut"]}, result)
	})

	it('should return empty object when no pool', () => {
		const words = []

		const needleman = new NeedlemanSearch()

		const result = needleman.search("cet", words)

		assert.exists(result)
		assert.deepEqual({}, result)
	})

	it('should return empty object when no match', () => {
		const words = ["cat", "cats", "cut", "pig","dog", "elephant", "camel"]

		const needleman = new NeedlemanSearch()

		const result = needleman.search("bird", words)

		assert.exists(result)
		assert.deepEqual({}, result)
	})
})

