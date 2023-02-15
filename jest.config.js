/* eslint-disable no-undef */
module.exports = {
	testIgonrePatterns: ['/node_modules/'],
	setupFilesAfterEnv: [
		'<rootDir>/src/tests/setupTests.ts'
	],
	'^.+\\.(js|jsx|ts|tsx)$': '<rootdir>/node_modules/babel-jest',
	testEnvironment: 'jsdom'
};