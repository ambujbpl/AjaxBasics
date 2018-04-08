// Native promise api used for ES6 javascript
function get(url){
  return new Promise(function(resolve, reject){
      var xhttp = new XMLHttpRequest();
      xhttp.open("GET",url,true);
      xhttp.onload = function(){
        if(xhttp.status == 200){
          resolve(JSON.parse(xhttp.response));
        }else{
          reject(xhttp.statusText);
        }
      };
      xhttp.onerror = function(){
        reject(xhttp.statusText);
      };
      xhttp.send();
  });
};

var promise = get("employee.json");
promise.then(function(emp){
  console.log("Employee>>",emp);
  return get("student.json");
}).then(function(stu){
  console.log("Student",stu);
  return get("invigilator.json")
}).then(function(inv){
  console.log("Invigilator",inv);
}).catch(function(error){
  console.log(error);
});
