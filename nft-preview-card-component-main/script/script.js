var block = document.getElementById("image_blue");
var image = document.getElementById("viev");

image_blue.addEventListener("mouseover", showImage);
image_blue.addEventListener("mouseout", hideImage);

function showImage() {
  image.style.display = "block";
}

function hideImage() {
  image.style.display = "none";
}