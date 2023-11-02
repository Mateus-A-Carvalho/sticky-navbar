const navbarEl = document.querySelector('#navbar');
const navbarHeight = navbarEl.scrollHeight;
const logoEl = document.querySelector(".logo")
const sectionEl = document.querySelector('.lorem');
const sectionHeight = sectionEl.scrollHeight;
const bgWrapperElHeight = document.querySelector(".bg-wrapper").scrollHeight;


document.addEventListener("scroll", () => {
  let pointToChange = bgWrapperElHeight - navbarHeight - 5;
  console.log(scrollY)
  console.log(pointToChange);

  if(scrollY >= pointToChange) {
    // console.log(`Point Reached!`)
    navbarEl.style.setProperty("--navbar-light-bg", "rgba(25, 25, 25, 1)");
    navbarEl.style.setProperty("--navbar-fontLight-color", "rgba(230, 230, 230, .8)");
  } else if (scrollY <= pointToChange) {
    navbarEl.style.setProperty("rgba(25, 25, 25, 1)", "--navbar-light-bg");
    navbarEl.style.setProperty("rgba(230, 230, 230, .8)", "--navbar-fontLight-color");
  }
});


