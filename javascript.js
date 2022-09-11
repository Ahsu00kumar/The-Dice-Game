// 1st dice 

var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomimage = "dice" + randomNumber + ".jpg";
var imageSrc = "dice-image/" + randomimage;
var part1 = document.querySelectorAll("img")[0];
part1.setAttribute("src", imageSrc);


// 2nd dice

var imageSrc2 = "dice-image1/" + randomimage;
document.querySelectorAll("img")[1].setAttribute("src", imageSrc2);

// click and reload the page

var reloadbtn = document.querySelector('#reload');
function reload() {
    reload = loaction.reload();



}
reloadButton.addEventListener("click", reload);


