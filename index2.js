
const { fetchMyIP } = require('./iss_promised');
const { fetchCoordsByIP } = require('./iss_promised');

fetchMyIP()
.then(fetchCoordsByIP)
.then(body => console.log(body));

  // Output:
  // {"ip":"10.22.100.000"}


