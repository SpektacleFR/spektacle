const trailer = document.getElementById("trailer");
const trailer2 = document.getElementById("trailer2");

// Stuff for the mouse movement
var interactable = null;
var interacting = null;

var x = null;
var y = null;

const animatetrailer = (xx, yy, interacting) => {
    const x = xx - trailer.offsetWidth / 2;
    const y = yy - trailer.offsetHeight / 2;

    const keyframes = {
        transform: `translate(${x}px, ${y}px) scale(${interacting ? 2 : 1})`
    }

    trailer.animate(keyframes, {
        duration: 500,
        fill: "forwards"
    });
}

const animateTrailer2 = (x, y) => {
    const xx = x - trailer2.offsetWidth / 2;
    const yy = y - trailer2.offsetHeight / 2;

    const keyframes = {
        transform: `translate(${xx}px, ${yy}px)`
    }

    trailer2.animate(keyframes, {
        duration: 0,
        fill: "forwards"
    });
}

window.onmousemove = e => {
    // Get mouse position and interactions
    interactable = e.target.closest(".interactable");
    interacting = interactable !== null;

    x = e.clientX;
    y = e.clientY;
}

// Self-executing anonymous function that calls itself
(function(){
    // Use mouse position and interactions to animate every 4ms
    animatetrailer(x, y, interacting);
    animateTrailer2(x, y);

    setTimeout(arguments.callee, 4);
})();
