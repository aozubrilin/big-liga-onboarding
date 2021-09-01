const preloader = () => {
  const preloader = document.querySelector(".preloader");
  const intro = document.querySelector(".intro");

  const breakpoint = window.matchMedia("(min-width:1024px)");

  const load = () => {
    preloader.classList.add("preloader--hidden");

    window.setTimeout(function () {
      preloader.classList.remove("show");
      intro.classList.add("show");
    }, 500);
  };

  const onPressEnter = (evt) => {
    if (evt.key === "Enter") {
      evt.preventDefault();
      load();

      window.removeEventListener("keydown", onPressEnter);
    }
  };

  const onClick = (evt) => {
    const el = evt.target.parentNode;
    if (
      (el.classList && el.classList.contains("preloader__img")) ||
      el.classList.contains("preloader__logo")
    ) {
      return;
    }

    load();
    window.removeEventListener("click", onClick);
  };

  const initPreloader = () => {
    if (breakpoint.matches) {
      window.addEventListener("keydown", onPressEnter);
    } else {
      window.addEventListener("click", onClick);
    }
  };

  initPreloader();
};

export { preloader };
