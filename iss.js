
const request = require('request');

const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  
  /*

It should:

pass through the error to the callback if an error occurs when requesting the IP data
parse and extract the IP address using JSON and then pass that through to the callback (as the second argument) if there is no error

*/


  request(`https://api.ipify.org?format=json`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    // Check for a successful status code (200) before proceeding
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    // Parse the body to JSON after verifying there's no error
    const data = JSON.parse(body);

    // Assuming 'ip' is the property containing the IP address in the response JSON
    if (data && data.ip) {
      callback(null, data.ip);
    } else {
      const msg = "IP address not found in response";
      callback(Error(msg), null);
    }
  });
};

module.exports = { fetchMyIP };