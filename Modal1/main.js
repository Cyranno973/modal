//get body
var body = document.body
// get modal element 
var modal = document.getElementById('simpleModal');
//get open modal button
var moddalBtn = document.getElementById('modalBtn');
//get close button
var closeBtn = document.getElementById('closeBtn');
// listen for click
moddalBtn.addEventListener('click', openModal);
// function open modal
function openModal(){
	modal.style.display = 'block';
	body.style.overflow ="hidden";
}
closeBtn.addEventListener('click', closeModal);
// function closeBtn

function closeModal(){
	modal.style.display = 'none';
	body.style.overflow ="auto";
}
