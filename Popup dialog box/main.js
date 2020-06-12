
var modal = document.getElementById("myModal");
var contenu = document.getElementsByClassName('container')[0];
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var closeBtn = document.getElementById("closeBtn");

// When the user clicks on the button, open the modal 
//with function anonyme
btn.addEventListener('click', function() {
  modal.style.display = "block";
  contenu.style.filter = "blur(5px)";
})

// When the user clicks on <span> (x), close the modal
// with function with name
closeBtn.addEventListener('click', closeModal)
function closeModal() {
  modal.style.display = "none";
  contenu.style.filter = "blur(0px)";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    contenu.style.filter = "none";
  }
}