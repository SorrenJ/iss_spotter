
const { fetchMyIP } = require('./iss_promised');

fetchMyIP()
  .then(body => console.log(body));

  // Output:
  // {"ip":"10.22.100.000"}

  