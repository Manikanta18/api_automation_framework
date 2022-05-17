const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

class World {

async request(m) {
    console.log(m);
    const response = await fetch('https://github.com/');
    const body = await response.text();
    return body
}
}

module.exports = {World};

    