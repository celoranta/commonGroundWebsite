//const path = require('path');
//var homePage = path.join(__dirname + '/views/main.html');


const bandName = "Common Ground";
const bandNameUppercase = bandName.toUpperCase();
const bandShortDescription = "BC Cover Band";
const bandShortestDescription = "Classic Covers";
const mainPageTitleString = bandName + " | " + bandShortDescription;
const someDate = new Date()
const thisYear = someDate.getFullYear()

var bandBlurbString="Common Ground specializes in well-known danceable tunes from 1965 to " + thisYear + ", performed with infectious groove and three-part harmony. Bringing to bear a century’s worth of combined gigging experience, we strive to make your guests’ time with you special... and to keep them on the dance floor all night."

const mainPageTitle = document.getElementById("main-page-title");
mainPageTitle.innerText = mainPageTitleString;

const bandNameHeader = document.getElementById("band-name-header");
bandNameHeader.innerHTML = bandNameUppercase;

const bandDescriptionSubheader = document.getElementById("band-description-subheader");
bandDescriptionSubheader.innerHTML = bandShortestDescription.italics();

const bandBlurb = document.getElementById("band-blurb");
bandBlurb.innerHTML = bandBlurbString;

