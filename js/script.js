// ALL YOU JS GOES HERE

const burger = document.querySelector('div.burger');
const classlistmenu = document.querySelector('.classlist').classList;

function revealclasslistmenu() {
    classlistmenu.toggle("classlist")
    console.log('classlistmenu toggled');
}
burger.addEventListener('click', revealclasslistmenu);





