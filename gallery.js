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
        type: "image",
        src: "chess1.jpg",
        caption: "United Nations Games Chess Tournament"
    },
    {
        type: "image",
        src: "chess2.jpg",
        caption: "Queens Chess Day"
    },
    {
        type: "image",
        src: "chess3.jpg",
        caption: "Tournament Award"
    },
    {
        type: "video",
        src: "chess4.mp4",
        caption: "Tournament Highlights"
    },
    {
        type: "image",
        src: "chess5.jpg",
        caption: "Playing During a Tournament"
    },

    // School
    {
        type: "image",
        src: "school1.jpg",
        caption: "CCNY STEM Institute"
    },
    {
        type: "image",
        src: "school2.jpg",
        caption: "Research Presentation"
    },
    {
        type: "image",
        src: "school3.jpg",
        caption: "Leadership Award"
    },
    {
        type: "image",
        src: "school4.jpg",
        caption: "Certificate Ceremony"
    },
    {
        type: "image",
        src: "school5.jpg",
        caption: "School Event"
    },

    // Sunday Market NYC Project
    {
        type: "image",
        src: "project1.jpg",
        caption: "Sunday Market NYC Website"
    },
    {
        type: "image",
        src: "project2.jpg",
        caption: "Interactive Vendor & Customer Platform"
    },
    {
        type: "video",
        src: "project3.mp4",
        caption: "Project Demonstration"
    },
    {
        type: "image",
        src: "project4.jpg",
        caption: "Developing the Website"
    },
    {
        type: "image",
        src: "project5.jpg",
        caption: "AI Chatbot for Market Search"
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
        caption: "Conference"
    },
    {
        type: "video",
        src: "other4.mp4",
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
