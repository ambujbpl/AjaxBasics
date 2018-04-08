// Jquery Promisses
$.get("employee.json").then(function(emp){
  console.log("Employee",emp);
  return $.get("student.json");
}).then(function(stu){
  console.log("Student",stu);
  return $.get("invigilator.json");
}).then(function(inv){
  console.log("Invigilator",inv);
}).fail(function(error){
  console.log(error.responseText);
});
