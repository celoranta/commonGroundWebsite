var el = document.getElementById('croppie-test');
var sizeFactor = 30;
var boundaryPadding = 100;
var viewPortWidth = 16 * sizeFactor;
var viewPortHeight = 9 * sizeFactor;

var vanilla = new Croppie(el, {
    viewport: { width: viewPortWidth, height: viewPortHeight},
    boundary: { width: viewPortWidth + boundaryPadding, height: viewPortHeight + boundaryPadding },
    showZoomer: true,
    enableOrientation: true,
    enforceBoundary: true
});

vanilla.bind({
    url: '/images/slides/band1.jpg',
});

  // on button click
vanilla.result('blob').then(function(blob) {
    // do something with cropped blob
});