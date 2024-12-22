// Get the modal
const modal = document.getElementById("myModal");
const modalContainer = document.getElementsByClassName("modal-container");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");
const body = document.getElementsByTagName("body");
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
  body[0].style.overflow = "hidden";
  body[0].style.height = "100vh";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  body[0].style.overflow = "auto";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal || event.target == modalContainer[0]) {
    modal.style.display = "none";
    body[0].style.overflow = "auto";
  }
};
