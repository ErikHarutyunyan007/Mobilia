let hamburger = document.querySelector('.hamburger');
let navMenuList = document.querySelector('.nav-menu-list');
let i = true;
hamburger.addEventListener('click', (event) => {
    i ? navMenuList.className = 'active' : navMenuList.className = 'nav-menu-list'
    i = !i;
}); 
window.addEventListener("resize", function() {
    if (window.innerWidth > 952) {
      navMenuList.className = 'nav-menu-list'
    }
  });
