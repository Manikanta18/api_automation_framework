let yamls = require('yaml-merge');
let objYaml = '';
let glob = require('glob');
const fetch = require('node-fetch');


module.exports = {

  loadingYaml() {
    glob('tests/properties/*yml'), (err, files) => {
      if (err) {
        return err;
      } else {
        objYaml = yamls.mergeFiles(files);
      }
    }
  },

 async request(endpoint,options) {
    const response = await fetch(endpoint,options);
    // console.log("res -> ",response.body);
    return response
  }

}
