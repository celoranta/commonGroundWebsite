function getSlides() {
    slideData = [
        { "source": "/images/slides/band1-1.jpg" },
        { "source": "/images/slides/band2-1.jpg" },
        { "source": "/images/slides/band3-1.jpg" },
        { "source": "/images/slides/brad1-1.jpg" },
        { "source": "/images/slides/brad2-1.jpg" },
        { "source": "/images/slides/brad3-1.jpg" },
        { "source": "/images/slides/brad4-1.jpg" },
        { "source": "/images/slides/bradchris1-1.jpg" },
        { "source": "/images/slides/bradchris2-1.jpg" },
        { "source": "/images/slides/bradchris3-1.jpg" },
        { "source": "/images/slides/chris1-1.jpg" },
        { "source": "/images/slides/chris2-1.jpg" },
        { "source": "/images/slides/chris3-1.jpg" },
        { "source": "/images/slides/lorne1-1.jpg" },
        { "source": "/images/slides/lorne2-1.jpg" },
        { "source": "/images/slides/lorne3-1.jpg" }
    ]
    return slideData;
}

//Functions 'stateModule, shuffle(array), and saveShuffledArray(array) were all copied from the audio-player 
//page.  If possible in Javascript, they should be refactored into a reusable script.

// var stateModule = (function () {
//     var state; // Private Variable
//     var pub = {};// public object - returned at end of module
//     pub.changeState = function (newstate) {
//         state = newstate;
//         console.log("State changed to: " + state);
//     };
//     pub.getState = function() {
//         return state;
//     }
//     return pub; // expose externally
// }());

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}



// function saveShuffledArray(array){
//     console.log("Creating Shuffled Array");
// stateModule.changeState(shuffle(array));
// };

// <div class="mySlides w3-display-container w3-center">
//   <img id="lorne-photo" src="/images/bandshots_16x9_bw/Band1BW.jpg" style="width:100%">
//   <div class="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
//     <!-- <h3>New York</h3>
//     <p><b>Look how fast Lorne can play!</b></p>     -->
//   </div>
// </div>

// <div class="mySlides w3-display-container w3-center">
//   <img id="lorne-photo" src="/images/bandshots_16x9_bw/Band1BW.jpg" style="width:100%">
// </div>

//saveShuffledArray(getSlides());

var slides = getSlides();
//i = 0;
// for (i = 0; i < slides.length; i++) {
// }

var shuffledSlides = shuffle(slideData);
var slidesContainer = document.getElementById('slides-container');

console.log("Shuffled Slides Order: ")
i = 0;
for (i = 0; i < shuffledSlides.length; i++) {
    //Create slide divs
    var slideContainer = document.createElement('div');
    slideContainer.className = "mySlides w3-display-container w3-center";
    var slideImage = document.createElement('img')
    slideImage.classList.add('slide-image', 'custom-greyscale')
    slideImage.setAttribute('style', "width:100%");

    
    //Add slide image source
    const nextSlide = shuffledSlides[i];
    const slideSource = nextSlide.source;
    console.log(slideSource);
    slideImage.setAttribute('src', slideSource);
    //Assemble and insert divs
    slideContainer.appendChild(slideImage);
    slidesContainer.appendChild(slideContainer);
};

// Automatic Slideshow - change image every 4 seconds
var myIndex = 0;
carousel();
function carousel() {
    var i;
    var mySlides = document.getElementsByClassName("mySlides");
    for (i = 0; i < mySlides.length; i++) {
        mySlides[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > mySlides.length) { myIndex = 1 }
    mySlides[myIndex - 1].style.display = "block";
    setTimeout(carousel, 4000);
}