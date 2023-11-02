const navbarEl = document.querySelector('#navbar');
const navbarHeight = navbarEl.scrollHeight;
const logoEl = document.querySelector("#logo-img")
const sectionEl = document.querySelector("#lorem-section").scrollHeight;
const bgWrapperElHeight = document.querySelector(".bg-wrapper").scrollHeight;

console.log(sectionEl);

document.addEventListener("scroll", () => {
  let pointToChange = bgWrapperElHeight - navbarHeight - 5;
  console.log(pointToChange, scrollY);
  
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


