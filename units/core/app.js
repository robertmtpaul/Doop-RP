/**
* Server/App - loads a very basic version of the doop framework
* This file grantees the following items will exist:
*
*	- global.app
*	- global.app.config
*
* This file is used by Gulp, Mocha and other suites that need the `global.app` accessor available without the full Doop stack
*/
global.app = {
	quiet: true,
	config: require('../../config/index.conf'),
};
// }}}
