const MenuBtn = document.querySelector(".menu_btn");
const MobileMenu = document.querySelector(".links");
const x = window.matchMedia("(max-width:35em)");
function ShowMenu() {
  if (x.matches) {
    if (MobileMenu.style.display !== "block") {
      MobileMenu.style.display = "block";
    } else {
      MobileMenu.style.display = "none";
    }
  }
}
