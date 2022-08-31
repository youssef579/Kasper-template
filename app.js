let listIcon = document.querySelector("header nav i:first-child");
let links = document.querySelector("header nav ul");

listIcon.addEventListener("click", function () {
    links.style.setProperty("display", getComputedStyle(links).getPropertyValue("display") === "none" ? "flex" : "none");
})