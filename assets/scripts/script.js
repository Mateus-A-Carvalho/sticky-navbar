const navbarEl = document.querySelector('#navbar');
const navbarHeight = navbarEl.scrollHeight + 5;
const logoEl = document.querySelector("#logo-img")
const bgWrapperElHeight = document.querySelector(".bg-wrapper").scrollHeight;


document.addEventListener("scroll", () => {
  let pointToChange = bgWrapperElHeight - navbarHeight;
  
  if(scrollY >= pointToChange) {
    navbarEl.style.backgroundColor = "rgba(25, 25, 25, 1)";
    navbarEl.style.color = "rgba(230, 230, 230, .8)";
    logoEl.style.border = ".5rem solid rgba(230, 230, 230, 1)";
  } else {
    navbarEl.style.backgroundColor = "rgba(230, 230, 230, 1)";
    navbarEl.style.color = "rgba(23, 29, 54, .8)";
    logoEl.style.border = ".5rem solid rgba(168, 166, 166, 0.8)";
  }
});


