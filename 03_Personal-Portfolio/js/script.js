// DarK Theme
const themeButton = document.getElementById("theme-button");
const body = document.querySelector("body");
const header = document.querySelector("header");
const moonIcon = document.querySelector(".fa-moon");
const sunIcon = document.querySelector(".fa-sun");
const projectItems = document.querySelectorAll(".project");
const titleSection = document.querySelector(".title");



themeButton.addEventListener("click", () => {
    body.style.transition = "all 0.5s ease-in-out";
    body.style.backgroundColor = "#121212";
    body.style.color = "#E0E0E0";

    header.style.backgroundColor = "#121212";
    header.style.color = "#E0E0E0";
    header.style.transition = "all 0.5s ease-in-out";

    titleSection.style.backgroundColor = "#444444";

    moonIcon.style.display = "none";
    sunIcon.style.display = "block";
    sunIcon.style.color = "#FFE87C";

    const navLinks = document.querySelectorAll(".navbar-link");
    navLinks.forEach((link) => {
        link.style.color = "#E0E0E0";
        link.style.transition = "all 0.5s ease-in-out";
    });

    projectItems.forEach((project) => {
        project.style.transition = "all 0.5s ease-in-out";
        project.style.backgroundColor = "#121212";
        project.style.color = "#E0E0E0";
    });
    

    

})