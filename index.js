// Get ajaxHandler
$.when(Gethandler("employee.json")).done(function(res) {
  console.log("Response==>>>",res);
});
console.log("http request done!");
