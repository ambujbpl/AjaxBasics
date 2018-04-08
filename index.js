// Vanilla javascript AJAX call
// "VanillaJS" means using plain JavaScript without any additional libraries like jQuery.

// All modern browsers (Chrome, Firefox, IE7+, Edge, Safari Opera) have a built-in XMLHttpRequest object.
// Syntax for creating an XMLHttpRequest object:

// state
// 0-Request not initialized
// 1-Request has been set up
// 2-Request has been send
// 3-Request is in Process
// 4-Request is completed
// State end
window.onload = function(){
  var http = new XMLHttpRequest();
  http.onreadystatechange = function(){
    if(http.readyState == 4 && http.status == 200){
      console.log("Response",JSON.parse(http.response));
    };
  };
  http.open("GET", "employee.json", true); //true means asynchronus and false means synchronous /Non- blocking
  // http.open("GET", "employee.json", false); // false means synchronous /blocking
  http.send();
  console.log("http request Done!");
};

// If ajax call is asynchronus so it not wait response and execute below console first and when response will get it will print http.response
// If call is synchronus then it will wait for response and after response get it will execute next line(console).
