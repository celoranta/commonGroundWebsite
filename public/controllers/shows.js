const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const showsHeader = "SHOW DATES";
const showsBlurb = "Party with us Live!";
const monthQtyToShow = 3;
const maxShowsPerMonth = 2;

const admiralPub_20181025 = {
    venue: 'The Admiral Pub',
    city: 'Burnaby, BC',
    blurb: "Jam Night, Hosted by Common Ground",
    venueImage: '/images/admiral.jpg',
    date: 'October 25, 2018 23:15:30 PST',
    private: "false",
    confirmed: "true"
};

const admiralPub_20181026 = {
    venue: 'The Admiral Pub',
    city: 'Burnaby, BC',
    blurb: "Three sets of danceable Common Ground covers",
    venueImage: '/images/admiral.jpg',
    date: 'October 26, 2018 23:15:30 PST',
    private: "false",
    confirmed: "true"
};

const admiralPub_20180104 = {
    venue: 'The Admiral Pub',
    city: 'Burnaby, BC',
    blurb: "Three sets of danceable Common Ground covers",
    venueImage: '/images/admiral.jpg',
    date: 'Jan 04, 2019 23:15:30 PST',
    private: "false",
    confirmed: "true"
};

const admiralPub_20180105 = {
    venue: 'The Admiral Pub',
    city: 'Burnaby, BC',
    blurb: "Three sets of danceable Common Ground covers",
    venueImage: '/images/admiral.jpg',
    date: 'Jan 05, 2019 23:15:30 PST',
    private: "false",
    confirmed: "true"
};

const showList = [admiralPub_20181025, admiralPub_20181026, admiralPub_20180104, admiralPub_20180105];

function monthString() {
    var monthNum =  arguments[0];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
return months[monthNum];
};

function constructMonthlyShowListItemDiv(item, showQty) {

var status = "Book us Now";
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

    //create image div
    var venueImageDiv = document.createElement('img');
    venueImageDiv.setAttribute('src', show.venueImage);
    venueImageDiv.setAttribute('class', "w3-hover-opacity"  );
    venueImageDiv.setAttribute('alt', show.venue);
    venueImageDiv.setAttribute('style', "width:100%");
     
    //create subwrapper div
    var subWrapperDiv = document.createElement( 'div' );
    subWrapperDiv.setAttribute('class', 'w3-container');
    subWrapperDiv.className += ' w3-white';

    //create venue name paragraph div
    var nameBlock = document.createElement('p');
    var venueString = show.venue + ", " + show.city;
    nameBlock.innerHTML = venueString.bold();

    //create showdate paragraph div
    const showDate = new Date(show.date);
    const weekdayInt = showDate.getDay();
    const monthInt = showDate.getMonth();
    const monthDay = showDate.getDate();
    const showYear = showDate.getFullYear();
    const monthStr = monthString(monthInt);
    const weekdayString = weekdays[weekdayInt];
    var dateDiv = document.createElement('p');
    dateDiv.setAttribute('class' , 'w3-opacity')
    dateDiv.innerHTML = weekdayString + " " + monthStr + " " + monthDay + " " + showYear;

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
for (i = 1; i < monthQtyToShow; i++) {
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
    if (show.private == "false" && show.confirmed == "true") {
        showsToPromo.push(show);
    }
}
i = 0;
for (i = 0; i < showsToPromo.length; i++) {
    console.log(i);
    var show = showsToPromo[i];
    var wrapperDiv = constructShowPromo(show);
    var container_block = document.getElementById('scheduled-shows');
    container_block.appendChild( wrapperDiv );
}