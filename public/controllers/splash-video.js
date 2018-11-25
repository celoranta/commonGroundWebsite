
function getVideo(){
    video = {'source': '/images/video_clips/MyMovie2.mp4'}
    return video;
}

function setOpacity(element, opacityValue) {
element.style.opacity = opacityValue;
}

function fadeAndHide(fadingElement){
    const vidDuration = fadingElement.duration;
    const timeRemaining = vidDuration - fadingElement.currentTime;
    if (timeRemaining < 1){
        setOpacity(fadingElement, timeRemaining);
        if (timeRemaining == 0) {
            fadingElement.style.display = 'none';
        }
    }
}

// var splashVideoDiv = document.getElementById('splash-video');
splashVideoMediaObject = getVideo();
splashVideoMedia = splashVideoMediaObject.source;

splashVideoDiv = document.getElementById('splash-video')
splashVideoDiv.setAttribute('src', splashVideoMedia);
splashVideoDiv.addEventListener('timeupdate', function(){fadeAndHide(splashVideoDiv)});
splashVideoDiv.setAttribute('style', 'width:100%; height: auto');
// splashVideoDiv.setAttribute('position', 'absolute');
splashVideoDiv.muted = true;
setOpacity(splashVideoDiv, 1);
splashVideoDiv.play();
// splashVideoDiv.addEventListener(onended, function(){container.remove()})