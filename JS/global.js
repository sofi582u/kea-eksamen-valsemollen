window.addEventListener("load", SidenVises);

function SidenVises() {
    console.log("SidenVises");

    document.querySelector("#menubutton").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("toggleMenu");

    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menubutton").innerHTML = "<img class=\"header-menu-icon\" src=\"img/burger-menu-icon.svg\" alt=\"Menu icon\">";
    } else {
        document.querySelector("#menubutton").innerHTML = "<img class=\"header-menu-icon\" src=\"img/cross-menu-icon.svg\" alt=\"Menu icon\">";
    }

}


// mouse drag scroll bar


const slider = document.querySelector('.image-container');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1; //* 3 if scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
});
