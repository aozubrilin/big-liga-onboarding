const changeIntroTablet = () => {
  const mainPage = document.querySelector(".page-main");
  const introRow = document.querySelector(".intro__row");

  const breakpoint = window.matchMedia("(max-width:1023px)");

  const onClick = (evt) => {
    evt.preventDefault();
    introRow.classList.toggle("move-left");
    introRow.classList.toggle("move-right");
  };

  if (breakpoint.matches) {
    introRow.classList.add("intro__row--bg", "move-left");
    mainPage.addEventListener("click", onClick);
  }
};

export { changeIntroTablet };
