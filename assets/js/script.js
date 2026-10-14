const weddingMusic =
    document.querySelector("#weddingMusic");

const musicToggle =
    document.querySelector("#musicToggle");

const musicIcon =
    musicToggle.querySelector("i");


let musicPlaying = false;

function playMusic() {

    weddingMusic.play()
        .then(() => {

            musicPlaying = true;

            musicToggle.classList.add(
                "playing"
            );

            musicIcon.className =
                "fa-solid fa-volume-high";

            musicToggle.setAttribute(
                "aria-label",
                "Mute music"
            );

        })
        .catch(() => {

            console.log(
                "Music playback was blocked."
            );

        });

}

function pauseMusic() {

    weddingMusic.pause();

    musicPlaying = false;

    musicToggle.classList.remove(
        "playing"
    );

    musicIcon.className =
        "fa-solid fa-volume-xmark";

    musicToggle.setAttribute(
        "aria-label",
        "Play music"
    );

}

musicToggle.addEventListener(
    "click",
    () => {

        if (musicPlaying) {

            pauseMusic();

        } else {

            playMusic();

        }

    }
);

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

    musicToggle.classList.add("show");

    playMusic();

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

// FORM WISHES
// Google Apps Script Web App URL
// const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzZRI2b5XbR-q97_v5bcIox9WaNzuSI6xtQNbx1iure_t07Z3LwGroPiPvsD5297a-e/exec";
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyTklxXZlGkiLiSKuNUyh_l2KSTi4biKvN-LxOMgU7X2J7xPUUbC0RV_3vSYYBy7MPwMQ/exec";

// Ambil elemen HTML
const form = document.querySelector(".wishes-form");
const feedContainer = document.querySelector(".wishes-list");
const submitBtn = document.querySelector(".wishes-submit");
const wishesCount = document.querySelector(".recent-wishes-title span");

// Sanitasi teks dengan textContent saat membuat elemen
function createTextElement(tag, className, text) {
    const element = document.createElement(tag);
    element.className = className;
    element.textContent = text ?? "";
    return element;
}

// Render daftar ucapan
function renderWishes(dataArray) {
    feedContainer.replaceChildren();

    if (!Array.isArray(dataArray) || dataArray.length === 0) {
        feedContainer.appendChild(
            createTextElement("p", "empty-wishes", "No wishes yet. Be the first to send one!")
        );

        if (wishesCount) wishesCount.textContent = "(0)";
        return;
    }

    // Tampilkan ucapan terbaru terlebih dahulu
    const wishes = [...dataArray].reverse();

    wishes.forEach(item => {
        const card = document.createElement("article");
        card.className = "wishes-card";

        const header = document.createElement("div");
        header.className = "wishes-card-header";

        const author = createTextElement(
            "h4",
            "wishes-author",
            item.nama
        );

        const status = createTextElement(
            "span",
            "attendance-status",
            item.kehadiran
        );

        const message = createTextElement(
            "p",
            "wishes-message",
            item.pesan
        );

        header.append(author, status);
        card.append(header, message);
        feedContainer.appendChild(card);
    });

    if (wishesCount) {
        wishesCount.textContent = `(${dataArray.length})`;
    }
}

// Ambil ucapan dari Google Sheets
async function fetchWishes() {
    feedContainer.setAttribute("aria-busy", "true");

    try {
        const response = await fetch(SCRIPT_URL);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        renderWishes(data);
    } catch (error) {
        console.error("Gagal memuat ucapan:", error);

        feedContainer.replaceChildren(
            createTextElement(
                "p",
                "empty-wishes",
                "Unable to load wishes. Please try again later."
            )
        );
    } finally {
        feedContainer.removeAttribute("aria-busy");
    }
}

// Kirim ucapan ke Google Sheets
form.addEventListener("submit", async event => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = "SENDING...";

    const formData = new FormData(form);

    // Gunakan nama field yang diharapkan Google Apps Script
    const requestData = new URLSearchParams({
        nama: formData.get("name").trim(),
        kehadiran: formData.get("attendance"),
        pesan: formData.get("wishes").trim()
    });

    try {
        // no-cors menghindari pembacaan respons lintas origin.
        // Responsnya opaque, sehingga tidak bisa memastikan
        // apakah Apps Script berhasil menyimpan data.
        await fetch(SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            body: requestData
        });

        form.reset();
        submitBtn.textContent = "SENT!";

        // Beri waktu agar data tersimpan sebelum mengambil ulang.
        await new Promise(resolve => setTimeout(resolve, 1200));
        await fetchWishes();

    } catch (error) {
        console.error("Gagal mengirim ucapan:", error);
        alert("Gagal mengirim ucapan. Silakan periksa koneksi internet.");
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }
});

// Muat ucapan saat halaman dibuka
fetchWishes();
