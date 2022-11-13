const cssnano = require("cssnano")({
	preset: [
		"default",
		{
			cssDeclarationSorter: true,
			discardEmpty: true,
			discardOverridden: true,
			discardDuplicates: true,
			discardComments: true,
			mergeIdents: true,
			mergeLonghand: true,
			mergeRules: false,
			minifySelectors: true,
			minifyParams: true,
			minifyGradients: true,
			minifyFontValues: true,
			normalizeWhitespace: true,
			normalizePositions: true,
			normalizeUrl: true,
			normalizeDisplayValues: true,
			reducetransforms: true,
			reduceIdents: true,
			uniqueSelectors: true,
		},
	],
});
module.exports = {
  plugins: [
		require("autoprefixer"),
		cssnano,
    require("postcss-mixins"),
    require("postcss-import"),
    require("postcss-nested")
  ],
};