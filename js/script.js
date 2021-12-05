const bkHome = document.querySelector('#bkHome');
const onas = document.querySelector('#onas');
const kontakt = document.querySelector('#kontakt');
const galeria = document.querySelector('#galeria');

bkHome.addEventListener("click", homeOn);
onas.addEventListener("click", aboutOn);
kontakt.addEventListener("click", contactOn);
galeria.addEventListener("click", galleryOn);

const menu = {
  about: document.querySelector('#about'),
  home: document.querySelector('#home'),
  contact: document.querySelector('#contact'),
  gallery: document.querySelector('#gallery')
}

const title = document.getElementsByTagName("TITLE")[0];

function aboutOn() {

  menu.about.classList.remove("off");
  menu.home.classList.add("off");
  menu.contact.classList.add("off");
  menu.gallery.classList.add("off");
  
  title.textContent = " O NAS | REGEO Adrian Kasprzak";
}

function contactOn() {

  menu.contact.classList.remove("off");
  menu.home.classList.add("off");
  menu.about.classList.add("off");
  menu.gallery.classList.add("off");
  
  title.textContent = " KONTAKT | REGEO Adrian Kasprzak";
}

function homeOn() {

  menu.home.classList.remove("off");
  menu.about.classList.add("off");
  menu.contact.classList.add("off");
  menu.gallery.classList.add("off");
  
  title.textContent = " HOME | REGEO Adrian Kasprzak";
}

function galleryOn() {

  menu.gallery.classList.remove("off")
  menu.about.classList.add("off");
  menu.contact.classList.add("off");
  menu.home.classList.add("off");

  title.textContent = " GALERIA | REGEO Adrian Kasprzak";

}

function enlarge() {
  
}