function openMenu() {
  const menuBtn = document.querySelector(".menu__btn");
  const menu = document.querySelector(".menu");
  const menuNav = document.querySelector(".menu__nav");
  const menuInfo = document.querySelector(".menu__info");
  const navItems = document.querySelectorAll(".nav__item");

  //Initial state of the menu
  let showMenu = false;

  function toggleMenu() {
    if (!showMenu) {
      menuBtn.classList.add("close");
      menu.classList.add("show");
      menuNav.classList.add("show");
      menuInfo.classList.add("show");
      navItems.forEach(item => item.classList.add("show"));
      //show menu change to true
      showMenu = true;
    } else {
      menuBtn.classList.remove("close");
      menu.classList.remove("show");
      menuNav.classList.remove("show");
      menuInfo.classList.remove("show");
      navItems.forEach(item => item.classList.remove("show"));
      //show menu change to true
      showMenu = false;
    }
  }

  //event listeners
  menuBtn.addEventListener("click", toggleMenu);
}

openMenu();
