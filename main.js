var title = document.getElementById("jobtitle");
var typewriter = new Typewriter(title, {
    loop: true,
    delay: 75,
});

typewriter.pauseFor(0)
    .typeString('<h6 class="jobTitle d-inline"> Front-end Developer</h6>')
    .pauseFor(300)
    .deleteChars(20)
    .pauseFor(1000)
    .typeString('<h6 class="jobTitle d-inline"> Software Engineer</h6>')
    .pauseFor(500)
    .start();

/********************************/

var products = document.querySelector(".products");
var about = document.querySelector(".about");
var projects = document.querySelector(".projects");

var itemButton = document.querySelectorAll(".itemBtn");
//about click
itemButton[0].onclick = function() {
    about.classList.remove("hidden");
    itemButton[0].classList.add("active");
    itemButton[1].classList.remove("active");
    itemButton[2].classList.remove("active");
    products.classList.add("hidden");
    projects.classList.add("hidden");
}

itemButton[1].onclick = function() {
    projects.classList.remove("hidden");
    itemButton[1].classList.add("active");
    itemButton[0].classList.remove("active");
    itemButton[2].classList.remove("active");
    products.classList.add("hidden");
    about.classList.add("hidden");
}

itemButton[2].onclick = function() {
    products.classList.remove("hidden");
    itemButton[2].classList.add("active");
    itemButton[1].classList.remove("active");
    itemButton[0].classList.remove("active");
    about.classList.add("hidden");
    projects.classList.add("hidden");
}