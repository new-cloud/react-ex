const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');
const path = require('path');
// module.exports = function override(config, env) {
//     // do stuff with the webpack config...
//     return config;
//   };
module.exports = override(
  	fixBabelImports('import', {
  	  	libraryName: 'antd-mobile',
  	  	style: 'css',
  	}),
	addWebpackAlias({
		'@': path.resolve(__dirname, 'src')
	})
);