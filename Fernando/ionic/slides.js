

function onLoad() {
    getDelay().addEventListener("ionChange", init);
    window.addEventListener('resize', init);
    getTabs().addEventListener("ionTabsWillChange", pause);
    init();
}

function getDelay() {
    return (document.querySelector('ion-range'));
}

function getTabs() {
    return (document.querySelector('ion-tabs'));
}

function getSlides() {
    return (document.querySelectorAll('ion-slides'));
}

function play() {
    getTabs().getSelected().then(function (tab) {
        document.getElementById(tab).startAutoplay();
    });
}

function pause() {
    getSlides().forEach(function (s) {
        s.stopAutoplay();
    });
}

function init() {
    getSlides().forEach(function (s) {
        s.options = {
            width: window.innerWidth,
            autoplay: {
                delay: 5000 - getDelay().value
            }
        };
    });
}