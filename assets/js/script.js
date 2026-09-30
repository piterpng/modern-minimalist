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

//Gallery
const galleryWrapper = document.querySelector(".gallery-wrapper");
const galleryItems = document.querySelectorAll(".gallery-item");
const galleryDots = document.querySelectorAll(".gallery-dot");

function updateGalleryDots() {

    if (!galleryWrapper || !galleryItems.length) {
        return;
    }

    const scrollLeft = galleryWrapper.scrollLeft;

    const itemWidth =
        galleryItems[0].offsetWidth +
        parseFloat(getComputedStyle(
            document.querySelector(".gallery-track")
        ).gap);

    const currentIndex =
        Math.round(scrollLeft / itemWidth);

    galleryDots.forEach((dot, index) => {

        dot.classList.toggle(
            "active",
            index === currentIndex
        );

    });
}


galleryWrapper.addEventListener(
    "scroll",
    updateGalleryDots
);


galleryDots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        const item = galleryItems[index];

        if (!item) {
            return;
        }

        galleryWrapper.scrollTo({
            left: item.offsetLeft -
                galleryWrapper.offsetLeft,

            behavior: "smooth"
        });

    });

});

const prevGalleryButton =
    document.querySelector(".gallery-prev");

const nextGalleryButton =
    document.querySelector(".gallery-next");


function getCurrentGalleryIndex() {

    const scrollLeft =
        galleryWrapper.scrollLeft;

    const itemWidth =
        galleryItems[0].offsetWidth +
        parseFloat(
            getComputedStyle(
                document.querySelector(".gallery-track")
            ).gap
        );

    return Math.round(
        scrollLeft / itemWidth
    );
}

prevGalleryButton?.addEventListener(
    "click",
    () => {

        let currentIndex =
            getCurrentGalleryIndex();

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex =
                galleryItems.length - 1;
        }

        const item =
            galleryItems[currentIndex];

        galleryWrapper.scrollTo({
            left:
                item.offsetLeft -
                galleryWrapper.offsetLeft,

            behavior: "smooth"
        });

    }
);

nextGalleryButton?.addEventListener(
    "click",
    () => {

        let currentIndex =
            getCurrentGalleryIndex();

        currentIndex++;

        if (
            currentIndex >=
            galleryItems.length
        ) {
            currentIndex = 0;
        }

        const item =
            galleryItems[currentIndex];

        galleryWrapper.scrollTo({
            left:
                item.offsetLeft -
                galleryWrapper.offsetLeft,

            behavior: "smooth"
        });

    }
);

const galleryLightbox =
    document.querySelector("#galleryLightbox");

const lightboxImage =
    document.querySelector("#lightboxImage");

const lightboxClose =
    document.querySelector("#lightboxClose");

const lightboxPrev =
    document.querySelector("#lightboxPrev");

const lightboxNext =
    document.querySelector("#lightboxNext");


let lightboxIndex = 0;

// lightbox
galleryItems.forEach((item, index) => {

    item.addEventListener("click", () => {

        lightboxIndex = index;

        openLightbox();

    });

});


function openLightbox() {

    const image =
        galleryItems[lightboxIndex]
            .querySelector("img");

    if (!image) {
        return;
    }

    lightboxImage.src =
        image.src;

    lightboxImage.alt =
        image.alt || "Wedding gallery";

    galleryLightbox.classList.add("active");

    document.body.style.overflow = "hidden";

}

function closeLightbox() {

    galleryLightbox.classList.remove("active");

    document.body.style.overflow = "";

}


lightboxClose.addEventListener(
    "click",
    closeLightbox
);

lightboxPrev.addEventListener(
    "click",
    (event) => {

        event.stopPropagation();

        lightboxIndex--;

        if (lightboxIndex < 0) {

            lightboxIndex =
                galleryItems.length - 1;

        }

        openLightbox();

    }
);


lightboxNext.addEventListener(
    "click",
    (event) => {

        event.stopPropagation();

        lightboxIndex++;

        if (
            lightboxIndex >=
            galleryItems.length
        ) {

            lightboxIndex = 0;

        }

        openLightbox();

    }
);


galleryLightbox.addEventListener(
    "click",
    (event) => {

        if (
            event.target ===
            galleryLightbox
        ) {

            closeLightbox();

        }

    }
);


/* ========================================
   KEYBOARD
======================================== */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            !galleryLightbox.classList.contains(
                "active"
            )
        ) {
            return;
        }


        if (event.key === "Escape") {

            closeLightbox();

        }


        if (event.key === "ArrowLeft") {

            lightboxPrev.click();

        }


        if (event.key === "ArrowRight") {

            lightboxNext.click();

        }

    }
);