import './style.css';
import home from './homemodule'
import menu from './menumodule'
import contact from './contactmodule'



//Index.js
let nav = document.querySelector('nav')
let navbuttons = document.getElementsByClassName('navbuttons')
const contentdiv = document.getElementById('content')

home.createhome()



//load Home by default, when click button calls the mode function and data that matches
nav.addEventListener("click", (event) => {
    let child = contentdiv.lastElementChild;
    while (child) {
        contentdiv.removeChild(child);
        child = contentdiv.lastElementChild; }


  if (event.target === navbuttons[0]) {
    home.createhome()
  }

  if (event.target ===  navbuttons[1]) {
    menu.createmenu()
  }

  if (event.target ===  navbuttons[2]) {
    contact.createcontact()
  }


})










