var menu = document.getElementById("navbar");
var topMenu = document.getElementById("top-nav");
var cartBadge = document.getElementById("cart-badge");
var carts = [];
var cart_counter = 0;
var cartContainer = document.getElementById("cart-container");

window.onload = function () {
  carts =
    JSON.parse(sessionStorage.getItem("carts")) === null
      ? new Array()
      : JSON.parse(sessionStorage.getItem("carts"));
  cart_counter =
    JSON.parse(sessionStorage.getItem("cartCounter")) === null
      ? 0
      : JSON.parse(sessionStorage.getItem("cartCounter"));

  cartBadge.innerText = cart_counter;

  carts.map((cart) => {
    var link = document.getElementById(`checkout-${cart[1]}`);
    var btn = document.getElementById(`addBtn${cart[1]}`);
    if (link === null) return;
    link.style.display = "inline-block";
    btn.style.display = "none";
  });

  if (carts.length > 0 && cartContainer) {
    updateCartList();
  }
};

function updateCartList() {
  var cartList = carts.map((cart) => {
    return `<article class="card cart_item">
              <img
                class="card_img"
                src="img/${cart[0]}"
                alt="Xbox one game"
              />
              <div class="card_body">
                <h3 class="card_header">product title</h3>
                <span class="price">32.00</span>
                <div class="card_quantity">
                  <button class="btn" onclick="decrement(${cart[1]})">-</button>
                  <input type="number" name="counter" id="${cart[1]}" value="1" />
                  <button class="btn" onclick="increment(${cart[1]})">+</button>
                </div>
              </div>
            </article>`;
  });
  cartContainer.innerHTML = cartList.join(" ");
}

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

function increment(id) {
  var counter = document.getElementById(id);
  var count = parseInt(counter.value, 10);
  count = isNaN(count) ? 0 : count;
  counter.value = ++count;
}

function decrement(id) {
  var counter = document.getElementById(id);
  var count = parseInt(counter.value, 10);
  count = isNaN(count) ? 0 : count;

  counter.value = count <= 0 ? 0 : --count;

  if (count === 0) {
    cart_counter--;
    cartBadge.innerText = cart_counter;
    window.sessionStorage.setItem("cartCounter", JSON.stringify(cart_counter));
    carts = carts.filter((cart) => {
      return cart[1] !== id;
    });
    window.sessionStorage.setItem("carts", JSON.stringify(carts));
    updateCartList();
  }
}

function addToCart(img, id) {
  var checkout = document.getElementById(`checkout-${id}`);
  var addBtn = document.getElementById(`addBtn${id}`);
  addBtn.style.display = "none";
  checkout.style.display = "block";

  cart_counter++;
  cartBadge.innerText = cart_counter;
  window.sessionStorage.setItem("cartCounter", JSON.stringify(cart_counter));

  carts.push([img, id]);
  window.sessionStorage.setItem("carts", JSON.stringify(carts));

  console.log(carts);
}
