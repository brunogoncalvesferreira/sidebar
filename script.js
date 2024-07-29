const sidebar = document.querySelector("aside")
const buttonMenu = document.querySelector(".menu")

buttonMenu.addEventListener("click", handleMenuClick)

function handleMenuClick() {
  sidebar.classList.toggle("closed")
}
