module.exports = {
	ignorePatterns: [
		'node_modules/'
	],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module'
	},
	env: {
		browser: true,
		commonjs: true
	},
	reportUnusedDisableDirectives: true,
	rules: {
		'no-fallthrough': 'error'
	}
};
