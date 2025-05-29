// DarK Theme
let darkmode = localStorage.getItem("darkmode");
const darkThemeButton = document.getElementById("theme-button");
const titleBackgroundColor = document.querySelector(".title");

const enableDarkmode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkmode", "active");
}

const disableDarkmode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkmode", null);
    darkmode = "null";
}

if (darkmode === "active") enableDarkmode();

darkThemeButton.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode");
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});