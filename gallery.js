const items = [

    // CCNY Top Project Award
    {
        type: "image",
        src: "ccny1.jpg",
        caption: "Receiving the Top Project Award at the City College of New York STEM Institute"
    },
    {
        type: "video",
        src: "ccny2.mp4",
        caption: "Presenting the Sunday Market NYC project"
    },
    {
        type: "image",
        src: "ccny3.jpg",
        caption: "Holding the Top Project Award after the presentation"
    },

    // Brazilian Jiu-Jitsu
    {
        type: "image",
        src: "bjj1.jpg",
        caption: "IBJJF Competition"
    },
    {
        type: "image",
        src: "bjj2.jpg",
        caption: "Gold Medal Ceremony"
    },
    {
        type: "image",
        src: "bjj3.jpg",
        caption: "Competition photo"
    },
    {
        type: "image",
        src: "bjj4.jpg",
        caption: "Family Jiu-Jitsu photo"
    },
    {
        type: "image",
        src: "bjj5.jpg",
        caption: "City Jiu-Jitsu Academy group photo"
    },

    // Chess
    {
        type: "video",
        src: "chess1.mp4",
        caption: "United Nations Games Chess Tournament award ceromony"
    },
    {
        type: "image",
        src: "chess2.jpg",
        caption: "United Nations Games Chess Tournament award"
    },
    {
        type: "image",
        src: "chess3.jpg",
        caption: "Little me playing chess"
    },
    {
        type: "image",
        src: "chess4.jpg",
        caption: "Tournament Highlights"
    },
    {
        type: "image",
        src: "chess5.jpg",
        caption: "Queens Day chess tournament award"
    },

   
    // Soccer
    {
        type: "image",
        src: "soccer1.jpg",
        caption: "School Soccer Team"
    },
    {
        type: "image",
        src: "soccer2.jpg",
        caption: "Match Day"
    },
    {
        type: "video",
        src: "soccer3.mp4",
        caption: "Game Highlights"
    },
    {
        type: "image",
        src: "soccer4.jpg",
        caption: "Training Session"
    },
    {
        type: "image",
        src: "soccer5.jpg",
        caption: "Team Celebration"
    },

    // Other
    {
        type: "image",
        src: "other1.jpg",
        caption: "Travel"
    },
    {
        type: "image",
        src: "other2.jpg",
        caption: "Friends"
    },
    {
        type: "image",
        src: "other3.jpg",
        caption: "Just me"
    },
    {
        type: "image",
        src: "other4.jpg",
        caption: "Special Moment"
    },
    {
        type: "image",
        src: "other5.jpg",
        caption: "Favorite Memory"
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

    if (item.type === "image") {

        card.innerHTML = `
            <img src="${item.src}" alt="${item.caption}">
            <div class="caption">${item.caption}</div>
        `;

    } else {

        card.innerHTML = `
            <video muted>
                <source src="${item.src}">
            </video>
            <div class="caption">${item.caption}</div>
        `;

    }

    card.addEventListener("click", () => {

        if (item.type === "image") {

            viewer.innerHTML = `
                <img src="${item.src}" alt="${item.caption}">
            `;

        } else {

            viewer.innerHTML = `
                <video controls autoplay>
                    <source src="${item.src}">
                </video>
            `;

        }

        caption.textContent = item.caption;
        lightbox.classList.add("show");

    });

    gallery.appendChild(card);

});

close.addEventListener("click", () => {

    lightbox.classList.remove("show");
    viewer.innerHTML = "";

});

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

        lightbox.classList.remove("show");
        viewer.innerHTML = "";

    }

});
