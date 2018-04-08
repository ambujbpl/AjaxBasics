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
  async: true    //if async:false ==> means synchronus async:true ==> asynchronus
});
function employee(data){
    console.log("Employee Data>>>",data);
    $.ajax({
      type:"GET",
      url:"student.json",
      success: student,
      error: errorHandler
    });

};
function student(data){
  console.log("Student Data>>>",data);
  $.ajax({
    type:"GET",
    url:"invigilator.json",
    success:invigilator,
    error:errorHandler
  });
};
function invigilator(data){
  console.log("Invigilator Data>>>>",data);
};
