/*
const { fetchMyIP } = require('./iss_promised');
const { fetchCoordsByIP } = require('./iss_promised');
const { fetchISSFlyOverTimes } = require('./iss_promised');
*/
const { nextISSTimesForMyLocation } = require('./iss_promised');
//FetchMyIP + fetchCoordsByIP  + fetchISSFlyOverTimes

/*
fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(body => console.log(body));
 */


// nextISSTimesForMyLocation (callback version)
  const printPassTimes = function(passTimes) {
    for (const pass of passTimes) {
      const datetime = new Date(0);
      datetime.setUTCSeconds(pass.risetime);
      const duration = pass.duration;
      console.log(`Next pass at ${datetime} for ${duration} seconds!`);
    }
  };
  // nextISSTimesForMyLocation (callback version)
  nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  
 

// nextISSTimesForMyLocation() Output:
/*
Next pass at Tue Apr 30 2024 18:53:22 GMT-0700 (Pacific Daylight Time) for 552 seconds!
Next pass at Wed May 01 2024 05:00:02 GMT-0700 (Pacific Daylight Time) for 508 seconds!
Next pass at Wed May 01 2024 15:06:42 GMT-0700 (Pacific Daylight Time) for 303 seconds!
Next pass at Thu May 02 2024 01:13:22 GMT-0700 (Pacific Daylight Time) for 296 seconds!
Next pass at Thu May 02 2024 11:20:02 GMT-0700 (Pacific Daylight Time) for 705 seconds!

*/









 
  // FetchMyIP Output:
  // {"ip":"10.22.100.000"}

//FetchMyIP + fetchCoordsByIP Output:
/*
{"ip":"174.7.17.16","success":true,"type":"IPv4",
"continent":"North America",
"continent_code":"NA","country":"Canada",
"country_code":"CA","region":"British Columbia",
"region_code":"BC","city":"Vancouver",
"latitude":49.2827291,"longitude":-123.1207375,
"is_eu":false,"postal":"98661","calling_code":"1",
"capital":"Ottawa","borders":"US",
"flag":{"img":"https:\/\/cdn.ipwhois.io\/flags\/ca.svg","emoji":"\ud83c\udde8\ud83c\udde6","emoji_unicode":"U+1F1E8 U+1F1E6"},"connection":{"asn":6327,"org":"Shaw Communications Inc.","isp":"Shaw Communications Inc.","domain":"shaw.ca"},"timezone":{"id":"America\/Vancouver","abbr":"PDT","is_dst":true,"offset":-25200,"utc":"-07:00","current_time":"2024-04-30T01:23:26-07:00"}}
*/

//FetchMyIP + fetchCoordsByIP  + fetchISSFlyOverTimes Output:

/*
{"message":"success",
"request":{"datetime":1714466327,"latitude":49.2827291,
"longitude":-123.1207375,"altitude":1,"number":5},
"response":[{"risetime":1714559812,"duration":127},{
    "risetime":1714596212,"duration":351},
    {"risetime":1714632612,"duration":322},
    {"risetime":1714669012,"duration":559},
    {"risetime":1714705412,"duration":419}]}
*/