// Sticky Navbar
let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let resumedow = document.getElementById("resume-button-2");
let resume1 = document.getElementById("resume-button-1");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

resumedow.onclick = () => {
    window.open("https://drive.google.com/file/d/1EFyDOQnBuZ8qzpgii6FlJOQq3IgRJ00R/view");
    setTimeout(() => {
        window.location.href="https://drive.google.com/u/0/uc?id=1EFyDOQnBuZ8qzpgii6FlJOQq3IgRJ00R&export=download";
    }, 5);
};

resume1.onclick = () => {
    window.open("https://drive.google.com/file/d/1EFyDOQnBuZ8qzpgii6FlJOQq3IgRJ00R/view");
    setTimeout(() => {
        window.location.href="https://drive.google.com/u/0/uc?id=1EFyDOQnBuZ8qzpgii6FlJOQq3IgRJ00R&export=download";
    }, 5);

};

// // Dark Mode
// // let darkmode = document.querySelector("#darkmode");

// darkmode.onclick = () => {
//   if (darkmode.classList.contains("bx-moon")) {
//     darkmode.classList.replace("bx-moon", "bx-sun");
//     document.body.classList.add("active");
//   } else {
//     darkmode.classList.replace("bx-sun", "bx-moon");
//     document.body.classList.remove("active");
//   }
// };
