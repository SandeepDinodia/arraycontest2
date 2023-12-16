const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  for (let i = 0; i < data.length; i++) {
    // console.log(data[i]);
    if (data[i].profession == "developer") {
      console.log(data[i]);
    }
  }
}

// 2. Add Data
  function addData() {
    let name = prompt("Enter name:");
    let age = prompt("Enter age:");
    let profession = prompt("Enter profession:");
  
    let newPerson = {
      name: name,
      age: age,
      profession: profession,
    };
    data.push(newPerson);
    console.log(newPerson);
  }


// 3. Remove Admins
function removeAdmin() {
Ans=data.filter((element)=>element.profession !== "admin");
console.log(Ans);
}

// 4. Concatenate Array
function concatenateArray() {
  let skills=["MS Word","Leadership","Comunication"];
  let moreSkill=["Coding","Teaching"];
  let newArr=skills.concat(moreSkill);
  console.log(newArr);
}

// 5. Average Age
function averageAge() {
let johnage=25;
let janeage=21;
let avgage=(johnage+janeage)/2;
console.log(avgage);
}

// 6. Age Check
function checkAgeAbove25() {
  let age=prompt("enter the age");
  if(age>25){
    console.log("Above 25")
  }
  else{
    console.log("Below 25");
  }
}

// 7. Unique Professions
function uniqueProfessions() {
  let uniqueProfessionsArr=[];
  data.forEach((element)=>{
    if (!uniqueProfessionsArr.includes(element.profession)){
      uniqueProfessionsArr.push(element.profession);
    }
  });
  console.log(uniqueProfessions);
}

// 8. Sort by Age
function sortByAge() {
  let diffrentAge=[23,11,27,17,15];
  diffrentAge.sort(function(a,b){
return a-b;
  });
  console.log(diffrentAge);
}

// 9. Update Profession
function updateJohnsProfession() {
data[0].profession="manager";
console.log(data[0]);
}

// 10. Profession Count
function getTotalProfessions() {
  let count=0;
  data.forEach((element)=>{
    if(element.profession=="developer"){
      count+=1;
    }
  });
  console.log(`We have ${count} developer in our system`);
}
