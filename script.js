/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
   let developers = arr.filter(employee => employee.profession === "developer");
    let developerNames = developers.map(developer => developer.name);
    console.log("Developers (using map):", developerNames);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
   //Write your code here , just console.log
  console.log("Developers (using forEach):");
  arr.forEach(employee => {
      if (employee.profession === "developer") {
          console.log(employee);
      }
  });
  
}

function addData() {
  //Write your code here, just console.log
  let newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log("Added employee:", newEmployee);
}

function removeAdmin() {
  //Write your code here, just console.log
   let filteredEmployees = arr.filter(employee => employee.profession !== "admin");
  console.log("Employees after removing admins:", filteredEmployees);
}

function concatenateArray() {
  //Write your code here, just console.log
    let newArray = [
    { id: 5, name: "Akshay", age: "22", profession: "developer" },
    { id: 6, name: "Sharukh", age: "25", profession: "designer" },
    { id: 7, name: "Virat", age: "21", profession: "developer" }
];
const concatenatedArray = arr.concat(newArray);
console.log("Concatenated array:", concatenatedArray);

  
}
