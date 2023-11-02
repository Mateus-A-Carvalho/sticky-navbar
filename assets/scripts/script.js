const navbarEl = document.querySelector('#navbar');
const navbarHeight = navbarEl.scrollHeight;
const logoEl = document.querySelector(".logo")
const sectionEl = document.querySelector('.lorem');
const sectionHeight = sectionEl.scrollHeight;
const bgWrapperElHeight = document.querySelector(".bg-wrapper").scrollHeight


document.addEventListener("scroll", () => {
  let pointToChange = bgWrapperElHeight - navbarHeight - 5;
  console.log(scrollY)
  console.log(pointToChange);

  if(scrollY >= pointToChange) {
    console.log(`Point Reached!`)
    navbarEl.style.setProperty("--navbar-light-bg", "--navbar-dark-bg");
  }
});

// let bgNavBar = navbarEl.style.setProperty("--navbar-light-bg", "--navbar-dark-bg");
//     let colorNavBar = navbarEl.style.setProperty("--navbar-fontLight-color", "--navbar-fontDark-color");
//     let borderLogo = logoEl.style.setProperty("--logo-LightBorder", "--logo-DarkBorder")

