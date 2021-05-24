const bkHome = document.querySelector('#bkHome');
const onas = document.querySelector('#onas');
const kontakt = document.querySelector('#kontakt');

bkHome.onclick = homeOn;
onas.onclick = aboutOn;
kontakt.onclick = contactOn;

function aboutOn() {

  document.getElementById("about").classList.remove("off");
  document.getElementById("home").classList.add("off");
  document.getElementById("contact").classList.add("off");
  
  document.getElementsByTagName("TITLE")[0].innerHTML = " O NAS | REGEO Adrian Kasprzak";
}

function contactOn() {

  document.getElementById("contact").classList.remove("off");
  document.getElementById("home").classList.add("off");
  document.getElementById("about").classList.add("off");
  
  document.getElementsByTagName("TITLE")[0].innerHTML = " KONTAKT | REGEO Adrian Kasprzak";
}

function homeOn() {

  document.getElementById("home").classList.remove("off");
  document.getElementById("about").classList.add("off");
  document.getElementById("contact").classList.add("off");
  
  document.getElementsByTagName("TITLE")[0].innerHTML = " HOME | REGEO Adrian Kasprzak";
}