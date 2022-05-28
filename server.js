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

  function pageSwitch(page,contentType){
    fs.readFile(page, function(err, data) {
      res.writeHead(200, {'Content-Type': contentType});
      res.write(data);
      res.end();
    });
  }

  switch(page){
  case '/':
  pageSwitch('index.html','text/html' )
  break;

  case '/otherpage':
  pageSwitch('otherpage.html','text/html' )
  break;

  case '/quiz':
    res.writeHead(200, {'Content-Type': 'application/json'});
    const objToJson = {  number: dataObj[`${params['question']}`].questionID, 
    question: dataObj[`${params['question']}`].question,
    answer: dataObj[`${params['question']}`].answer
  }
  res.end(JSON.stringify(objToJson))
  
  break;

  case '/css/style.css':
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
    break;
  
  case '/js/main.js':
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
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

