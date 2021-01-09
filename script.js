function hideB2() {
  $('#Block2').fadeOut();
}

function showB2() {
  $('#Block2').fadeIn(2000);
}

function sendMessage() {
  alert("We will contact with you soon!:)");
}

function closeModal() {
  var modal = document.getElementById("ModalWindow");
  modal.style.display="none";
  var image = document.querySelector("#ModalWindow img");
  image.remove(); 
}

function openModal(url) {
  var image = document.createElement("img");
  image.setAttribute("src", url);
  var elem = document.getElementById("ModalWindow");
  elem.appendChild(image);
  elem.style.display="block"; 
}