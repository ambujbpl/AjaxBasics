// JQuery AJAX call
function errorHandler(jqXHR, textStatus, error){
  console.log(error);
};
$.ajax({
  type:"GET",
  url:"employee.json",
  success: employee,
  error: errorHandler,
  cache: false,
  async: false    //if async:false ==> means synchronus async:true ==> asynchronus
});
function employee(data){
  console.log(data);
};
console.log("http request done!");
