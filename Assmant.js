const toggleButton = document.getElementById("toggleButton");
const navbarCollapse = document.getElementById("navbarSupportedContent");

toggleButton.addEventListener("click", function () {
  if (window.innerWidth <= 850) {
    // Check if screen width is less than or equal to 768px (Bootstrap's mobile breakpoint)
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    } else {
      navbarCollapse.classList.add("show");
    }
  }
});