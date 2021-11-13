var menu = document.getElementById("navbar");
var topMenu = document.getElementById("top-nav");

function toggleMenu() {
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
  if (window.innerWidth < 721) {
    if (topMenu.style.display === "flex") {
      topMenu.style.display = "none";
    } else {
      topMenu.style.display = "flex";
    }
  }
}

function showLoginForm() {
  var loginForm = document.getElementById("login-frm");

  if (loginForm.style.display === "block") {
    loginForm.style.display = "none";
  } else {
    loginForm.style.display = "block";
  }
}

window.addEventListener("resize", function () {
  if (this.window.innerWidth >= 966) {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
  if (this.window.innerWidth >= 721) {
    topMenu.style.display = "flex";
  } else {
    topMenu.style.display = "none";
  }
});
