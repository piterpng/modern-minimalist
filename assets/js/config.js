const WEDDING_CONFIG = {
    // ========================================
    // HERO / COVER
    // ========================================
    hero: {
        subtitle: "THE WEDDING INVITATION OF",
        coupleName: "Jessica & Michael",
        date: "MONDAY, DECEMBER 14 ,2026",
        description: "We joyfully invite you to join us in celebrating our love, commitment, and the beginning of our forever journey together.",
        openButton: "OPEN INVITATION"
    },

    // ========================================
    // PROFILE COUPLE
    // ========================================
    profile: {
        subtitle: "THE HAPPY COUPLE",
        title: "Meet the Bride & Groom",
        description: "Every love story is beautiful, but ours is our absolute favorite. Here is a little glimpse into who we are.",

        bride: {
            firstName: "Jessica",
            fullName: "Jessica Flick",
            parents: "Putri dari Bapak Hansi Flick & Ibu Marry Jane",
            description: "Seorang pribadi yang sederhana dan penuh kasih, yang selalu menemukan kebahagiaan dalam hal-hal kecil.",
            photo: "assets/images/women.png",
            socialMedia: {
                facebook: "https://facebook.com/",
                instagram: "https://instagram.com/"
            }
        },

        groom: {
            firstName: "Michael",
            fullName: "Michael Doe",
            parents: "Putra dari Bapak John Doe & Ibu Jane Doe",
            description: "Pribadi yang hangat dan penuh perhatian, yang percaya bahwa perjalanan terbaik adalah yang dijalani bersama.",
            photo: "assets/images/man.png",
            socialMedia: {
                facebook: "https://facebook.com/",
                instagram: "https://instagram.com/"
            }
        }
    },

    // ========================================
    // WEDDING SCHEDULE
    // ========================================
    schedule: {
        subtitle: "Wedding Schedule",
        title: "The Day's Itinerary",
        description: "Please join us on time to ensure you don't miss a single moment of our celebrations.",

        events: [
            {
                category: "THE CEREMONY",
                title: "Holy Matrimony",
                date: "Monday, Dec 14, 2026",
                startTime: "10:00 WIB",
                endTime: "11:30 WIB",
                location: "The Glass Cathedral, Hillside Reserve",
                calendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&amp;text=Holy%20Matrimony%20Jessica%20And%20Michael&amp;dates=20261214T100000/20261214T113000&amp;details=Wedding%20Ceremony&amp;location=The%20Glass%20Cathedral%2C%20Hillside%20Reserve"
            },
            {
                category: "THE CELEBRATION",
                title: "Grand Reception",
                date: "Monday, Dec 14, 2026",
                startTime: "12:00 WIB",
                endTime: "16:00 WIB",
                location: "The Grand Ballroom, Hillside Reserve",
                calendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&amp;text=Grand%20Reception%20Jessica%20And%20Michael&amp;dates=20261214T120000/20261214T160000&amp;details=Wedding%20Reception&amp;location=The%20Glass%20Cathedral%2C%20Hillside%20Reserve"
            }
        ]
    },

    // ========================================
    // LOCATION / MAPS
    // ========================================
    maps: {
        subtitle: "Location & Directions",
        title: "The Venue Location",
        description: "Here are the details to help you find your way to our celebration.",

        locations: [
            {
                category: "THE CEREMONY",
                title: "The Glass Cathedral",
                address: "The Glass Cathedral, Hillside Reserve",
                mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.098961936418!2d114.58924607497197!3d-3.3257219966490696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de423ff8750a5a1%3A0xa5eb53c97d21416f!2sUD%20REZ%20WAN%20JAYA!5e0!3m2!1sid!2sid!4v1788542858786!5m2!1sid!2sid",
                googleMapsUrl: "https://maps.app.goo.gl/jS6m5HnXCdhwxRG98",
                calendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&amp;text=Holy%20Matrimony%20Jessica%20And%20Michael&amp;dates=20261214T100000/20261214T113000&amp;details=Wedding%20Ceremony&amp;location=The%20Glass%20Cathedral%2C%20Hillside%20Reserve"
            },
            {
                category: "THE CELEBRATION",
                title: "The Grand Ballroom",
                address: "The Grand Ballroom, Hillside Reserve",
                mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.098961936418!2d114.58924607497197!3d-3.3257219966490696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de423ff8750a5a1%3A0xa5eb53c97d21416f!2sUD%20REZ%20WAN%20JAYA!5e0!3m2!1sid!2sid!4v1788542858786!5m2!1sid!2sid",
                googleMapsUrl: "https://maps.app.goo.gl/jS6m5HnXCdhwxRG98",
                calendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&amp;text=Grand%20Reception%20Jessica%20And%20Michael&amp;dates=20261214T120000/20261214T160000&amp;details=Wedding%20Reception&amp;location=The%20Glass%20Cathedral%2C%20Hillside%20Reserve"
            }
        ]
    },

    // ========================================
    // COUNTDOWN
    // ========================================
    countdown: {
        title: "Counting Down To Forever",
        message: "We can't wait to celebrate this special day with you.",
        targetDate: "2026-12-14T10:00:00+07:00",
        calendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&amp;text=Holy%20Matrimony&amp;dates=20261214T100000/20261214T113000&amp;details=Wedding%20Ceremony&amp;location=The%20Glass%20Cathedral%2C%20Hillside%20Reserve"
    },

    // ========================================
    // LIVE STREAM
    // ========================================
    livestream: {
        subtitle: "VIRTUAL CELEBRATION",
        title: "Watch Live Streaming",
        description: "For our beloved friends and family who cannot make it in person, we invite you to join our ceremony virtually via high-definition broadcast.",
        date: "Monday, 14 December 2026",
        time: "09:00 WIB",
        url: "https://www.youtube.com/live/3o7abhf9EAE?si=YhrTZQZhzlxn91sy"
    },

    // ========================================
    // LOVE STORY
    // ========================================
    loveStory: {
        subtitle: "Our Journey",
        title: "Our Love Story",
        description: "Every love story is beautiful, but ours is our favorite. Here are a few moments that brought us closer together.",

        items: [
            {
                year: "2019",
                label: "THE BEGINNING",
                title: "Where It All Began",
                description: "It all started with a simple hello, not knowing that this little moment would become the beginning of our journey.",
                image: "assets/images/firstdate.jpeg"
            },
            {
                year: "2020",
                label: "GROWING TOGETHER",
                title: "Moments We Shared",
                description: "Through countless conversations, little adventures, and unforgettable moments, we discovered how special it was to have each other.",
                image: "assets/images/relationship.jpg"
            },
            {
                year: "2024",
                label: "A NEW CHAPTER",
                title: "Forever Starts Here",
                description: "With love in our hearts and dreams for the future, we decided to take the next step together.",
                image: "assets/images/propose.jpeg"
            },
            {
                year: "2026",
                label: "THE BEGINNING OF FOREVER",
                title: "Our Wedding Day",
                description: "Surrounded by the people we love, we begin the most beautiful chapter of our story together.",
                image: "assets/images/wedding.jpg"
            }
        ]
    },

    // ========================================
    // GALLERY
    // ========================================
    gallery: {
        subtitle: "Our Memories",
        title: "Captured Moments",
        description: "A collection of moments, memories, and little pieces of our journey together.",

        images: [
            {
                src: "assets/images/gallery/gallery1.jpg",
                alt: "Wedding memory 1"
            },
            {
                src: "assets/images/gallery/gallery2.jpeg",
                alt: "Wedding memory 2"
            },
            {
                src: "assets/images/gallery/gallery3.jpg",
                alt: "Wedding memory 3"
            },
            {
                src: "assets/images/gallery/gallery4.jpg",
                alt: "Wedding memory 4"
            },
            {
                src: "assets/images/gallery/gallery5.jpg",
                alt: "Wedding memory 5"
            },
            {
                src: "assets/images/gallery/gallery6.jpg",
                alt: "Wedding memory 6"
            }
        ]
    },

    // ========================================
    // VIDEO
    // ========================================
    video: {
        subtitle: "Our Moments",
        title: "A Glimpse Of Our Journey",
        description: "A collection of moments, memories, and stories that we would love to share with you.",
        youtubeEmbedUrl: "https://www.youtube.com/embed/CGoxTMkNbmQ?si=ltR3l0m-X3Ogx-fs"
    },

    // ========================================
    // WISHES
    // ========================================
    wishes: {
        subtitle: "WISHES & PRAYERS",
        title: "Your Wishes For Us",
        description: "Your presence in our lives means so much to us. Leave us your heartfelt wishes and prayers as we begin this beautiful journey together.",

        form: {
            title: "Send Wishes",
            namePlaceholder: "Enter your name",
            messagePlaceholder: "Write your wishes here...",
            submitText: "SEND WISHES",
            SCRIPT_URL: "https://script.google.com/macros/s/AKfycbyTklxXZlGkiLiSKuNUyh_l2KSTi4biKvN-LxOMgU7X2J7xPUUbC0RV_3vSYYBy7MPwMQ/exec",

            attendanceOptions: [
                {
                    label: "Will Attend",
                    value: "Will Attend"
                },
                {
                    label: "Unable to Attend",
                    value: "Unable to Attend"
                }
            ]
        },

        recentTitle: "Recent Wishes"
    },

    // ========================================
    // GIFT
    // ========================================
    gift: {
        subtitle: "Digital Envelope",
        title: "Registry &Wedding Gift",
        description: "Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, a digital contribution would be warmly appreciated.",

        bank: {
            title: "Direct Bank Transfer",
            bankName: "BCA",
            accountHolder: "Jessica Miller & Michael Vance",
            accountNumber: "1234567890"
        },

        delivery: {
            title: "Wedding Gift Delivery",
            recipient: "Jessica & Michael",
            address: "Wedding Gift Delivery Address",
            note: "Thank you for your kindness and generosity."
        }
    },

    // ========================================
    // QUOTE
    // ========================================
    quote: {
        label: "A Word of Love",
        text: "\"May God make our marriage a reality, be with us every step of the way, and fill our home with love, joy, and peace.\"",
        source: "Blessings & Prayers"
    },

    // ========================================
    // MUSIC
    // ========================================
    music: {
        source: "assets/audio/wedding-backsound.mp3",
        autoplay: false
    }
};

// Make configuration accessible globally
window.WEDDING_CONFIG = WEDDING_CONFIG;

function getConfigValue(path) {
    return path.split(".").reduce(
        (value, key) => value?.[key],
        window.WEDDING_CONFIG
    );
}

function applyConfig() {
    document.querySelectorAll("[data-config]").forEach(element => {
        const value = getConfigValue(element.dataset.config);

        if (value !== undefined && value !== null) {
            element.textContent = value;
        }
    });

    const attributes = ["src", "href", "placeholder", "alt"];

    attributes.forEach(attribute => {
        document.querySelectorAll(`[data-config-${attribute}]`).forEach(element => {
            const path = element.dataset[`config${attribute.charAt(0).toUpperCase()}${attribute.slice(1)}`];
            const value = getConfigValue(path);

            if (value !== undefined && value !== null && value !== "") {
                element.setAttribute(attribute, value);
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", applyConfig);