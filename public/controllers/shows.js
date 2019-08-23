
const weekdays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

const showsHeader = "SHOW DATES";
const showsBlurb = "Party with Common Ground Live!";
const monthQtyToShow = 6;
const maxShowsPerMonth = 3;
const showPromoRemovalDelayHours = 48;

const showList = [
// {
//     venue: 'The Admiral Pub',
//     city: 'Burnaby, BC',
//     blurb: "Jam Night, Hosted by Common Ground",
//     venueImage: '/images/admiral.jpg',
//     date: 'October 25, 2018 19:30:00 PDT', 
//     private: "false",
//     confirmed: "true"
// },

// {
//     venue: 'The Admiral Pub',
//     city: 'Burnaby, BC',
//     blurb: "Three sets of danceable Common Ground covers",
//     venueImage: '/images/admiral.jpg',
//     date: 'October 26, 2018 20:00:00 PDT', 
//     private: "false",
//     confirmed: "true"
// },

// {
//     venue: 'The Admiral Pub',
//     city: 'Burnaby, BC',
//     blurb: "Three sets of danceable Common Ground covers",
//     venueImage: '/images/admiral.jpg',
//     date: 'Jan 04, 2019 20:00:00 PST',  
//     private: "false",
//     confirmed: "true"
// },

// {
//     venue: 'The Admiral Pub',
//     city: 'Burnaby, BC',
//     blurb: "Three sets of danceable Common Ground covers",
//     venueImage: '/images/admiral.jpg',
//     date: 'Jan 05, 2019 20:00:00 PST',  //faked for daylight savings
//     private: "false",
//     confirmed: "true"
// },
// {
//     venue: 'The 119 Legion Hall',
//     city: 'Port Moody, BC',
//     blurb: "Four Sets of Common Ground",
//     venueImage: '/images/Legion119Club.jpg',
//     date: 'May 17, 2019 20:00:00 PDT',  
//     private: "false",
//     confirmed: "true"
// },
// {
//     venue: 'The 119 Legion Hall',
//     city: 'Port Moody, BC',
//     blurb: "Four Sets of Common Ground",
//     venueImage: '/images/Legion119Club.jpg',
//     date: 'May 18, 2019 20:00:00 PDT',  
//     private: "false",
//     confirmed: "true"
// },
// {
//     venue: 'The 119 Legion Hall',
//     city: 'Port Moody, BC',
//     blurb: "New Hall Grand Opening Bash",
//     venueImage: '/images/Legion119Club.jpg',
//     date: 'May 3, 2019 20:00:00 PDT',  
//     private: "false",
//     confirmed: "true"
// },
// {
//     venue: 'The 119 Legion Hall',
//     city: 'Port Moody, BC',
//     blurb: "New Hall Grand Opening Bash",
//     venueImage: '/images/Legion119Club.jpg',
//     date: 'May 4, 2019 20:00:00 PDT',  
//     private: "false",
//     confirmed: "true"
// },
// {
//     venue: 'The 109 Legion Hall',
//     city: 'Gibsons, BC',
//     blurb: "$10 Cover Charge",
//     venueImage: '/images/legion3.jpg',
//     date: 'Feb 16, 2019 20:00:00 PST',  //faked for daylight savings
//     private: "false",
//     confirmed: "true"
// },
// {
//     venue: 'The 140 Legion Hall',
//     city: 'Sechelt, BC',
//     blurb: "$20 / $15 for Members",
//     venueImage: '/images/legion.jpg',
//     date: 'March 2, 2019 20:00:00 PST',  //faked for daylight savings
//     private: "false",
//     confirmed: "true"
// },

// {
//     venue: 'Lena Shaw Elementary School',
//     city: 'Surrey, BC',
//     blurb: "Three Sets and Lunch",
//     venueImage: '/images/proteinproject.jpg',
//     date: 'Apr 13, 2019 10:00:00 PST',  //faked for daylight savings
//     private: "false",
//     confirmed: "true"
// },
{
    venue: 'The 109 Legion Hall',
    city: 'Gibsons, BC',
    blurb: "",
    venueImage: '/images/legion3.jpg',
    date: 'June 1, 2019 19:00:00 PST',  //faked for daylight savings
    private: "false",
    confirmed: "true"
},
{
    venue: 'The Admiral Pub',
    city: 'Burnaby, BC',
    blurb: "",
    venueImage: '/images/admiral.jpg',
    date: 'June 15, 2019 19:30:00 PDT', 
    private: "false",
    confirmed: "true"
},
{
    venue: 'Newlands Golf & Country Club',
    city: 'Langley, BC',
    blurb: "",
    venueImage: '/images/Newlands.jpg',
    date: 'June 22, 2019 20:30:00 PDT', 
    private: "false",
    confirmed: "true"
},
{
    venue: 'The 119 Legion Hall',
    city: 'Port Moody, BC',
    blurb: "",
    venueImage: '/images/legion.jpg',
    date: 'June 28, 2019 20:00:00 PDT',  
    private: "false",
    confirmed: "true"
},
{
    venue: 'The 119 Legion Hall',
    city: 'Port Moody, BC',
    blurb: "",
    venueImage: '/images/legion.jpg',
    date: 'June 29, 2019 20:00:00 PDT',  
    private: "false",
    confirmed: "true"
},
{
    venue: 'The #8 Legion Hall',
    city: 'White Rock, BC',
    blurb: "",
    venueImage: '/images/legion.jpg',
    date: 'Sun, July 21, 2019 15:00:00 PDT', 
    private: "false",
    confirmed: "true"
},

{
    venue: 'Private Party',
    city: 'Halfmoon Bay, BC',
    blurb: "",
    venueImage: '/images/privateparty.jpg',
    date: 'July 27, 2019 7:00:00 PST',  //faked for daylight savings
    private: "false",
    confirmed: "true"
},
{
    venue: 'Private Wedding Reception',
    city: 'West Kelowna, BC',
    blurb: "",
    venueImage: '/images/wedding.jpg',
    date: 'Aug 23, 2019 19:00:00 PST',  //faked for daylight savings
    private: "false",
    confirmed: "true"
},
{
    venue: 'Holland Park',
    city: 'Surrey, BC',
    blurb: "",
    venueImage: '/images/outdoorCrop2.jpg',
    date: 'Sept 2, 2019 20:00:00 PST',  //faked for daylight savings
    private: "false",
    confirmed: "true"
},

{
    venue: 'Frog and Nightgown Pub',
    city: 'Port Moody, BC',
    blurb: "",
    venueImage: '/images/liveatthefrog.jpg',
    date: 'November 23, 2019 20:00:00 PST',  //faked for daylight savings
    private: "false",
    confirmed: "true"
},

{
    venue: 'Public Outdoor Concert',
    city: 'Harrison, BC',
    blurb: "",
    venueImage: '/images/outdoorCrop2.jpg',
    date: 'July 04, 2020',  
    private: "false",
    confirmed: "true"
}


];

Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
}

