// Create a TypeWriter Function

const TypeWriter = function (textElement, words, wait = 3000) {
  this.textElement = textElement;
  this.words = words;
  this.wait = parseInt(wait, 10);
  this.txt = "";
  this.wordIndex = 0;
  this.isDeleting = false;
  this.type();
};
TypeWriter.prototype.type = function () {
  //Get the current word
  const currentWord = this.wordIndex % this.words.length;
  //Get full text
  const fullTxt = this.words[currentWord];
  //Check if the text is currently deleting
  if (this.isDeleting) {
    //Remove a character of course!
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    //If not then add one!
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }
  this.textElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  //Set initial typing speed
  let typingSpeed = 300;
  // Speed up when deleting
  if (this.isDeleting) {
    typingSpeed /= 2;
  }
  //If a word is completed
  if (!this.isDeleting && this.txt === fullTxt) {
    typingSpeed = this.wait;
    // Set isDeleting = true
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    // Stop deleting
    this.isDeleting = false;
    //Next word
    this.wordIndex++;
    //Set speed back
    typingSpeed = 300;
  }
  setTimeout(() => this.type(), typingSpeed);
};
//Initialize
document.addEventListener("DOMContentLoaded", init);

function init() {
  const textElement = document.querySelector(".dynamic-text");
  const words = JSON.parse(textElement.getAttribute("data-words"));
  const wait = textElement.getAttribute("data-wait");
  new TypeWriter(textElement, words, wait);
}
