const menuBurger = document.getElementById("burger");
const nav = document.getElementById("nav");

menuBurger.addEventListener(`click`, function () {
  nav.classList.toggle(`slide`);
});

const toggle = document.getElementById("moon");
toggle.addEventListener(`click`, function () {
  this.classList.toggle("fa-sun");
  if (this.classList.toggle("fa-moon")) {
    document.getElementById("header").style.backgroundColor = "black";
    document.getElementById("logo").style.color = "white";
    document.getElementById("navHome").style.color = "white";
    document.getElementById("navAbout").style.color = "white";
    document.getElementById("navProject").style.color = "white";
    document.getElementById("navContact").style.color = "white";
    document.getElementById("span1").style.backgroundColor = "white";
    document.getElementById("span2").style.backgroundColor = "white";
    document.getElementById("span3").style.backgroundColor = "white";
    document.getElementById("moon").style.color = "white";
    document.getElementById("header").classList.remove("header1");
    document.getElementById("header").classList.add("header");
    document.getElementById("home").style.backgroundColor = "black";
    document.getElementById("homeH1").style.color = "white";
    document.getElementById("homeP").style.color = "white";
    document.getElementById("resume").style.backgroundColor = "black";
    document.getElementById("about").style.backgroundColor = "#1b1b1b";
    document.getElementById("aboutH11").style.color = "white";
    document.getElementById("aboutH12").style.color = "white";
    document.getElementById("project").style.backgroundColor = "black";
    document.getElementById("projectH1").style.color = "white";
    document.getElementById("contact").style.backgroundColor = "#1b1b1b";
    document.getElementById("contactH1").style.color = "white";
    document.getElementById("contactForm").style.backgroundColor = "black";
  } else {
    document.getElementById("header").style.backgroundColor = "white";
    document.getElementById("logo").style.color = "black";
    document.getElementById("navHome").style.color = "black";
    document.getElementById("navAbout").style.color = "black";
    document.getElementById("navProject").style.color = "black";
    document.getElementById("navContact").style.color = "black";
    document.getElementById("span1").style.backgroundColor = "black";
    document.getElementById("span2").style.backgroundColor = "black";
    document.getElementById("span3").style.backgroundColor = "black";
    document.getElementById("moon").style.color = "black";
    document.getElementById("header").classList.add("header1");
    document.getElementById("home").style.backgroundColor = "white";
    document.getElementById("homeH1").style.color = "black";
    document.getElementById("homeP").style.color = "black";
    document.getElementById("resume").style.backgroundColor = "white";
    document.getElementById("about").style.backgroundColor = "#f1f1f1";
    document.getElementById("aboutH11").style.color = "black";
    document.getElementById("aboutH12").style.color = "black";
    document.getElementById("project").style.backgroundColor = "white";
    document.getElementById("projectH1").style.color = "black";
    document.getElementById("contact").style.backgroundColor = "#f1f1f1";
    document.getElementById("contactH1").style.color = "black";
    document.getElementById("contactForm").style.backgroundColor = "white";
  }
});
