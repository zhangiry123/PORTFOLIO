const items = [

    // =========================
    // CCNY STEM INSTITUTE
    // =========================

    {
        type: "image",
        src: "leadershipaward.jpg",
        caption: "Leadership Award – City College of New York STEM Institute (April 2026)"
    },

    

    {
        type: "image",
        src: "airesearch.jpg",
        caption: "Certificate of Achievement – Exceptional Research Project in Artificial Intelligence"
    },

    {
        type: "image",
        src: "stemcertificate.jpg",
        caption: "STEM Institute Certificate of Participation"
    },



    // =========================
    // HARVARD CERTIFICATES
    // =========================

    {
        type: "image",
        src: "cs50x.jpg",
        caption: "Harvard CS50x – Introduction to Computer Science"
    },

    {
        type: "image",
        src: "cs50p.jpg",
        caption: "Harvard CS50P – Introduction to Programming with Python"
    },



    // =========================
    // SCHOOL AWARDS
    // =========================

    {
        type: "image",
        src: "principalaward.jpg",
        caption: "Principal's Award – Academic Excellence (Average Above 95%)"
    },

    {
        type: "image",
        src: "spanishaward.jpg",
        caption: "Certificate of Academic Excellence – Spanish"
    },



    // =========================
    // CHESS
    // =========================

    {
        type: "image",
        src: "unchess.jpg",
        caption: "2nd Place – United Nations Games Chess Tournament (2025)"
    },

    {
        type: "image",
        src: "queenschess.jpg",
        caption: "5th Place – Queens Chess Day (2024)"
    },

    {
        type: "image",
        src: "brooklynchess.jpg",
        caption: "4th Place – CIS Brooklyn Chess Day (2025)"
    },

    {
        type: "image",
        src: "franciscomoya.jpg",
        caption: "7th Place – CIS CM Francisco Moya Chess Challenge (2024)"
    },

    {
        type: "image",
        src: "meninchess.jpg",
        caption: "3rd Place – CIS CM Menin CC Chess Tournament (2026)"
    },



    // =========================
    // BRAZILIAN JIU-JITSU
    // =========================

    {
        type: "image",
        src: "ibjjfgold.jpg",
        caption: "1st Place – IBJJF New York Spring International Open (2026)"
    },

    {
        type: "image",
        src: "ibjjfbronze1.jpg",
        caption: "3rd Place – IBJJF New York Fall International Open (2025)"
    },

    {
        type: "image",
        src: "ibjjfbronze2.jpg",
        caption: "3rd Place – IBJJF New Jersey Fall International Open (2025)"
    },

    {
        type: "image",
        src: "ibjjfbronze3.jpg",
        caption: "3rd Place – IBJJF New Jersey Spring International Open (2026)"
    },



    // =========================
    // EXTRA CERTIFICATES
    // =========================

    {
        type: "image",
        src: "certificate1.jpg",
        caption: "Academic Recognition"
    },

    {
        type: "image",
        src: "certificate2.jpg",
        caption: "Competition Certificate"
    },

    {
        type: "image",
        src: "certificate3.jpg",
        caption: "Achievement Certificate"
    },

    {
        type: "image",
        src: "certificate4.jpg",
        caption: "Honor Certificate"
    }

];

const gallery = document.querySelector(".gallery-grid");

const lightbox = document.getElementById("lightbox");
const viewer = document.getElementById("viewer");
const caption = document.getElementById("cap");
const close = document.getElementById("close");

items.forEach(item => {

    const card = document.createElement("div");
    card.className = "gallery-item";

    card.innerHTML = `
        <img src="${item.src}" alt="${item.caption}">
        <div class="caption">${item.caption}</div>
    `;

    card.addEventListener("click", () => {

        viewer.innerHTML = `
            <img src="${item.src}" alt="${item.caption}">
        `;

        caption.textContent = item.caption;

        lightbox.classList.add("show");

    });

    gallery.appendChild(card);

});

close.addEventListener("click", () => {

    lightbox.classList.remove("show");
    viewer.innerHTML = "";

});

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.classList.remove("show");
        viewer.innerHTML = "";

    }

});
