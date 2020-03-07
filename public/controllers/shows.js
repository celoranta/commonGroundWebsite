
const weekdays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

const showsHeader = "SHOW DATES";
const showsBlurb = "Party with Common Ground Live!";
const monthQtyToShow = 6;
const maxShowsPerMonth = 3;
const showPromoRemovalDelayHours = 48;
const venueNameWebKey = "custom_4wjmF5";
const venueImageWebKey = "custom_DmBpPG";
const eventBlurbWebKey = "custom_KKmJlb";
const overrideContactLocationWebKey = "custom_S3Rzc6";
const eventDateWebKey = "date_start";
const imagePrefix = "/images/";
const defaultShowImage = "/images/outdoorCrop3.jpg";
const overrideContactNameWebKey = "custom_VFJn1h";
const venueLocationWebKey = "custom_cnnQpT";
const overrideContactImageWebKey = "custom_wQdsyY";

/*  
FOR REFERENCE:
    "custom_4wjmF5": "VenueName",
    "custom_DmBpPG": "VenueImage",
    "custom_KKmJlb": "EventBlurb",
    "custom_S3Rzc6": "OverrideContactLocation",
    "custom_VFJn1h": "OverrideContactName",
    "custom_cnnQpT": "VenueLocation",
    "custom_wQdsyY": "OverrideContactImage"
*/

Number.prototype.pad = function (size) {
    var s = String(this);
    while (s.length < (size || 2)) { s = "0" + s; }
    return s;
}

function monthString() {
    var monthNum = arguments[0];
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    return months[monthNum];
};

var is_date = function(input) {
    if ( Object.prototype.toString.call(input) === "[object Date]" ) 
      return true;
    return false;   
      };

function prettyDateString(dt) {
    if(is_date(dt)){
    // var dt = new Date("July 21, 1983 15:15:00 CST");
    var hm = dt.getHours(); // hours military
    var mix = dt.getMinutes();
    var wd = dt.getDay();
    var d = dt.getDate()
    var y = dt.getFullYear();
    var mo = dt.getMonth();

    var dateString =  weekdays[wd] + " " + monthString(mo) + " " + d + ", " + y /* + timeString*/ ;
    return dateString;
    }
    else{
        return "TBA";
    };
};

function prettyHourString(dt) {
    if(dt.getHours()){
    // var dt = new Date("July 21, 1983 15:15:00 CST");
    var hm = dt.getHours(); // hours military
    var mix = dt.getMinutes();
    var amPm = hm > 11 ? "pm" : "am";
    var h = hm % 11;
    var mi = mix.pad(2);

    var timeString = " at " + h + ":" + mi + amPm;

    //var dateString =  weekdays[wd] + " " + monthString(mo) + " " + d + ", " + y + timeString ;
    return timeString;
    }
    else{
        return " (time TBA)";
    }
};

function prettyDateTimeString(d, t){
return prettyDateString(d) + prettyHourString(t);
}

// The "callback" argument is called with either true or false
// depending on whether the image at "url" exists or not.
function imageExists(url, callback) {
    var img = new Image();
    img.onload = function() { callback(true); };
    img.onerror = function() { callback(false); };
    img.src = url;
  }
  
function constructMonthlyShowListItemDiv(item, showQty) {
    var status = "Book Common Ground";
    var buttonColor = 'w3-green';
    if (showQty >= maxShowsPerMonth) {
        status = "Full Calendar";
        buttonColor = 'w3-black';
        // statusClass = "w3-badge w3-right w3-margin-right"
    }

    var itemDiv = document.createElement('li');
    itemDiv.setAttribute('class', 'w3-padding');
    itemDiv.innerHTML = monthString(item);
    var itemSpan1 = document.createElement('span');
    var bookUs = document.createElement('a');
    bookUs.setAttribute('class', 'w3-tag');
    bookUs.className += ' w3-margin-left';
    bookUs.innerHTML = status;
    bookUs.setAttribute('href', "#contact")
    bookUs.className += ' w3-button';
    if (status != 'Full Calendar') {
        bookUs.className += ' ' + buttonColor;
    }
    var itemSpan2 = document.createElement('span');
    itemSpan2.setAttribute('class', 'w3-badge');
    itemSpan2.className += ' w3-right';
    itemSpan2.className += ' w3-margin-right';
    itemSpan2.innerHTML = showQty;

    //nest divs
    itemSpan1.appendChild(bookUs);
    itemDiv.appendChild(itemSpan1);
    itemDiv.appendChild(itemSpan2);
    return itemDiv;
}

