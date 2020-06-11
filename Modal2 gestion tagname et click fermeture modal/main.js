// window.addEventListener('click', find);
// var title1 = document.getElementsByTagName('h1')[0];
// var title2 = document.getElementsByTagName('h2');
// console.log(title2);

// // for( var i = 0, max = title2.length; i<max; i++)

// function find (event){
	
// 		event.target.style.visibility ="hidden";
	

// 		console.log("lol");
// 	}

// function find (event){
// 	if (event.target == title1) {
// 		for( var i = 0; i < title2.length; i++)
// {
// 	console.log(i);
// 	title2[i].style.visibility = 'hidden';	
// }

// 		console.log("lol");
// 	}
// }




var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}