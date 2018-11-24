
function getVideo(){
    video = {'source': '/images/video_clips/MyMovie2.mp4'}
    return video;
}

function setOpacity(element, opacityValue) {
element.style.opacity = opacityValue;
}

function fade(fadingElement){
    const vidDuration = fadingElement.duration;
    const timeRemaining = vidDuration - fadingElement.currentTime;
    if (timeRemaining < 1){
        setOpacity(fadingElement, timeRemaining);
    }
}

var splashVideoDiv = document.getElementById('splash-video');
splashVideoMediaObject = getVideo();
splashVideoMedia = splashVideoMediaObject.source;
splashVideoDiv.setAttribute('src', splashVideoMedia);
splashVideoDiv.addEventListener('timeupdate', function(){fade(splashVideoDiv)})

setOpacity(splashVideoDiv, 1);

splashVideoDiv.play();