function constructShowPromo() {
    var show = arguments[0];
    var mainWrapperDiv = document.createElement('div');
    mainWrapperDiv.setAttribute('class', 'w3-third');
    mainWrapperDiv.className += " w3-margin-bottom";
    //mainWrapperDiv.className += " w3-button";

    //create image div {scale images to 400:280 in GIMP}
    var venueImageDiv = document.createElement('img');
    imageExists(show.venueImage, function(exists) {
        if (exists){
            venueImageDiv.setAttribute('src', show.venueImage);
           // console.log("Show image exists");
        }
        else {
            venueImageDiv.setAttribute('src', defaultShowImage);
          //  console.log('Show does not exist')
        }
    });

   // venueImageDiv.setAttribute('src', show.venueImage);
    venueImageDiv.setAttribute('alt', show.venue);
    venueImageDiv.setAttribute('style', "width:100%; border-bottom: 1px solid silver");

    //create subwrapper div
    var subWrapperDiv = document.createElement('div');
    subWrapperDiv.setAttribute('class', 'w3-container');
    subWrapperDiv.className += ' w3-white';

    //create venue name paragraph div
    var nameBlock = document.createElement('p');
    var venueString = show[overrideContactNameWebKey] || show.venue || "TBA";
    nameBlock.innerHTML = venueString.bold();

    //create showdate paragraph div
    showDateUTC = new Date(show.date_start.split("-")[0], show.date_start.split("-")[1]-1,show.date_start.split("-")[2], 12, 0, 0);
    showTimeUTC = new Date(show.date_start.split("-")[0], show.date_start.split("-")[1]-1,show.date_start.split("-")[2], show.time_start.split(":")[0], show.time_start.split(":")[1], show.time_start.split(":")[2], 0)
    showTimeUTC.setHours(showTimeUTC.getHours() - 1);
    var showDatePretty = prettyDateTimeString(showDateUTC, showTimeUTC);
    var dateDiv = document.createElement('p');
    dateDiv.setAttribute('class', 'w3-opacity')
    dateDiv.innerHTML = showDatePretty;

    //create venue location paragraph div
    var locationBlock = document.createElement('p');
    //var locationString = show[overrideContactLocationWebKey]|| show.city;
    var locationString = show[overrideContactLocationWebKey] || show[venueLocationWebKey] || "TBA";
    locationBlock.innerHTML = locationString.fontcolor("Gray");

    //create  blurb paragraph div
    var blurbDiv = document.createElement('p');
    blurbDiv.innerHTML = show.blurb;

    // var buttonDiv = document.createElement('button');
    // buttonDiv.setAttribute('class', 'w3-button');
    // buttonDiv.className += " w3-black";
    // buttonDiv.className += " w3-margin-bottom";
    // buttonDiv.setAttribute('onclick', "document.getElementById('ticketModal').style.display='block'" );
    // buttonDiv.innerHTML = 'Request Songs';

    //nest divs
    mainWrapperDiv.appendChild(venueImageDiv);
    subWrapperDiv.appendChild(nameBlock);
    subWrapperDiv.appendChild(dateDiv);
    subWrapperDiv.appendChild(locationBlock);
    // subWrapperDiv.appendChild(blurbDiv);
    // subWrapperDiv.appendChild(buttonDiv);
    mainWrapperDiv.appendChild(subWrapperDiv);
    return mainWrapperDiv;
};

function countShowsInMonth(monthInt, showList) {
    var i = 0;
    var n = 0;
    for (i = 0; i < showList.length; i++) {
        show = showList[i];
        showDate = new Date(show.date);
        console.log("Date: " + showDate);
        if (monthInt == showDate.getMonth()) {
            n++
        }
    }
    return n;
};

//Header content
function postShows(showList){
document.getElementById('shows-header').innerHTML = showsHeader;
document.getElementById('shows-blurb').innerHTML = showsBlurb.italics();

// Create a list of months to be presented
var thisDate = new Date();
var monthsShownList = [thisDate];
i = 0;
monthQtyMaxed = monthQtyToShow > 12 ? 12 : monthQtyToShow;
for (i = 1; i < monthQtyMaxed; i++) {
    var newMonthDate = new Date();
    newMonthDate.setMonth(thisDate.getMonth() + i);
    monthsShownList.push(newMonthDate);
};

// Present shows by month list
var showsByMonthDiv = document.getElementById('shows-by-month');
i = 0;
for (i = 0; i < monthsShownList.length; i++) {
    console.log("List item iteration");
    const showMonthDate = monthsShownList[i];
    const showMonth = showMonthDate.getMonth();
    var monthlyShowCount = countShowsInMonth(showMonth, showList);
    var listItemDiv = constructMonthlyShowListItemDiv(showMonth, monthlyShowCount);
    showsByMonthDiv.appendChild(listItemDiv);
}

// Show promo panels
var showsToPromo = [];
i = 0;
for (i = 0; i < showList.length; i++) {
    const show = showList[i];
    showsToPromo.push(show);
}
i = 0;
for (i = 0; i < showsToPromo.length; i++) {
    console.log(i);
    var show = showsToPromo[i];
    var wrapperDiv = constructShowPromo(show);
    var container_block = document.getElementById('scheduled-shows');
    container_block.appendChild(wrapperDiv);
};
};
fetch('/showsJSON')
    .then(
        function (response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }
            response.json()
                .then(function (showsJSArray) {
                    return showsJSArray;
                })
                .then((showsList) => {
                    i = 0;
                    let newShowsArray = [];
                    for (i = 0; i < showsList.length; i++) {
                        var thisShowObject = showsList[i];
                        var imageFilePath = imagePrefix + thisShowObject[venueImageWebKey];
                        var overrideImageFilePath = imagePrefix + thisShowObject[overrideContactImageWebKey];

                        thisShowObject["venue"] = thisShowObject[venueNameWebKey];
                        if (thisShowObject[overrideContactImageWebKey] === ""){
                            thisShowObject["venueImage"] = imageFilePath
                        }
                        else {
                            thisShowObject["venueImage"] = overrideImageFilePath
                        };
                        //var correctImage =  imageFilePath;
                        //thisShowObject["venueImage"] = (correctImage );
                        thisShowObject["blurb"] = thisShowObject[eventBlurbWebKey];
                        thisShowObject["date"] = thisShowObject[eventDateWebKey];
                        delete thisShowObject[venueImageWebKey];
                        delete thisShowObject[venueNameWebKey];
                        delete thisShowObject[eventBlurbWebKey];
                        newShowsArray.push(thisShowObject);   
                    }
                    console.log("New Shows Object:" + JSON.stringify(newShowsArray));
                    return newShowsArray
                })
                .then((showList) => {
                    postShows(showList);
                })
        })
    .catch(function (err) {
        console.log('Fetch Error :-S', err);
    });

