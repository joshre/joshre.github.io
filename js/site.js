const playRockyTop = () => {
  const background = document.querySelector(".rocky-top-bg");
  if (!background) return;

  document.querySelectorAll(".vols").forEach((el) => {
    el.addEventListener("click", () => {
      background.classList.add("run");
      setTimeout(() => background.classList.remove("run"), 1000);
    });
  });
};

const revealOnScroll = () => {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add(entry.target.dataset.class);
      observer.unobserve(entry.target);
    }
  });

  for (const el of document.querySelectorAll(".observe")) observer.observe(el);
};

playRockyTop();
revealOnScroll();
