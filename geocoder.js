const fs = require('fs');
var NodeGeocoder = require('node-geocoder');
//var fetch = require('node-fetch');
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

function listAddress(addressListing) {
    console.log("\nAddress Listing: " + JSON.stringify(addressListing))
     var addressesGeocodedJson = JSON.parse(fs.readFileSync(addresses)) 
    console.log("\nAddressGeocodedJSON: " + JSON.stringify(addressesGeocodedJson))
    let z = Object.assign(addressesGeocodedJson, addressListing)
    console.log("Z: " + JSON.stringify(z))
     fs.writeFileSync(addresses, JSON.stringify(z));
}

var q = async.queue(function (addressObject, callback) {
    var sourceAddress = addressObject.sourceAddy;
    var resultAddress = addressObject.resultAddy;
    var addressToList = {};
    addressToList[sourceAddress] = resultAddress
    listAddress(addressToList)
    callback()
}, 1);

q.drain = function () {
    console.log('\nAll items have been processed.');
};

function something(d) {
    var addressObject = {};
    addressObject.sourceAddy = d;
    geocoder.geocode(d)
        .then(function (cleanAddress) {
            addressObject.resultAddy = cleanAddress                
            q.push(addressObject, function (err) {
                if (err) { "\nError: " + err }
                //console.log('Finished processing foo');
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function testAddress(address) {
    if (address === "" || address == null || address === "TBA") {
        console.log("\nFailed Address: " + address)
        return false
    }
    else {
        return true
    }
}

//Body
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
        for (i = 0; i < unlistedAddresses.length; i++) {
            if (testAddress(unlistedAddresses[i])) {
                filteredAddresses.push(unlistedAddresses[i])
            }
            else {
                continue
            }
        }
        console.log("\nHere are the " + filteredAddresses.length + " filtered addresses:\n")
        filteredAddresses.forEach((value) => { console.log(value) })

        for (i = 0; i < filteredAddresses.length; i++) {
            if (testAddress(filteredAddresses[i])) {
                something(filteredAddresses[i])
            }
            else{
                console.log("Address at position " + i + " is null")
            }
        }
    });
});

module.exports.geocode = geocode;
