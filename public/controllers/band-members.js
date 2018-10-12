function catName() {
    return arguments[0].givenName + " " + arguments[0].surname
};

const chris = {
    givenName: 'Chris',
    surname: 'Eloranta',
    instruments: ['Bass', 'Voice'],
    headShots: ['/images/chris_grin.jpg'],
    fullName: function() {return catName(this)}
};

const brad = {
    givenName: 'Brad',
    surname: 'Ross',
    instruments: ['Drums', 'Voice'],
    headShots: ['/images/brad_lebowsky.jpg'],
    fullName: function() {return catName(this)}
};

const lorne = {
    givenName: 'Lorne',
    surname: 'Baron',
    instruments: ['Guitar', 'Voice'],
    headShots: ['/images/lorne_hat.PNG'],
    fullName: function() {return catName(this)}
};

const bandMembers = [lorne, brad, chris];

document.getElementById("band-member-name-1").innerHTML = bandMembers[0].fullName();
document.getElementById("band-member-name-2").innerHTML = bandMembers[1].fullName();
document.getElementById("band-member-name-3").innerHTML = bandMembers[2].fullName();