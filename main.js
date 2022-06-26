const menu = document.getElementById("menu");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");

openMenu.addEventListener("click", () => {
  menu.style.display = "flex";
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  menu.style.display = "none";
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 860) {
    openMenu.style.display = "none";
    closeMenu.style.display = "none";
    menu.style.display = "flex";
  } else {
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
    menu.style.display = "none";
  }
});
