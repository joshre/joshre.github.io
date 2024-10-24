handleTouchClick = function (element, callback) {
  element.addEventListener("click", callback);
  element.addEventListener("touchstart", callback);
};

homeSweetHomeToMe = function () {
  let vols = document.querySelectorAll(".vols");
  let rockyTopBg = document.querySelector(".rocky-top-bg");

  vols.forEach((el) => {
    handleTouchClick(el, () => {
      rockyTopBg.classList.add("run");

      setTimeout(() => {
        rockyTopBg.classList.remove("run");
      }, 1000);
    });
  });
};

makeAnObservation = function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const targetClass = entry.target.getAttribute("data-class");
        entry.target.classList.add(targetClass);
        observer.unobserve(entry.target);
      }
    });
  });

  document.querySelectorAll(".observe").forEach((element) => {
    observer.observe(element);
  });
};

mobileNavHandler = function () {
  let button = document.querySelector(".menu--trigger-button");
  let body = document.querySelector("body");
  let nav = document.querySelector(".nav");
  let links = Array.from(nav.querySelectorAll("a"));

  links.push(button);

  const toggleNav = (el) => {
    body.classList.toggle("navopen");
    let isNavOpen = body.classList.contains("navopen");

    button.setAttribute("aria-expanded", isNavOpen);
    nav.setAttribute("aria-hidden", !isNavOpen);

    if (isNavOpen) {
      nav.classList.remove("pointer-events-none");
      nav.classList.add("pointer-events-auto");
    } else {
      nav.classList.remove("pointer-events-auto");
      nav.classList.add("pointer-events-none");
    }
  };

  links.forEach((el) => {
    el.addEventListener("click", () => {
      toggleNav(el);
    });
  });
};

slideButtonsOverOnMobile = function () {
  let ticking = false;

  const checkOverlap = (stickyButtons, globalSticky) => {
    stickyButtons.forEach((button) => {
      const targetClasses = button.getAttribute("data-class").split(" ");
      const globalStickyRect = globalSticky.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();

      const isOverlapping =
        buttonRect.top < globalStickyRect.bottom &&
        buttonRect.bottom > globalStickyRect.top;

      if (isOverlapping) {
        button.classList.add(...targetClasses);
      } else {
        button.classList.remove(...targetClasses);
      }
    });
  };

  const handleScroll = (stickyButtons, globalSticky) => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        checkOverlap(stickyButtons, globalSticky);
        ticking = false;
      });
      ticking = true;
    }
  };

  if (window.innerWidth < 830) {
    const stickyButtons = document.querySelectorAll(".sticky-button");
    const globalSticky = document.querySelector("#nav");

    const observer = new IntersectionObserver(
      (entries) => {
        let anyIntersecting = false;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anyIntersecting = true;
          }
        });
        if (anyIntersecting) {
          window.addEventListener("scroll", () => handleScroll(stickyButtons, globalSticky));
        } else {
          window.removeEventListener("scroll", () => handleScroll(stickyButtons, globalSticky));
        }
      },
      { root: null, threshold: [0] }
    );

    stickyButtons.forEach((button) => observer.observe(button));

    checkOverlap(stickyButtons, globalSticky); // Initial check on load
  }
};



document.addEventListener("DOMContentLoaded", function (event) {
  makeAnObservation();
  homeSweetHomeToMe();
  mobileNavHandler();
  slideButtonsOverOnMobile();
});
