const fs = require('fs');
var NodeGeocoder = require('node-geocoder');
var fetch = require('node-fetch');
var async = require('async');
var addresses = './public/objects/addresses.json';
var showsRaw = './public/objects/showsListRaw.json';
var options = {
    provider: 'mapquest',
    httpAdapter: 'https', // Default
    apiKey: process.env.MAPQUEST_API_KEY, // for Mapquest, OpenCage, Google Premier
    formatter: 'null'         // 'gpx', 'string', ...
};
var geocoder = NodeGeocoder(options);

async function geocode(address) {
    try {
        return await geocoder.geocode(address);
    }
    catch (err) {
        console.log(err)
        return (err);
    }
};

var addressLib = {};

function listAddress(addressListing) {
    var addressesGeocodedJson = JSON.parse(fs.readFileSync(addresses));
    let bhAddress = addressListing.origAddress;
    console.log("BHAddress: " + bhAddress)
    addressesGeocodedJson.bhAddress = addressListing.cleanAddress;
    //addressListing.origAddress = addressListing.cleanAddress
    let newAddressJSON = JSON.stringify(addressesGeocodedJson);
    fs.writeFileSync(addresses, newAddressJSON);
}

// create a queue object with concurrency 1
var q = async.queue(function (addressObject, callback) {
    listAddress(addressObject)
    console.log("\nQueue has been run: " + (JSON.stringify(addressObject)))
    callback();
}, 1);

// assign a callback
q.drain = function () {
    console.log('\nAll items have been processed.  Here is addressLib: ' + JSON.stringify(addressLib));
};

function testAddress(address) {
    if (address === "" || address == null || address === "TBA") {
        console.log("\nFailed Address: " + address)
        return false
    }
    else {
        return true
    }
}

fs.access(showsRaw, fs.F_OK, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    var shows = JSON.parse(fs.readFileSync(showsRaw));
    fs.access(addresses, fs.F_OK, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        var addressesGeocodedJson = JSON.parse(fs.readFileSync(addresses));
        var addressesGeocodedKeys = Object.keys(addressesGeocodedJson)
        var addressesBandhelper = shows.map(function (val, index) {
            return val.address
        })
        let bhAddressSet = new Set(addressesBandhelper);
        let gcAddressSet = new Set(addressesGeocodedKeys);
        gcAddressSet.values()
        let a_minus_b = new Set([...bhAddressSet].filter(x => !gcAddressSet.has(x)));
        let unlistedAddresses = Array.from(a_minus_b);
        var filteredAddresses = [];
        for (i = 0; i < unlistedAddresses.length; i++){
            if(testAddress(unlistedAddresses[i])){
                filteredAddresses.push(unlistedAddresses[i])
            }
            else {
                continue
            }
        }
        console.log("\nHere are the " + filteredAddresses.length + " filtered addresses:\n")
        filteredAddresses.forEach((value)=>{console.log(value)})

        for (i = 0; i < filteredAddresses.length; i++) {
            if (testAddress(filteredAddresses[i])) {



                geocoder.geocode(filteredAddresses[i], (err, cleanAddress) => {
                    // add some items to the queue
                    
                    //LOGICAL ERROR: filtered addresses is not defined in the line below.
                    console.log("Filtered Address: " + filteredAddresses[i])
                    q.push({ cleanAddress: cleanAddress, origAddress: filteredAddresses[i] }, function (err) {
                        if(err){"\nError: " + err}
                        console.log('Finished processing foo');
                    });
                })





            };
        }
    });
});

module.exports.geocode = geocode;
