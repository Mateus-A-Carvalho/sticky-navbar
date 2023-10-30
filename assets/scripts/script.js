const navbarEl = document.querySelector('#navbar');
const navbarHeight = navbarEl.scrollHeight;
const sectionEl = document.querySelector('.lorem');
const sectionHeight = sectionEl.scrollHeight;

document.addEventListener("scroll", () => {
    if(navbarHeight >= sectionHeight) {
      navbarEl.style.setProperty("--navbar-dark-bg", "--navbar-light-bg");
    }
});

// Note: The scrollHeight of my navbar will be always the same because it's has position:fixed;
// "how to get which height element is in scrollbar in Javascript?"