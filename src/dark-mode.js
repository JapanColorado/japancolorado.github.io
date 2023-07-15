const themeSwitcher = () => {
  const themeSwitcherBtns = document.querySelectorAll("button.sun");

  // Checks local storage for theme indicator
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
  }

  const handleThemeToggle = () => {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.removeItem("theme");
    }
  };
  
  themeSwitcherBtns.forEach((btn) =>
    btn.addEventListener("click", handleThemeToggle)
  );
};

export default themeSwitcher;
