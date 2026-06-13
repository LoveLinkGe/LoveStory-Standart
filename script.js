// =====================
// LOADER
// =====================

window.addEventListener("load", () => {

    const loader =
    document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.transition = "0.8s";

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }, 1200);

});

// =====================
// LOVE DAYS COUNTER
// =====================

// შეცვალე ეს თარიღი

const startDate =
new Date("2024-01-01");

function updateDaysCounter(){

    const today =
    new Date();

    const difference =
    today - startDate;

    const days =
    Math.floor(
        difference /
        (1000 * 60 * 60 * 24)
    );

    const counter =
    document.getElementById(
    "daysCounter"
    );

    if(counter){

        counter.textContent =
        days;

    }

}

updateDaysCounter();

// =====================
// MUSIC PLAYER
// =====================

const song =
document.getElementById("song");

const musicBtn =
document.querySelector(".music-btn");

function toggleMusic(){

    if(song.paused){

        song.play();

        musicBtn.innerHTML =
        "⏸ შეჩერება";

    }else{

        song.pause();

        musicBtn.innerHTML =
        "▶ მოსმენა";

    }

}

song.addEventListener(
"ended",
()=>{

    musicBtn.innerHTML =
    "▶ მოსმენა";

}
);

// =====================
// REVEAL ANIMATION
// =====================

const reveals =
document.querySelectorAll(
".reveal"
);

function revealSections(){

    reveals.forEach(section => {

        const top =
        section.getBoundingClientRect().top;

        const visible =
        window.innerHeight - 100;

        if(top < visible){

            section.classList.add(
            "active"
            );

        }

    });

}

window.addEventListener(
"scroll",
revealSections
);

revealSections();

// =====================
// NAVBAR SCROLL EFFECT
// =====================

const nav =
document.querySelector("nav");

window.addEventListener(
"scroll",
()=>{

    if(window.scrollY > 60){

        nav.style.background =
        "rgba(10,10,10,.92)";

        nav.style.boxShadow =
        "0 20px 40px rgba(0,0,0,.35)";

    }else{

        nav.style.background =
        "rgba(15,15,15,.7)";

        nav.style.boxShadow =
        "none";

    }

}
);

// =====================
// SMOOTH SCROLL
// =====================

document
.querySelectorAll('nav a')
.forEach(anchor => {

    anchor.addEventListener(
    'click',
    function(e){

        e.preventDefault();

        const target =
        document.querySelector(
        this.getAttribute(
        'href'
        )
        );

        target.scrollIntoView({

            behavior:'smooth'

        });

    });

});

// =====================
// GALLERY ANIMATION
// =====================

const images =
document.querySelectorAll(
".gallery img"
);

images.forEach(img => {

    img.addEventListener(
    "mousemove",
    (e)=>{

        const rect =
        img.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const rotateY =
        (x - rect.width/2)/25;

        const rotateX =
        -(y - rect.height/2)/25;

        img.style.transform =

        `perspective(1000px)
        rotateY(${rotateY}deg)
        rotateX(${rotateX}deg)
        scale(1.03)`;

    });

    img.addEventListener(
    "mouseleave",
    ()=>{

        img.style.transform =
        "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)";

    });

});

// =====================
// HERO PARALLAX
// =====================

const heroImage =
document.querySelector(
".hero img"
);

window.addEventListener(
"scroll",
()=>{

    const value =
    window.scrollY;

    heroImage.style.transform =

    `translateY(${value * 0.3}px)
    scale(1.05)`;

}
);

// =====================
// FLOATING HEARTS
// =====================

function createHeart(){

    const heart =
    document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position =
    "fixed";

    heart.style.left =
    Math.random() * 100 + "vw";

    heart.style.bottom =
    "-40px";

    heart.style.fontSize =
    Math.random() * 12 + 14 + "px";

    heart.style.opacity =
    ".35";

    heart.style.pointerEvents =
    "none";

    heart.style.zIndex =
    "999";

    document.body.appendChild(
    heart
    );

    let position = -40;

    const move =
    setInterval(()=>{

        position += 2;

        heart.style.bottom =
        position + "px";

        heart.style.transform =

        `translateX(${
        Math.sin(position/40)
        * 20
        }px)`;

        if(
        position >
        window.innerHeight + 100
        ){

            clearInterval(move);

            heart.remove();

        }

    },30);

}

setInterval(
createHeart,
3000
);

// =====================
// CHAT APPEAR EFFECT
// =====================

const messages =
document.querySelectorAll(
".message-left, .message-right"
);

messages.forEach(
(message,index)=>{

    message.style.opacity =
    "0";

    message.style.transform =
    "translateY(20px)";

    setTimeout(()=>{

        message.style.transition =
        ".5s ease";

        message.style.opacity =
        "1";

        message.style.transform =
        "translateY(0)";

    },

    1500 + (index * 350)

    );

});