const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
  
module.exports  = {
 async request(options) {
    console.log(options);
    const response = await fetch('https://github.com/');
    const body = await response.text();
    return body
}

}
