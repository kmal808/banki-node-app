const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

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
    //this is the test api for banki questions. This is just to look at all the api data we use
    else if (page == '/questions') {
      res.writeHead(200, {'Content-type': 'application/json'});
      // res.write(data);
      res.end(data);
  } else if (page == '/quiz'){
    if('question' in params){
    res.writeHead(200, {'Content-Type': 'application/json'});
    // console.log(params)
    // console.log(('question' in params))
    // console.log(params['question'])
    const objToJson = { // This varibale takes the user's number from the input and looks in the dataObj from earlier to return that value back to the user
      number: dataObj[`${params['question']}`].questionID, 
      question: dataObj[`${params['question']}`].question,
      answer: dataObj[`${params['question']}`].answer
    }
    res.end(JSON.stringify(objToJson))
    }
    
    //////////////////////////////////////////////////////////////////////////////////////////////////////
  }
  else if (page == '/api') {
    console.log(params)
    if('question' in params){
      if(params['question']== 'banki1'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          number: "1",
          question: "What is the mass of the sun?",
          answer: "A lot."
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else if(params['question'] == 'banki2'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          number: "2",
          question: "What is the diameter of the moon?",
          answer: "A lot also."
        }
        res.end(JSON.stringify(objToJson));
      }//student != leon
      else if(params['question'] == 'banki3'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          number: "3",
          question: "Question?",
          answer: "Answer3"
        }
        res.end(JSON.stringify(objToJson));
      }
      else{
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          number: "Not answered yet.",
          question: "Not answered yet.",
          answer: "Not answered yet."
        }
        res.end(JSON.stringify(objToJson));
      }
    }//student if
  }//else if
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
