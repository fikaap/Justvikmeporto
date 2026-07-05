// ===============================
// Smooth Navbar Effect
// ===============================

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if(window.scrollY > 60){

        nav.style.padding = "16px 8%";
        nav.style.background = "rgba(15,23,42,.98)";
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.15)";

    }else{

        nav.style.padding = "22px 8%";
        nav.style.background = "rgba(15,23,42,.95)";
        nav.style.boxShadow = "none";

    }

});

// ===============================
// Fade In Animation
// ===============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});
