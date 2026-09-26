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

//counting down
const weddingDate = new Date("2026-12-14T10:00:00+07:00").getTime();

const countdown = setInterval(() => {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    // Jika waktu sudah lewat
    if (distance <= 0) {

        clearInterval(countdown);

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (distance / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (distance / 1000) % 60
    );


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

}, 1000);

const timelineWrapper = document.querySelector(".love-timeline-wrapper");
const timelineItems = document.querySelectorAll(".love-story-item");
const timelineDots = document.querySelectorAll(".love-dot-slide");

function updateTimelineDots() {

    const scrollLeft = timelineWrapper.scrollLeft;

    const itemWidth = timelineItems[0].offsetWidth;

    const currentSlide = Math.round(
        scrollLeft / itemWidth
    );

    timelineDots.forEach((dot, index) => {
        dot.classList.toggle(
            "active",
            index === currentSlide
        );
    });

}

timelineWrapper.addEventListener(
    "scroll",
    updateTimelineDots
);