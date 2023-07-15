const mobileNav = () => {
  const headerBtn = document.querySelector(".bars");
  const mobileNav = document.querySelector(".mobile-nav");

  let openMobileNav = false;

  headerBtn.addEventListener("click", () => {
    openMobileNav = !openMobileNav;
    if (openMobileNav) {
      mobileNav.style.display = "flex";
      document.body.style.overflowY = "hidden";
    } else {
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    }
  });

  const mobileSun = document.querySelector(".mobile-links .sun");
  mobileSun.addEventListener("click", () => {
    openMobileNav = false;
    mobileNav.style.display = "none";
    document.body.style.overflowY = "auto";
  });
};

export default mobileNav;
