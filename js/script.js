// ALL YOU JS GOES HERE
//burger toggle
const burger = document.querySelector('div.burger');
const classlistmenu = document.querySelector('.classlist').classList;

function revealclasslistmenu() {
    classlistmenu.toggle("classlist")
    console.log('classlistmenu toggled');
}
burger.addEventListener('click', revealclasslistmenu);




// ----------------------------------------------------------
// dark mode toggle//


const svg = document.querySelector('.burger svg');
const btn = document.querySelector('#theme-toggle');


function updateSvgColor() {
  if (document.body.classList.contains('dark-mode')) {
    svg.setAttribute('fill', 'white');
  } else {
    svg.setAttribute('fill', 'black');
  }
}

function applyThemeByTime() {
  const currenthour = new Date().getHours();
  if (currenthour >= 18 || currenthour < 6) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
  // Call helper to set color on load
  updateSvgColor();
}


applyThemeByTime();

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  updateSvgColor();
});