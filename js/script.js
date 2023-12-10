import swal from "sweetalert";

const menuBtnEl = document.getElementById("menu-btn");
const mobileMenuEl = document.getElementById("mobile-menu");

const formEl = document.getElementById("shorten-form");
const inputEl = document.getElementById("shorten-input");
const errorMessageEl = document.getElementById("shorten-error");

menuBtnEl.addEventListener("click", toggleHamburgerMenu);
formEl.addEventListener("submit", submitFromRequest);

// Toggle Mobile Menu
function toggleHamburgerMenu() {
  menuBtnEl.classList.toggle("open");
  mobileMenuEl.classList.toggle("flex");
  mobileMenuEl.classList.toggle("hidden");
}

function validateURL(str) {
  // Regular expression parts for different URL components
  const protocol = "^(https?:\\/\\/)?";
  const domain = "(([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}";
  const ip = "((\\d{1,3}\\.){3}\\d{1,3})";
  const port = "(\\:\\d+)?";
  const path = "(\\/[-a-z\\d%_.~+]*)*";
  const query = "(\\?[;&a-z\\d%_.~+=-]*)?";
  const fragment = "(\\#[-a-z\\d_]*)?$";

  // Combine all parts into a full regular expression
  const pattern = new RegExp(
    protocol + "(" + domain + "|" + ip + ")" + port + path + query + fragment,
    "i"
  );

  return pattern.test(str);
}

function submitFromRequest(e) {
  e.preventDefault();

  if (inputEl.value == "") {
    errorMessageEl.innerHTML = "Empty URL";
    inputEl.style.border = "3px solid hsl(0, 82%, 72%)";
  } else if (!validateURL(inputEl.value)) {
    errorMessageEl.innerHTML = "Invalid URL";
    inputEl.style.border = "3px solid hsl(0, 82%, 72%)";
  } else {
    errorMessageEl.innerHTML = "";
    swal("Good job!", "You clicked the button!", "success");
  }
}
