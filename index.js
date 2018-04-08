var employee = [{
    "name": "Ambuj Dubey"
  },
  {
    "name": "Akash Thakur"
  },
  {
    "name": "Ajay Mina"
  },
  {
    "name": "Anirudhra Tiwari"
  },
  {
    "name": "Avinash Verma"
  },
];
var fruits = ["Apple", "Banana", "Blackberry"];
employee.forEach(function(data) {
  console.log(data);
});
fruits.forEach(myfruit);
console.log(employee);

function myfruit(x) {
  console.log(x);
}
console.log("Everything Done!");
// Note-----for each is synchronus javascript
