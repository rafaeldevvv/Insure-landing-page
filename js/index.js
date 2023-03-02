const navList = document.querySelector('#nav-list');

document.querySelector('.toggle-nav').addEventListener('click', () => {
   let hidden = navList.getAttribute("data-hidden");

   navList.setAttribute('data-hidden', !(hidden == "true"));
})