//Note about data.json file question Object/////////
//Node questions are numbered 1-27 and take up indexes 0-26 in the array
//HTML questions are numbered 28- 37 and take up indexes 27-36 in the array

document.querySelector('#clickMe').addEventListener('click', devData)
// cats variable grabs all the buttons with the class of categories from the index.html and puts them into an array
const cats = document.querySelectorAll('.categories')

//here we take the cats array above and loop through it to add an event listener to each element(button) in the array.
cats.forEach(x => {
  x.addEventListener('click', getRandom)
})

// async function makeReq(){

//   const userName = document.querySelector("#userName").value;
//   const res = await fetch(`/api?student=${userName}`)
//   const data = await res.json()

//   console.log(data);
//   document.querySelector("#personName").textContent = data.name
//   document.querySelector("#personStatus").textContent = data.status
//   document.querySelector("#personOccupation").textContent = data.currentOccupation
// }

// async function makeReq(){

//   const userName = document.querySelector("#userName").value;
//   const res = await fetch(`/api?question=${userName}`)
//   const data = await res.json()

//   console.log(data);
//   document.querySelector("#number").textContent = data.number
//   document.querySelector("#question").textContent = data.question
//   document.querySelector("#answer").textContent = data.answer
// }




// class BANKI{
//  constructor ([number,question,answer]){
//   this.number = number
//   this.question = question
//   this.answer = answer  
//    }
// }

async function devData(){
  const userCategory = document.querySelector("#userName").value - 1;
  const res = await fetch(`/quiz?question=${userCategory}`)
  const data = await res.json()
  console.log(data);
  document.querySelector("#number").textContent = data.questionID
  document.querySelector("#category").textContent = data.category
  document.querySelector("#question").textContent = data.question
  document.querySelector("#answer").textContent = ''
  setTimeout(() => {document.querySelector("#answer").textContent = data.answer}, 3000)
}


//The getRandom function gets the value of the clicked button, the category chosen by the user, sends that in a fetch request to the server.
//After the server gets the request it sends the function back an array of objects, with each element only being from a specific category.
async function getRandom(e) {
  console.log(e.target.value)
  // the e.target.value pulls the value of the button clicked by the user. Each button was given a specific value that represented the button clicked. The Node.js button has a value of Node, etc. We then take that value and put it in a variable.
  const userCategory = e.target.value
  // We send a fetch request to the server with category as a parameter and the userCategory variable as the value. The server uses this to send us back questions with that specific category
  const res = await fetch(`/quiz?category=${userCategory}`)
  const data = await res.json()
  console.log(data);
  //This variable gives us a random number between 0 and the length of whatever array of questions the server send back to su.
  let randomIndex = Math.trunc(Math.random()*data.length)
  //Below we use the randomIndex variable to get a random question from the array we got from array of questions we received.
  // we then use the object for DOM manipulation.
  document.querySelector("#number").textContent = data[randomIndex].questionID
  document.querySelector("#category").textContent = data[randomIndex].category
  document.querySelector("#question").textContent = data[randomIndex].question
  document.querySelector("#answer").textContent = ''
  setTimeout(() => {document.querySelector("#answer").textContent = data[randomIndex].answer}, 3000)
}