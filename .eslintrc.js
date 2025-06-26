module.exports = {
	root: true,

	env: {
		browser: true,
		es6: true,
		node: true,
	},

	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		sourceType: 'module',
	},

	extends: ['plugin:n8n-nodes-base/nodes'],

	plugins: ['n8n-nodes-base'],

	ignorePatterns: [
		'dist/**',
		'node_modules/**',
		'**/*.js',
	],

	rules: {
		'n8n-nodes-base/node-filename-against-convention': 'error',
		'n8n-nodes-base/node-class-description-inputs-wrong-regular-node': 'error',
		'n8n-nodes-base/node-class-description-outputs-wrong': 'error',
		'n8n-nodes-base/node-execute-block-double-assertion-for-items': 'error',
		'n8n-nodes-base/node-param-default-wrong-for-simplify': 'error',
		'n8n-nodes-base/node-param-placeholder-miscased-id': 'error',
		'n8n-nodes-base/node-param-min-value-wrong-for-limit': 'error',
		'n8n-nodes-base/node-param-collection-type-unsorted-items': 'error',
		'n8n-nodes-base/node-param-icon-not-svg': 'error',
		'n8n-nodes-base/node-param-default-missing': 'error',
		'n8n-nodes-base/node-param-fixed-collection-type-unsorted-items': 'error',
		'n8n-nodes-base/node-param-operation-without-no-data-expression': 'error',
		'n8n-nodes-base/node-param-resource-without-no-data-expression': 'error',
		'n8n-nodes-base/node-param-display-name-excess-inner-whitespace': 'error',
		'n8n-nodes-base/node-param-display-name-untrimmed': 'error',
		'n8n-nodes-base/node-param-display-name-miscased-id': 'error',
		'n8n-nodes-base/node-param-display-name-miscased': 'error',
		'n8n-nodes-base/node-param-description-excess-inner-whitespace': 'error',
		'n8n-nodes-base/node-param-description-identical-to-display-name': 'error',
		'n8n-nodes-base/node-param-description-missing-final-period': 'error',
		'n8n-nodes-base/node-param-description-miscased-json': 'error',
		'n8n-nodes-base/node-param-description-lowercase-first-char': 'error',
		'n8n-nodes-base/node-param-description-untrimmed': 'error',
	},
};