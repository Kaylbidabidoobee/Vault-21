function updateBackground() {
  const isDesktop = window.innerWidth > 900; // desktop detection
  const isLandscape = window.innerWidth > window.innerHeight; // landscape detection
  
  if (isDesktop && isLandscape) {
    // Desktop in landscape → use desktop background
    document.body.classList.add("desktop-landscape");
  } else {
    // Mobile OR desktop in portrait → use mobile background
    document.body.classList.remove("desktop-landscape");
  }
}

updateBackground();
window.addEventListener("resize", updateBackground);