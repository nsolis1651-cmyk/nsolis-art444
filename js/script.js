// ALL YOU JS GOES HERE

const burger = document.querySelector('div.burger');
burger.addEventListener('click', classlistmenu).classList;

function classlistmenu(){
    console.log('Classlist Shows');
    burger.toggle('classlistmenu');
}
