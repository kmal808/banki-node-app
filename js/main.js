//Note about data.json file question Object/////////
//Node questions are numbered 1-27 and take up indexes 0-26 in the array
//HTML questions are numbered 1-10 and take up indexes 27-36 in the array

// document.querySelector('#clickMe').addEventListener('click', makeReq)
document.querySelector('#clickMe').addEventListener('click', devData)

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
  const userCategory = document.querySelector("#userName").value;
  const res = await fetch(`/quiz?question=${userCategory}`)
  const data = await res.json()
  console.log(data);
  document.querySelector("#number").textContent = data.questionID

  document.querySelector("#question").textContent = data.question
  document.querySelector("#answer").textContent = ''
  setTimeout(() => {document.querySelector("#answer").textContent = data.answer}, 3000)
  // document.querySelector("#answer").textContent = data.answer
}