const banki = [
  {
    category: "Node",
    questionID: 1,
    question: "What is Node.js? Where can you use it?",
    answer:
      "Node.js is an open-source, cross-platform JavaScript runtime environment and library to run web applications outside the client's browser. It is used to create server-side web applications. Node.js is perfect for data-intensive applications as it uses an asynchronous, event-driven model.",
  },
  {
    category: "Node",
    questionID: 2,
    question: "Why use Node.js?",
    answer: "Node.js makes building scalable network programs easy.",
  },
  {
    category: "Node",
    questionID: 3,
    question: "What are the features of Node.js?",
    answer:
      "Some features of Node.js include: Asynchronous and Event Driven, Very Fast, Single Threaded but Highly Scalable, and no buffering.",
  },
  {
    category: "Node",
    questionID: 4,
    question: "How do you update NPM to a new version in Node.js?",
    answer: "",
  },
  {
    category: "Node",
    questionID: 5,
    question: "Why is Node.js Single-threaded?",
    answer:
      "Node.js is single-threaded for async processing. By doing async processing on a single-thread under typical web loads, more performance and scalability can be achieved instead of the typical thread-based implementation.",
  },
  {
    category: "Node",
    questionID: 6,
    question: "Explain callback in Node.js.",
    answer:
      "A callback function is called after a given task. It allows other code to be run in the meantime and prevents any blocking.  Being an asynchronous platform, Node.js heavily relies on callback. All APIs of Node are written to support callbacks.",
  },
  {
    category: "Node",
    questionID: 7,
    question: "What is callback hell in Node.js?",
    answer:
      "Callback hell, also known as the pyramid of doom, is the result of intensively nested, unreadable, and unmanageable callbacks, which in turn makes the code harder to read and debug.",
  },
  {
    category: "Node",
    questionID: 8,
    question: "How do you prevent/fix callback Hell?",
    answer:
      "To prevent or fix callback hell, you should properly implement asynchronous logic(async/await).",
  },
  {
    category: "Node",
    questionID: 9,
    question: "Explain the role of REPL in Node.js.",
    answer:
      "REPL means Read-Eval-Print-Loop. It is a virtual environment that comes with Node.js. We can quickly test our JavaScript code in the Node.js REPL environment.",
  },
  {
    category: "Node",
    questionID: 10,
    question: "Name the types of API functions in Node.js.",
    answer:
      "There are two types of API functions in Node.js. Asynchronous(non-blocking functions) and Synchronous(blocking functions).",
  },
  {
    category: "Node",
    questionID: 11,
    question: "What are the functionalities of NPM in Node.js?",
    answer:
      "Online repositories for node.js pacages/modules which are searchable on search.nodejs.org. Also command line utility to install Node.js packages, do version management and dependecy management of Node.js packages.",
  },
  {
    category: "Node",
    questionID: 12,
    question: "What is the difference between Node.js and Ajax?",
    answer: "",
  },
  {
    category: "Node",
    questionID: 13,
    question:
      "What are ???streams??? in Node.js? Explain the different types of streams present in Node.js?",
    answer: "",
  },
  {
    category: "Node",
    questionID: 14,
    question: "Explain chaining in Node.js.",
    answer: "",
  },
  {
    category: "Node",
    questionID: 15,
    question: "What are Globals in Node.js?",
    answer:
      "Node.js global objects are global in nature and they are available in all modules. We do not need to include these objects in our application, rather we can use them directly. These objects are modules, functions, strings. and object itself. Some examples are: __filename, __dirname, setTimeout(cb,ms), and clearTimeout(t).",
  },
  {
    category: "Node",
    questionID: 16,
    question: "What is Event-driven programming?",
    answer:
      "An event-driven programming approach uses events to trigger various functions. An event can be anything, such as typing a key or clicking a mouse button. A call-back function is already registered with the element executes whenever an event is triggered.",
  },
  {
    category: "Node",
    questionID: 17,
    question: "What is Event loop in Node.js work? And How does it work?",
    answer:
      "Event loops handle asynchronous callbacks in Node.js. It is the foundation of the non-blocking input/output in Node.js, making it one of the most important environmental features.",
  },
  {
    category: "Node",
    questionID: 18,
    question: "What is the purpose of the module .Exports?",
    answer:
      "In Node.js, a module encapsulates all related codes into a single unit of code that can be parsed by moving all relevant functions into a single file. You may export a module with the module and export the function, which lets it be imported into another file with a needed keyword.",
  },
  {
    category: "Node",
    questionID: 19,
    question: "What is the difference between Asynchronous and Non-blocking?",
    answer:
      "Asynchronous literally means not synchronous. We are making HTTP requests which are asynchronous, means we are not waiting for the server response. We  continue with other block and respond to the server response when we received.The term Non-Blocking is widely used with IO. For example non-blocking read/write calls return with whatever they can do and expect caller to execute the call again. Read will wait until it has some data and put calling thread to sleep.",
  },
  {
    category: "Node",
    questionID: 20,
    question: "What is Tracing in Node.js?",
    answer:
      "Tracing provides a mechanism to collect tracing information generated by V8, Node core and userspace code in a log file. Tracing can be enabled by passing the --trace-events-enabled flag when starting a Node.js application.",
  },
  {
    category: "Node",
    questionID: 21,
    question: "How will you debug an application in Node.js?",
    answer:
      "Node.js includes a debugging utility called debugger. To enable it start the Node.js with the debug argument followed by the path to the script to debug. nserting the statement debugger; into the source code of a script will enable a breakpoint at that position in the code.",
  },
  {
    category: "Node",
    questionID: 22,
    question: "Difference between setImmediate() vs setTimeout()?",
    answer:
      "setImmediate() and setTimeout() are similar, but behave in different ways depending on when they are called. setImmediate() is designed to execute a script once the current poll (event loop) phase completes. setTimeout() schedules a script to be run after a minimum threshold in ms has elapsed.",
  },
  {
    category: "Node",
    questionID: 23,
    question: "What is process .nextTick()?",
    answer:
      "setImmediate() and setTimeout() are based on the event loop. But process.nextTick() is technically not part of the event loop. Instead, the nextTickQueue will be processed after the current operation completes, regardless of the current phase of the event loop. Thus, any time you call process.nextTick() in a given phase, all callbacks passed to process.nextTick() will be resolved before the event loop continues.",
  },
  {
    category: "Node",
    questionID: 24,
    question: "What is package.json? What is it used for?",
    answer:
      "The package.json file is the heart of a Node.js system. This file holds the metadata for a particular project. The package.json file is found in the root directory of any Node application or module",
  },
  {
    category: "Node",
    questionID: 25,
    question: "What is libuv?",
    answer:
      "libuv is a multi-platform support library with a focus on asynchronous I/O. It was primarily developed for use by Node.js, but it's also used by Luvit, Julia, pyuv, and others. When the node.js project began in 2009 as a JavaScript environment decoupled from the browser, it is using Google's V8 and Marc Lehmann's libev, node.js combined a model of I/O - evented - with a language that was well suited to the style of programming; due to the way it had been shaped by browsers. As node.js grew in popularity, it was important to make it work on Windows, but libev ran only on Unix. libuv was an abstraction around libev or IOCP depending on the platform, providing users an API based on libev. In the node-v0.9.0 version of libuv libev was removed.",
  },
  {
    category: "Node",
    questionID: 26,
    question: "What are some of the most popular modules of Node.js?",
    answer:
      "There are many most popular, most starred or most downloaded modules in Node.js. Some of them are express, async, browserify, socet.io, bower, gulp, and grunt.",
  },
  {
    category: "Node",
    questionID: 27,
    question: "What is EventEmitter in Node.js?",
    answer:
      "EventEmitter is a class that holds all the objects that can emit events. Whenever an object from the EventEmitter class throws an event, all attached functions are called upon synchronously.",
  },
  {
    category: "HTML",
    questionID: 28,
    question: "What does doctype do?",
    answer:
      "DOCTYPE is an abbreviation for Document Type. defines how documents of a certain type should be structured (i.e. a button can contain a span but not a div), whereas a DOCTYPE declares what DTD a document supposedly respects (i.e. this document respects the HTML DTD).For webpages, the DOCTYPE declaration is required. It is used to tell user agents what version of the HTML specifications your document respects. Once a user agent has recognized a correct DOCTYPE, it will trigger the no-quirks mode matching this DOCTYPE for reading the document. If a user agent doesn't recognize a correct DOCTYPE, it will trigger the quirks mode.The DOCTYPE declaration for the HTML5 standards is <!DOCTYPE html>.",
  },
  {
    category: "HTML",
    questionID: 29,
    question: "How do you serve a page with content in multiple languages?",
    answer:
      "When an HTTP request is made to a server, the requesting user agent usually sends information about language preferences, such as in the Accept-Language header. The server can then use this information to return a version of the document in the appropriate language if such an alternative is available. The returned HTML document should also declare the lang attribute in the <html> tag, such as <html lang={en}> </html>.",
  },
  {
    category: "HTML",
    questionID: 30,
    question:
      "What kind of things must you be wary of when design or developing for multilingual sites?",
    answer:
      "Use 'lang' attribute in your HTML, direct users to their native langue and allow them to change country/langue easily. Text in raster-based images(png, gif,jpg, etc) is not a scalable approach. Restrictive words/sentence length, some content can be longer when written in other languages. Be mindful of how colors are perceived across languages and cultures. Don't concatenate translated strings, it can break in other languages. Instead use temperate literals. Be mindful of language reading direction.",
  },
  {
    category: "HTML",
    questionID: 31,
    question:
      "What kind of things must you be wary of when design or developing for multilingual sites?",
    answer:
      "Although the use of data attributes isnt encouranged today, one perfectly valid use of data attributes, is to add a hook for end to end testing frameworks such as Selenium and Capybara without having to create a meaningless classes or ID attributes. The element needs a way to be found by a particular Selenium spec and something like data-selector='the-thing' is a valid way to do so without convoluting the semantic markup otherwise.",
  },
  {
    category: "HTML",
    questionID: 32,
    question:
      "Consider HTML5 as an open web platform. What are the building blocks of HTML5?",
    answer:
      "Semantics - Allowing you to describe more precisely what your content is. Connectivity - Allowing you to communicate with the server in new and innovative ways. Offline and storage - Allowing webpages to store data on the client-side locally and operate offline more efficiently.Multimedia - Making video and audio first-class citizens in the Open Web. 2D/3D graphics and effects - Allowing a much more diverse range of presentation options. Performance and integration - Providing greater speed optimization and better usage of computer hardware. Device access - Allowing for the usage of various input and output devices.",
  },
  {
    category: "HTML",
    questionID: 33,
    question:
      "Describe the difference between a cookie, sessionStorage and localStorage.",
    answer:
      "All the above-mentioned technologies are key-value storage mechanisms on the client side. They are only able to store values as strings. Cookies expire when it's manually set to do so. localstorage can last forever. sessisonStorage expires on tab close. Cookies are automatically sent to the server while local and sessionStorage are never sent to the server.Both local and sessionStorage are 5MB while cookies are only 4kb.",
  },
  {
    category: "HTML",
    questionID: 34,
    question:
      "Describe the difference between <script>, <script async> and <script defer>.",
    answer:
      "<script> HTML parsing is blocked and only resumes after script is executed. <script async> is fectched in parallel to HTML parsing and executed as soon as it is available(potentially before HTML parsing is complete). <script defer> script is fetched in parallel to HTML and executed when the page has finished parsing.",
  },
  {
    category: "HTML",
    questionID: 35,
    question:
      "Why is it generally a good idea to position CSS <link>s between <head></head> and JS <script>s just before </body>? Do you know any exceptions?",
    answer:
      "CSS <link>s are placed in the top for optimization to get data to the user faster. <script> tags block HTML parsing while they are being downloaded and executed which can slow down your page. Placing the scripts at the bottom will allow the HTML to be parsed and displayed to the user first. An exception for positioning of <script>s at the bottom is when your script contains document.write(), but these days it's not a good practice to use document.write().",
  },
  {
    category: "HTML",
    questionID: 36,
    question: "What is progressive rendering?",
    answer:
      "Progressive rendering is the name given to techniques used to improve the performance of a webpage (in particular, improve perceived load time) to render content for display as quickly as possible. Examples of such techniques are lazy loading of images, prioritizing visible content, and async html fragments.",
  },
  {
    category: "HTML",
    questionID: 37,
    question:
      "Why you would use a srcset attribute in an image tag? Explain the process the browser uses when evaluating the content of this attribute.",
    answer:
      "You would use the srcset attribute when you want to serve different images to users depending on their device display width - serve higher quality images to devices with retina display enhances the user experience while serving lower resolution images to low-end devices increase performance and decrease data wastage (because serving a larger image will not have any visible difference).",
  },
  {
    category: "JavaScript",
    questionID: 38,
    question: "Explain Event Delegation",
    answer:
      "The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them ??? we put a single handler on their common ancestor. In the handler we get event.target to see where the event actually happened and handle it.",
  },
  {
    category: "JavaScript",
    questionID: 39,
    question: "Explain how 'this' works in JavaScript",
    answer:
      "When a function is called as a method (looked up as a property and immediately called, as in object.method())???the binding called 'this' in its body automatically points at the object that it was called on.",
  },
  {
    category: "JavaScript",
    questionID: 40,
    question: "Explain how prototypal inheritance works",
    answer:
      " All JavaScript objects have a ???proto??? property (with the exception of objects created with __Object.create(null)__) , that is a reference to another object, which is called the object's 'prototype'. When a property is accessed on an object and if the property is not found on that object, the JavaScript engine looks at the object's __proto__, and the __proto__'s __proto__ and so on, until it finds the property defined on one of the __proto__s or until it reaches the end of the prototype chain.",
  },
  {
    category: "JavaScript",
    questionID: 41,
    question: "What do you think of AMD vs CommonJS?",
    answer:
      "Both are ways to implement a module system, which was not natively present in JavaScript until ES2015 came along. CommonJS is synchronous while AMD (Asynchronous Module Definition) is obviously asynchronous. CommonJS is designed with server-side development in mind while AMD, with its support for asynchronous loading of modules, is more intended for browsers.",
  },
  {
    category: "JavaScript",
    questionID: 42,
    question:
      "Explain why the following doesn't work as an IIFE: function foo(){ }();. What needs to be changed to properly make it an IIFE?",
    answer:
      "IIFE stands for Immediately Invoked Function Expressions. The JavaScript parser reads function foo(){ }(); as function foo(){ } and ();, where the former is a function declaration and the latter (a pair of parentheses) is an attempt at calling a function but there is no name specified, hence it throws Uncaught SyntaxError: Unexpected token ). It can be fixed by adding more parentheses: (function foo(){ })() and (function foo(){ }()). Statements that begin with function are considered to be function declarations; by wrapping this function within (), it becomes a function expression which can then be executed with the subsequent (). These functions are no longer exposed in the global scope.",
  },
  {
    category: "JavaScript",
    questionID: 43,
    question:
      "What's the difference between a variable that is: null, undefined or undeclared? How would you go about checking for any of these states?",
    answer:
      "Undeclared variables are created when you assign a value to an identifier that is not previously created using var, let or const. To check for them, wrap its usage in a try/catch block. A variable that is undefined is a variable that has been declared, but not assigned a value. To check for it, compare using the strict equality (===) operator or typeof which will give the 'undefined' string. A variable that is null will have been explicitly assigned to the null value. It represents no value and is different from undefined in the sense that it has been explicitly assigned. To check for null, simply compare using the strict equality operator.",
  },
  {
    category: "JavaScript",
    questionID: 44,
    question: "What is a closure, and how/why would you use one?",
    answer:
      "A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function???s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time. Among other things, closures are commonly used to give objects data privacy.",
  },
  {
    category: "JavaScript",
    questionID: 45,
    question:
      "Can you describe the main difference between a .forEach loop and a .map() loop and why you would pick one versus the other?",
    answer:
      "A forEach Iterates through the elements in an array and executes a callback for each element. A map iterates through the elements in an array and 'maps' each element to a new element by calling the function on each element, creating a new array as a result . The main difference between .forEach and .map() is that .map() returns a new array. If you need the result, but do not wish to mutate the original array, .map() is the clear choice. If you simply need to iterate over an array, forEach is a better choice",
  },
  {
    category: "JavaScript",
    questionID: 46,
    question: "What's a typical use case for anonymous functions?",
    answer:
      "They can be used as a callback that is used once and does not need to be used anywhere else. The code will seem more self-contained and readable when handlers are defined right inside the code calling them, rather than having to search elsewhere to find the function body.",
  },
  {
    category: "JavaScript",
    questionID: 47,
    question: "What's the difference between host objects and native objects?",
    answer:
      "Native objects are objects that are part of the JavaScript language defined by the ECMAScript specification, like String, Math, RegExp, Object, Function, etc.Host objects are provided by the runtime environment (browser or Node), such as window, XMLHTTPRequest, etc.",
  },
  {
    category: "JavaScript",
    questionID: 48,
    question: "What's the difference between .call and .apply?",
    answer:
      "Both .call and .apply are used to invoke functions and the first parameter will be used as the value of this within the function. However, .call takes in comma-separated arguments as the next arguments while .apply takes in an array of arguments as the next argument.",
  },
  {
    category: "JavaScript",
    questionID: 49,
    question: "Explain Function.prototype.bind.",
    answer:
      "The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called. It's most useful for binding the value of this in methods of classes that you want to pass into other functions. This is frequently done in React components.",
  },
  {
    category: "JavaScript",
    questionID: 50,
    question: "When would you use document.write()?",
    answer:
      "document.write() writes a string of text to a document stream opened by document.open(). When document.write() is executed after the page has loaded, it will call document.open which clears the whole document (<head> and <body> removed!) and replaces the contents with the given parameter value. Probably as a means to completely overwrite dead or disused code.",
  },
  {
    category: "JavaScript",
    questionID: 51,
    question:
      "What's the difference between feature detection, feature inference, and using the UA string?",
    answer:
      "Feature detection involves working out whether a browser supports a certain block of code, and running different code depending on whether it does (or doesn't), so that the browser can always provide a working experience rather crashing/erroring in some browsers.Feature inference checks for a feature just like feature detection, but uses another function because it assumes it will also exist, but is not really recommended. Feature detection is more foolproof. UA String is a browser-reported string that allows the network protocol peers to identify the application type, operating system, software vendor or software version of the requesting software user agent.",
  },
  {
    category: "JavaScript",
    questionID: 52,
    question: "Explain Ajax in as much detail as possible.",
    answer:
      "Ajax (asynchronous JavaScript and XML) is a set of web development techniques using many web technologies on the client side to create asynchronous web applications. With Ajax, web applications can send data to and retrieve from a server asynchronously (in the background) without interfering with the display and behavior of the existing page. By decoupling the data interchange layer from the presentation layer, Ajax allows for web pages, and by extension web applications, to change content dynamically without the need to reload the entire page. In practice, modern implementations commonly use JSON instead of XML, due to the advantages of JSON being native to JavaScript.",
  },
  {
    category: "JavaScript",
    questionID: 53,
    question: "What are the advantages and disadvantages of using Ajax?",
    answer:
      "Better interactivity, New content from the server can be changed dynamically without the need to reload the entire page, Reduced connections to the server since scripts and stylesheets only have to be requested once, and State can be maintained on a page. JavaScript variables and DOM state will persist because the main container page was not reloaded. Basically most of the advantages of an SPA. For disadvantages, Dynamic webpages are harder to bookmark, it does not work if JavaScript has been disabled in the browser, Some webcrawlers do not execute JavaScript and would not see content that has been loaded by JavaScript, Webpages using Ajax to fetch data will likely have to combine the fetched remote data with client-side templates to update the DOM. For this to happen, JavaScript will have to be parsed and executed on the browser, and low-end mobile devices might struggle with this. Basically most of the disadvantages of an SPA. ",
  },
  {
    category: "JavaScript",
    questionID: 54,
    question: "Explain how JSONP works (and how it's not really Ajax).",
    answer:
      "JSONP (JSON with Padding) is a method commonly used to bypass the cross-domain policies in web browsers because Ajax requests from the current page to a cross-origin domain is not allowed. JSONP works by making a request to a cross-origin domain via a <script> tag and usually with a callback query parameter.",
  },
  {
    category: "JavaScript",
    questionID: 55,
    question: "Describe event bubbling.",
    answer:
      "When an event triggers on a DOM element, it will attempt to handle the event if there is a listener attached, then the event is bubbled up to its parent and the same thing happens. This bubbling occurs up the element's ancestors all the way to the document. Event bubbling is the mechanism behind event delegation.",
  },
];

module.exports = banki;