function monthString() {
    var monthNum =  arguments[0];
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
return months[monthNum];
};

function prettyDateString(dt){
    // var dt = new Date("July 21, 1983 15:15:00 CST");
    var hm = dt.getHours(); // hours military
    var mix = dt.getMinutes();
    var wd = dt.getDay();
    var d = dt.getDate()
    var y = dt.getFullYear();
    var mo = dt.getMonth();
    var amPm = hm > 11 ? "pm" : "am";
    var h = hm%11;
    var mi = mix.pad(2);
    var dateString = h + ":" + mi + amPm + " on " + weekdays[wd] + ", " + monthString(mo) + " " + d + ", " + y;
    return dateString;
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

if (status != 'Full Calendar'){
    bookUs.className+=' ' + buttonColor;
}
// itemSpan1.setAttribute('class', 'w3-tag');
// itemSpan1.className += ' w3-margin-left';
// itemSpan1.innerHTML = status;
// itemSpan1.setAttribute('href', "#contact")
// itemSpan1.className += ' w3-button';
// if (status != 'Full Calendar'){
//     itemSpan1.className+=' ' + buttonColor;
// }

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
{
//List item examples from original template:    
/* <li id="this-month" class="w3-padding">month <span class="w3-tag w3-margin-left">Full Calendar</span><span class="w3-badge w3-right w3-margin-right">2</span></li>
<li id="next-month" class="w3-padding">month <span class="w3-tag w3-green w3-margin-left">Booking Now</span><span class="w3-badge w3-right w3-margin-right">0</span></li>
<li id="two-months-hence" class="w3-padding">month <span class="w3-tag w3-green w3-margin-left">Booking Now</span><span class="w3-badge w3-right w3-margin-right">0</span></li>
<!-- <li class="w3-padding">November <span class="w3-badge w3-right w3-margin-right">3</span></li> --> */}
}

