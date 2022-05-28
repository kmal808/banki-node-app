const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')
const port = process.env.PORT || 8000

//API Banki Questions Data
// data variable reads the data json from the server, that way we dont have to read the file each time the user wants a question
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`);
// dataObj is the json value from the data variable above. Storing it in a variable allows us to use the info to send it back to the user
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////
    //this is the test api for banki questions. This is just to look at all the api data we use lines 34-37 dont really matter
    else if (page == '/questions') {
      res.writeHead(200, {'Content-type': 'application/json'});
      // res.write(data);
      res.end(data);
  } else if (page == '/quiz'){
    //This checks whether the user entered a question number or not by using the input on the index.html and the devData function in main.js. If the check comes back true, then the server takes the number value of that input, pulls whatever question is at that index in the array of objects in dataObj. If the check is false, it continues to the next conditional(line 46)
    if('question' in params){
    // res.writeHead(200, {'Content-Type': 'application/json'});

    //This sends the data pulled from the dataObj back to the fetch request so the devData function can use it.
    res.end(JSON.stringify(dataObj[`${params['question']}`]))
    //The below conditional checks if the user clicked a button to get a random question from a specific category.If it's true then it continues to line 49.
    } else if('category' in params){
      // res.writeHead(200, {'Content-Type': 'application/json'});
      //After it is determined the user clicked to get a random question for a specific category it filters through the dataObj by using the     filter(). It filters out all the questions that have to do with the category the user chose and then sends that back to the getRandom function in main.js
      res.end(JSON.stringify(dataObj.filter(x => x.category == params['category'] )))
    }
  }  
    
    //////////////////////////////////////////////////////////////////////////////////////////////////////
  
  // else if (page == '/api') {
  //   console.log(params)
  //   if('question' in params){
  //     if(params['question']== 'banki1'){
  //       res.writeHead(200, {'Content-Type': 'application/json'});
  //       const objToJson = {
  //         number: "1",
  //         question: "What is the mass of the sun?",
  //         answer: "A lot."
  //       }
  //       res.end(JSON.stringify(objToJson));
  //     }//student = leon
  //     else if(params['question'] == 'banki2'){
  //       res.writeHead(200, {'Content-Type': 'application/json'});
  //       const objToJson = {
  //         number: "2",
  //         question: "What is the diameter of the moon?",
  //         answer: "A lot also."
  //       }
  //       res.end(JSON.stringify(objToJson));
  //     }//student != leon
  //     else if(params['question'] == 'banki3'){
  //       res.writeHead(200, {'Content-Type': 'application/json'});
  //       const objToJson = {
  //         number: "3",
  //         question: "Question?",
  //         answer: "Answer3"
  //       }
  //       res.end(JSON.stringify(objToJson));
  //     }
  //     else{
  //       res.writeHead(200, {'Content-Type': 'application/json'});
  //       const objToJson = {
  //         number: "Not answered yet.",
  //         question: "Not answered yet.",
  //         answer: "Not answered yet."
  //       }
  //       res.end(JSON.stringify(objToJson));
  //     }
  //   }//student if
  // }//else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
