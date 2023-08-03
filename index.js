const trailer = document.getElementById("trailer");
const trailer2 = document.getElementById("trailer2");

const milliseconds = 10;

const animatetrailer = (e, interacting) => {
    const x = e.clientX - trailer.offsetWidth / 2;
    const y = e.clientY - trailer.offsetHeight / 2;

    const keyframes = {
        transform: `translate(${x}px, ${y}px) scale(${interacting ? 2 : 1})`
    }

    trailer.animate(keyframes, {
        duration: 500,
        fill: "forwards",
        easing: "linear"
    });
}

const animateTrailer2 = (e) => {
    const xx = e.clientX - trailer2.offsetWidth / 2;
    const yy = e.clientY - trailer2.offsetHeight / 2;

    const keyframes = {
        transform: `translate(${xx}px, ${yy}px)`
    }

    trailer2.animate(keyframes, {
        duration: 0,
        fill: "forwards"
    });
}

window.onmousemove = e => {
    // do some stuff
    const interactable = e.target.closest(".interactable"),
        interacting = interactable !== null;

    animatetrailer(e, interacting);
    animateTrailer2(e);
}
