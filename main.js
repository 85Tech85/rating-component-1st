
//Show rating selection with stars on click//

const twoStar = document.querySelector(".starTwo")
const threeStar = document.querySelector(".starThree")
const fourStar = document.querySelector(".starFour")
const fiveStar = document.querySelector(".starFive")

document.querySelector(".ratingOne").addEventListener ("click", showOneStar);

function showOneStar(){
  twoStar.classList.add("hiddenStar")
  threeStar.classList.add("hiddenStar")
  fourStar.classList.add("hiddenStar")
  fiveStar.classList.add("hiddenStar")
            
}

document.querySelector(".ratingTwo").addEventListener ("click", showTwoStars);

function showTwoStars(){
  twoStar.classList.remove("hiddenStar")
  threeStar.classList.add("hiddenStar")
  fourStar.classList.add("hiddenStar")
  fiveStar.classList.add("hiddenStar")
            
}

document.querySelector(".ratingThree").addEventListener ("click", showThreeStars);

function showThreeStars(){
  twoStar.classList.remove("hiddenStar")
  threeStar.classList.remove("hiddenStar")
  fourStar.classList.add("hiddenStar")
  fiveStar.classList.add("hiddenStar")
            
}

document.querySelector(".ratingFour").addEventListener ("click", showFourStars);

function showFourStars(){
  twoStar.classList.remove("hiddenStar")
  threeStar.classList.remove("hiddenStar")
  fourStar.classList.remove("hiddenStar")
  fiveStar.classList.add("hiddenStar")
            
}

document.querySelector(".ratingFive").addEventListener ("click", showFiveStars);

function showFiveStars(){
  twoStar.classList.remove("hiddenStar")
  threeStar.classList.remove("hiddenStar")
  fourStar.classList.remove("hiddenStar")
  fiveStar.classList.remove("hiddenStar")
            
}

//FLip card with click on submit//

document.querySelector(".submit").addEventListener ("click", flip);

function flip(){
  document.querySelector(".ratingContainer").classList.toggle("hidden")
  document.querySelector(".tyContainer").classList.toggle("hidden")
}

//Show rating on back of card//

const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")
const four = document.querySelector(".four")
const five = document.querySelector(".five")

document.querySelector(".ratingOne").addEventListener ("click", rateOne);

function rateOne(){
  one.classList.remove("hidden")
  two.classList.add("hidden")
  three.classList.add("hidden")
  four.classList.add("hidden")
  five.classList.add("hidden")
}

document.querySelector(".ratingTwo").addEventListener ("click", rateTwo);

function rateTwo(){
  one.classList.add("hidden")
  two.classList.remove("hidden")
  three.classList.add("hidden")
  four.classList.add("hidden")
  five.classList.add("hidden")
}

document.querySelector(".ratingThree").addEventListener ("click", rateThree);

function rateThree(){
  one.classList.add("hidden")
  two.classList.add("hidden")
  three.classList.remove("hidden")
  four.classList.add("hidden")
  five.classList.add("hidden")
}

document.querySelector(".ratingFour").addEventListener ("click", rateFour);

function rateFour(){
  one.classList.add("hidden")
  two.classList.add("hidden")
  three.classList.add("hidden")
  four.classList.remove("hidden")
  five.classList.add("hidden")
}

document.querySelector(".ratingFive").addEventListener ("click", rateFive);

function rateFive(){
  one.classList.add("hidden")
  two.classList.add("hidden")
  three.classList.add("hidden")
  four.classList.add("hidden")
  five.classList.remove("hidden")
}