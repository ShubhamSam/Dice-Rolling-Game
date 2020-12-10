var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "dice" + randomNumber1 + ".png";
var randomImage2 = "dice" + randomNumber2 + ".png";

var randomImageSourse1 = 'img/' + randomImage1; 
var randomImageSourse2 = 'img/' + randomImage2; 
// alert(randomImageSourse);


document.querySelectorAll('img')[0].setAttribute('src', randomImageSourse1);
document.querySelectorAll('img')[1].setAttribute('src', randomImageSourse2);

if (randomNumber1 > randomNumber2) {
    document.getElementsByTagName("h1")[0].innerHTML = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML = 'Player 2 Wins!';
} else{
    document.querySelector('h1').innerHTML = 'Draw!';
}