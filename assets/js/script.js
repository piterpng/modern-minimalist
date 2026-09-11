const openInvitation = document.getElementById("openInvitation");
const invitationContent = document.getElementById("invitationContent");

document.body.classList.add("invitation-locked");

window.addEventListener("load", () => {
    window.scrollTo(0, 0);

    document.body.classList.add("invitation-locked");
});

openInvitation.addEventListener("click", () => {

    document.body.classList.remove("invitation-locked");

    invitationContent.scrollIntoView({
        behavior: "smooth"
    });

});

const track = document.querySelector(".maps-track");
const slides = document.querySelectorAll(".map-slide");

const prevButton = document.querySelector(".maps-prev");
const nextButton = document.querySelector(".maps-next");

const dots = document.querySelectorAll(".map-dot");

let currentSlide = 0;

function showSlide(index) {

    if (index < 0) {
        currentSlide = slides.length - 1;
    } else if (index >= slides.length) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    track.style.transform =
        `translateX(-${currentSlide * 100}%)`;

    dots.forEach((dot, index) => {
        dot.classList.toggle(
            "active",
            index === currentSlide
        );
    });
}

prevButton.addEventListener("click", () => {
    showSlide(currentSlide - 1);
});

nextButton.addEventListener("click", () => {
    showSlide(currentSlide + 1);
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        showSlide(index);
    });
});