function constructShowPromo() {
    var show = arguments[0];

    //create wrapper div
    var mainWrapperDiv = document.createElement( 'div' );
    mainWrapperDiv.setAttribute('class', 'w3-third');
    mainWrapperDiv.className += " w3-margin-bottom";

    //create image div {use image in a 300:230 aspect}
    var venueImageDiv = document.createElement('img');
    venueImageDiv.setAttribute('src', show.venueImage);
    venueImageDiv.setAttribute('class', "w3-hover-opacity"  );
    venueImageDiv.setAttribute('alt', show.venue);
    venueImageDiv.setAttribute('style', "width:100%; border-bottom: 1px solid silver");
    
    //create subwrapper div
    var subWrapperDiv = document.createElement( 'div' );
    subWrapperDiv.setAttribute('class', 'w3-container');
    subWrapperDiv.className += ' w3-white';

    //create venue name paragraph div
    var nameBlock = document.createElement('p');
    var venueString = show.venue 
    nameBlock.innerHTML = venueString.bold();

    //create venue location paragraph div
    var locationBlock = document.createElement('p');
    var locationString = show.city;
    locationBlock.innerHTML = locationString.bold();

    //create showdate paragraph div
    var showDateUTC = new Date(show.date);
    //var showDate = prettyDateString(showDateUTC);
    var showDate = showDateUTC.toLocaleString('en-US', { timeZone: 'America/Vancouver' });
    var dateDiv = document.createElement('p');
    dateDiv.setAttribute('class' , 'w3-opacity')
    dateDiv.innerHTML = showDate;
    // dateDiv.innerHTML = weekdayString + " " + monthStr + " " + monthDay + " " + showYear;

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
    subWrapperDiv.appendChild(locationBlock);
    subWrapperDiv.appendChild(dateDiv);
    subWrapperDiv.appendChild(blurbDiv);
    //subWrapperDiv.appendChild(buttonDiv);
    mainWrapperDiv.appendChild(subWrapperDiv);
    return mainWrapperDiv;
};

function countShowsInMonth(monthInt) {
    //let showMonth = arguments[0];
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
document.getElementById('shows-header').innerHTML = showsHeader;
document.getElementById('shows-blurb').innerHTML = showsBlurb.italics();

// Create a list of months to be presented
var thisDate = new Date();
var monthsShownList = [thisDate];
i = 0;
monthQtyMaxed = monthQtyToShow > 12 ? 12 : monthQtyToShow;
for (i = 1; i < monthQtyMaxed; i++) {
    var newMonthDate = new Date();
    newMonthDate.setMonth(thisDate.getMonth()+i);
    monthsShownList.push(newMonthDate);
};

// Present shows by month list
var showsByMonthDiv = document.getElementById('shows-by-month');
i = 0;
for (i = 0; i < monthsShownList.length; i++) {
    console.log("List item iteration");
    const showMonthDate = monthsShownList[i];
    const showMonth = showMonthDate.getMonth();
    var monthlyShowCount = countShowsInMonth(showMonth);
    var listItemDiv = constructMonthlyShowListItemDiv(showMonth, monthlyShowCount);
    showsByMonthDiv.appendChild(listItemDiv);
}

// Show promo panels
    //filter master showlist for advertized shows
var showsToPromo = [];

i = 0;
for (i = 0; i < showList.length; i++) {
    const show = showList[i];
    const showDate = new Date(show.date);
    const showEnd = showDate.setHours(showDate.getHours()+showPromoRemovalDelayHours);
    const today = new Date();
    const dateCompareResult = (showEnd > today );
    //If show is public, confirmed, and not more than 'x' hours in the past, promo it.
    if (show.private == "false" && show.confirmed == "true" && dateCompareResult) {
        showsToPromo.push(show);
    }
}
//showsToPromo.sort(function(a, b){return a.date - b.date});
i = 0;
for (i = 0; i < showsToPromo.length; i++) {
    console.log(i);
    var show = showsToPromo[i];
    var wrapperDiv = constructShowPromo(show);
    var container_block = document.getElementById('scheduled-shows');
    container_block.appendChild( wrapperDiv );
}