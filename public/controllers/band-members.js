
const bradRoss = {
    givenName: 'Brad',
    surname: 'Ross',
    instruments: ['Drums', 'Voice'],
    headShots: ['/images/bradHeadshot2.jpg'],
    fullName: function() {return spaceCat(this)},
    instrList: function() {
        return commaCat(this.instruments);
    }
};

const lorneBaron = {
    givenName: 'Lorne',
    surname: 'Baron',
    instruments: ['Guitar', 'Voice'],
    headShots: ["/images/lorne_hat.jpg"],
    fullName: function() {return spaceCat(this)},
    instrList: function() {
        return commaCat(this.instruments);
    }
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

const bandMembers = [lorneBaron, bradRoss, chrisEloranta];

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


function constructMemberBio() {
    var bandMember = arguments[0];
    var headshotBlock = document.createElement('img');
    headshotBlock.setAttribute('src', bandMember.headShots[0]);
    headshotBlock.setAttribute('class', "w3-round w3-margin-bottom"  );
    headshotBlock.setAttribute('alt', bandMember.givenName);
    headshotBlock.setAttribute('style', "width:60%");
     
    //create name paragraph div
    var nameBlock = document.createElement('p');
    nameBlock.innerHTML = bandMember.fullName();
    
    //create instrument paragraph div
    var instrumentsBlock = document.createElement('p');
    instrumentsBlock.innerHTML = bandMember.instrList();
    
    //create wrapper div
    var wrapperDiv = document.createElement( 'div' );
    wrapperDiv.setAttribute('class', 'w3-third');
    
    //nest divs
    wrapperDiv.appendChild(nameBlock);
    wrapperDiv.appendChild(headshotBlock);
    wrapperDiv.appendChild(instrumentsBlock);

    return wrapperDiv;
    };
    
i = 0;
for (i = 0; i < bandMembers.length; i++) {
    console.log(i);
    var bandMember = bandMembers[i];
    var wrapperDiv = constructMemberBio(bandMember);
    var container_block = document.getElementById('band-roster');
    container_block.appendChild( wrapperDiv );
}


