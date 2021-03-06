function getSplashSlides() {
    splashSlideData = [
        { "source": "/images/black.jpg" },
        { "source": "/images/BassFrame.jpg" },
        { "source": "/images/DrumFrame.jpg" },
        { "source": "/images/TeleFrame.jpg" },
        { "source": "/images/poster.jpg" }
    ]
    return splashSlideData;
}

var divsToHide = document.getElementsByClassName('hide-during-splash');
console.log("Divs to hide qty: " + divsToHide.length);
i = 0;
for (i = 0; i < divsToHide.length; i++) {
    const divToHide = divsToHide[i];
    divToHide.style.display = 'none';
}
var divsToShowBeforeFade = document.getElementsByClassName('hide-during-video');
var slides = getSplashSlides();
var splashSlidesContainer = document.getElementById('splash-slides-container');

i = 0;
for (i = 0; i < slides.length; i++) {
    //Create slide divs
    var slideContainer = document.createElement('div');
    slideContainer.classList.add("mySplashSlides", "w3-display-container", "w3-center");
    var slideImage = document.createElement('img')
    slideImage.classList.add('slide-image', 'custom-greyscale')
    slideImage.setAttribute('style', "width:100%; display:hidden");
    //Add slide image source
    const nextSlide = slides[i];
    const slideSource = nextSlide.source;
    console.log(slideSource);
    slideImage.setAttribute('src', slideSource);
    //Assemble and insert divs
    slideContainer.appendChild(slideImage);
    splashSlidesContainer.appendChild(slideContainer);
};

// Automatic Slideshow - change image every 0.7 seconds
var myIndex = 0;
//splashCarousel();

// Milliseconds
// function sleep(millisecs) {
//     var initiation = new Date().getTime();
//     while ((new Date().getTime() - initiation) < millisecs);
// }

// function fadeAndHide(fadingElement, fadeDurationMs, hiddenCallback) {
//     const fadeFrameDuration = 100;
//     var opacity = 1;
//     i = 0;
//     for (i = fadeDurationMs; i > 0; i -= fadeFrameDuration) {
//         fadingElement.style.opacity = "0.25";
//         fadingElement.style.backgroundcolor = "blue";
//         sleep(fadeFrameDuration);
//     }
//     fadingElement.style.display = 'none';
//     hiddenCallback();

// }

function fade(element, callback) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.01) {
            clearInterval(timer);
            element.style.display = 'none';
            if (callback) {
                callback();
            }
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        //Fade progressively faster as the image reaches full transparency
        if (op <= 0.2){
            op-= op * 0.02
        }
        //Fade progressively faster as the image reaches full transparency
        if (op <= 0.1){
            op-= op * 0.04
        }
        op -= op * 0.02;
    }, 10);
}

function showDivs(divsToShow, callback) {
    var i = 0;
    for (i = 0; i < divsToShow.length; i++) {
        const divToShow = divsToShow[i];
        divToShow.style.display = 'block';
    }
    if (callback) {
        callback();
    }
}

// splashVideoDiv, 
// function(){showDivs(divsToShowBeforeFade)},
// function(){showDivs(
//     divsToHide, 
//     function(){animateSongList()}
// )}
function hideSlides(slideArray){
for (i = 0; i < slideArray.length; i++) {
    slideArray[i].style.display = "none";
}
}

function splashCarousel() {
    var i = 0;
    var mySplashSlides = document.getElementsByClassName("mySplashSlides");
    hideSlides(mySplashSlides);
    if (myIndex < mySplashSlides.length) {
        setTimeout(splashCarousel, 700);
        myIndex++;
        mySplashSlides[myIndex - 1].style.display = "block";
    }
    else {
        const slideArrayLength = mySplashSlides.length;
        var lastSlide = mySplashSlides[slideArrayLength - 1];
        lastSlide.style.display = "block";
        setTimeout(function () {
            showDivs(divsToShowBeforeFade);
            fade(lastSlide, function () { showDivs(divsToHide, function () { animateSongList() }); hideSlides(mySplashSlides) });
        }, 700)

    }

}

