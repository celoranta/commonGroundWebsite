function getSlides() {
    slides = [
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
    return slides;
}


// <!-- Automatic Slideshow Images -->
// <div class="mySlides w3-display-container w3-center">
//   <img id="lorne-photo" src="/images/bandshots_16x9_bw/Band1BW.jpg" style="width:100%">
//   <div class="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
//     <!-- <h3>New York</h3>
//     <p><b>Look how fast Lorne can play!</b></p>     -->
//   </div>
// </div>

      // Automatic Slideshow - change image every 4 seconds
      var myIndex = 0;
      carousel();

      function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) { myIndex = 1 }
        x[myIndex - 1].style.display = "block";
        setTimeout(carousel, 4000);
      }