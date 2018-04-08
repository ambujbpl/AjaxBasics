// JQuery AJAX call
$.get("employee.json", function(data){
  console.log(data);
});
console.log("http requet done");
// It is basically asynchronus call so in output below console execute first then it will print response.

// // or you can simply call like
// $.getJSON("employee.json", function(data){
//   console.log(data);
// });
// console.log("http requet done");
