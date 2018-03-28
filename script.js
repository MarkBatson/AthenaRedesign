function enablePrefix() {
  if (this.value == 'Sp18') {
    document.getElementById('prefix').disabled = true;
  }
  else {
    document.getElementById('prefix').disabled = false;
  }
}

function enableCourse() {
  console.log(document.getElementById('prefix').value);
  console.log(document.getElementById('prefix').value == 'CSCI')

  if (document.getElementById('prefix').value == 'CSCI') {
    document.getElementById('course').disabled = false;
  }
  else {
    document.getElementById('course').disabled = true;
    document.getElementById('course').value = 'default';
  }
}

// Get the modal
var modal = document.getElementById('detail');

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

function dropCourse() {
	modal.style.display="none";
	var row = document.getElementById("myRow");
	row.deleteCell(3);
	row.deleteCell(3);
	row.deleteCell(3);
	row.insertCell(3);
	row.insertCell(3);
	row.insertCell(3);
}