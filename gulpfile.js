const { src, dest } = require("gulp");
const argv = require("yargs").argv;
var path = require("path");


/**
 * arguments 
 * env - enviroment (mandatory)
 * ff - feature file/service
 * tag - given tag/tags
 */


var featurePath = (argv.ff == undefined) ?  path.join(path.dirname(require.main.filename),'tests','features') : path.join(path.dirname(require.main.filename),'tests','features',argv.ff)
