const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')
const port = process.env.PORT || 8000

const server = http.createServer((req, res) => {

  function pageSwitch(file, contentType){
    fs.readFile(file, function(err, data) {
      res.writeHead(200, {'Content-Type': contentType});
      res.write(data);
      res.end();
    });
  }

  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);

  switch (page){
  case '/':
   pageSwitch('index.html', 'text/html')
    break;

  case '/notes':
    pageSwitch('notes.html','text/html')
    break;

  case '/otherotherpage':
    pageSwitch('otherotherpage.html','text.html')
    break;

// case 'api':

// let questionNumber = 'Not Numbered Yet'
// let questionQuestion = 'Not Asked Yet'
// let questionAnswer = 'Not Answered Yet'
//  }
//     if('question' in params){
//       if(params['question']== 'banki1'){
//         res.writeHead(200, {'Content-Type': 'application/json'});
//          const objToJson = {
//         number: "1",
//         question: "What is the mass of the sun?",
//           answer: "A lot."
//         }
//         res.end(JSON.stringify(objToJson));
//      }
//      else if(params['question'] == 'banki2'){
//          res.writeHead(200, {'Content-Type': 'application/json'});
//          const objToJson = {
//            number: "2",
//            question: "What is the diameter of the moon?",
//            answer: "A lot also."
//          }
//          res.end(JSON.stringify(objToJson));
//        }
//     }
//      else if(params['question'] == 'banki3'){
//        res.writeHead(200, {'Content-Type': 'application/json'});
//        const objToJson = {
//          number: "3",
//          question: "Question?",
//          answer: "Answer3"
//        }
//        res.end(JSON.stringify(objToJson));
//      }
//      else{
//        res.writeHead(200, {'Content-Type': 'application/json'});
//        const objToJson = {
//          number: "Not answered yet.",
//          question: "Not answered yet.",
//          answer: "Not answered yet."
//        }
//        res.end(JSON.stringify(objToJson));
//      }
//    }//student if

// // }//else if

  case '/css/style.css':
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
      break;
    
  case '/js/main.js':
   pageSwitch ('js/main.js', 'text/javascript') 
      break;

      default:
  
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
      break;

  }
});

server.listen(8000);
