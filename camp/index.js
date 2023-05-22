const trailer = document.getElementById("trailer");
const trailerscale = document.getElementById("trailer-scale");
const fade = document.getElementById("grid");

const animatetrailer = (e, interacting) => {
    const x = e.clientX - trailer.offsetWidth / 2;
    const y = e.clientY - trailer.offsetHeight / 2;

    const keyframes = {
        transform: `translate(${x}px, ${y}px) scale(${interacting ? 2 : 1})`
    }

    trailer.animate(keyframes, {
        duration: 100,
        fill: "forwards"
    });
}

window.onmousemove = e => {
    const interactable = e.target.closest(".interactable"),
          interacting = interactable !== null;

    animatetrailer(e, interacting);
}
