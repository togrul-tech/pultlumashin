// Mövcud Elementlər
const themeToggle = document.getElementById('theme-toggle');
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
const header = document.getElementById('header');


const chatBtn = document.getElementById('chat-button');
const chatWindow = document.getElementById('chat-window');
const closeChat = document.getElementById('close-chat');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const chatBody = document.getElementById('chat-body');

// Dark/Light Mode
themeToggle.onclick = () => {
    document.body.classList.toggle('dark');
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('dark')) {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
};

// Mobil Menyu
menuToggle.onclick = () => {
    nav.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
};


document.querySelectorAll('nav a').forEach(link => {
    link.onclick = () => {
        nav.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        if(icon) {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    };
});


window.onscroll = () => {
    if (window.scrollY > 50) {
        header.style.padding = "5px 0";
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
    } else {
        header.style.padding = "0";
        header.style.boxShadow = "none";
    }
};



// Sadə Fade-in animasiyası (Observer)
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.trip-card, .section-title, .about-content').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "0.8s ease-out";
    observer.observe(el);
});

document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("tesla-intro");
    const header = document.getElementById("header");
    const hero = document.getElementById("home");

    // Animasiya bitəndən dərhal sonra (1.8 saniyə) elementləri göstər
    setTimeout(() => {
        if (intro) {
            intro.style.opacity = "0";
            
            // Əsas kontentləri animasiya ilə aktivləşdir
            header.classList.add("fade-in-content");
            hero.classList.add("fade-in-content");
            header.style.opacity = "1";
            hero.style.opacity = "1";

            // Fon blokunu tamamilə DOM-dan qaldır ki, kliklərə mane olmasın
            setTimeout(() => {
                intro.remove();
            }, 800);
        }
    }, 1800); 
});