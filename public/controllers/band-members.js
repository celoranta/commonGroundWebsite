function spaceCat() {
    return arguments[0].givenName + " " + arguments[0].surname
};

function commaCat() {
    var stringArray = arguments[0];
    var returnString = "";
    var i;
    var lastIndex = 0 ? 0 : stringArray.length - 1;
    for (i = 0; i < stringArray.length; i++) {
        returnString += stringArray[i];
        if (i != lastIndex) {
            returnString += ", "
        }
    };
    return returnString;
};

const chrisEloranta = {
    givenName: 'Chris',
    surname: 'Eloranta',
    instruments: ['Bass', 'Voice'],
    headShots: ['/images/chris_grin.jpg'],
    fullName: function() {return spaceCat(this)},
    instrList: function() {
        return commaCat(this.instruments);
    }
};

const bradRoss = {
    givenName: 'Brad',
    surname: 'Ross',
    instruments: ['Drums', 'Voice'],
    headShots: ['/images/brad_lebowsky.jpg'],
    fullName: function() {return spaceCat(this)},
    instrList: function() {
        return commaCat(this.instruments);
    }
};

const lorneBaron = {
    givenName: 'Lorne',
    surname: 'Baron',
    instruments: ['Guitar', 'Voice'],
    headShots: ["/images/lorne_hat.PNG"],
    fullName: function() {return spaceCat(this)},
    instrList: function() {
        return commaCat(this.instruments);
    }
};

const bandMembers = [lorneBaron, bradRoss, chrisEloranta];

i = 0;
for (i = 0; i < bandMembers.length; i++) {
    var bandMember = bandMembers[i];
    var memberString = "band-member-" + i + "-";
    var nameString = memberString + "name";
    var headshotString = memberString + "headshot";
    var instrumentsString = memberString + "instruments";

    document.getElementById(nameString).innerHTML = bandMembers[i].fullName();
    document.getElementById(headshotString).setAttribute('src', bandMembers[i].headShots[0]);
    document.getElementById(instrumentsString).innerHTML = bandMembers[i].instrList();
}


