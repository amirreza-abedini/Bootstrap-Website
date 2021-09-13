// animation for loading
// animation for logos
//increasing number fo hired

const navbar = document.querySelector("#navbar");
const nav_Heading = document.querySelector(".navbar-brand h1");
const navbarToggle = document.querySelector(".navbar-toggler");
const btnStart = document.querySelector("#btn-start");
const userBtns = document.querySelectorAll(".user-account-btns");
const reset = () => {
  navbar.classList.remove("stick");
  navbar.style.padding = ".5rem";
  nav_Heading.style.fontSize = "";
  navbarToggle.style.fontSize = "";
};

const resetBtn = () => {
  btnStart.classList.add("d-none");
};

history.scrollRestoration = "manual";

window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};

const accountStyle = () => {
  userBtns.forEach((elem) => {
    elem.addEventListener("click", () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0";
      console.log("hello");
    });
  });
};

window.onscroll = () => {
  console.log(document.body.scrollTo());
  let scrollPos = window.scrollTop;
  if (
    document.body.scrollTop > 130 ||
    document.documentElement.scrollTop > 130
  ) {
    navbar.classList.add("stick");
    navbar.style.padding = ".5rem";
    navbar.style.transition = ".2s ease-in-out";
    nav_Heading.style.fontSize = "23px";
    navbarToggle.style.fontSize = "15px";
    btnStart.classList.remove("d-none");
    btnStart.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });
    accountStyle();
  } else {
    reset();
    resetBtn();
  }
  if (document.body.clientWidth < 2000) {
    console.log("mobile");
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      btnStart.classList.add("d-none");
    }
  }
};
