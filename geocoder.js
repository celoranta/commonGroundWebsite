var NodeGeocoder = require('node-geocoder');
var fetch = require('node-fetch');

var options = {
    provider: 'mapquest',
    // Optional depending on the providers
    httpAdapter: 'https', // Default
    apiKey: process.env.MAPQUEST_API_KEY, // for Mapquest, OpenCage, Google Premier
    formatter: 'null'         // 'gpx', 'string', ...
};

var geocoder = NodeGeocoder(options);

async function geocode(address) {
    try {
        return await geocoder.geocode(address);
        //return results;
    }
    catch (err) {
        console.log(err)
        // return err
    }
};


fetch('http://localhost:8000/showsJSON')
    .then(
        (response) => {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }
            response.json()
                .then(function (showsJSArray) {
                    for (i = 0; i < showsJSArray.length; i++) {
                        let thisShow = showsJSArray[i];
                        let thisAddress = thisShow.address;
                        if (thisAddress != "TBD" && thisAddress != "") {
                            geocoder.geocode(thisAddress, (err, res) => {
                                let resultObject = res[0];
                                console.log('Sent: ' + thisAddress);
                                console.log('returned: ');
                                let place = resultObject.city + ", " + resultObject.stateCode
                                let lat = resultObject.latitude;
                                let long = resultObject.longitude;
                                let locationObject = { "placeName": place, "latitude": lat, "longitude": long }
                                console.log(locationObject);
                            });
                        }
                    }
                })
        })
    .catch(function (err) {
        console.log('Fetch Error :-S', err);
    });

module.exports.geocode = geocode;