const argv = require("yargs").argv;
var path = require("path");
var cucumber = require('gulp-cucumber');
var gulp =  require('gulp');

/**
 * arguments 
 * env - enviroment (mandatory)
 * ff - feature file/service
 * tag - given tag/tags
 */


var projectPath = path.dirname(require.main.filename);
var feature_file =  (argv.ff == undefined) ? undefined : argv.ff + '.feature'
var featurePath = (feature_file == undefined) ?  path.join(projectPath,'tests','features','*') : path.join(projectPath,'tests','features',feature_file);

const options = {
    'steps': path.join(projectPath,'tests','features','step_definition.js'),
    'format': 'summary',
    'tags': argv.tag,
}

gulp.task('api-test', function() {
    return gulp.src(featurePath).pipe(cucumber(options));
})