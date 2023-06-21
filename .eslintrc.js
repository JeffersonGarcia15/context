module.exports = {
	env: {
		jest: true,
	},
	extends: ["eslint-config-codely"],
	parser: "@typescript-eslint/parser",

	rules: {
		semi: ["error", "always"],
		quotes: ["error", "double"],
		"no-console": "off",
	},
};
