// document.getElementById("demo").textContent = "hello";
// let print = (document.getElementById("demo").textContent = "hello");
// console.log(print);
// document.write();
// print = "i am tanawish";

// document.write("i ma tanawish");
// console.log(document.baseURI);
// console.log(document.body);
// console.log(document.cookie);
// console.log(document.doctype);
// console.log(document.documentElement);
// console.log(document.documentMode);
// console.log(document.documentURI);
// console.log(document.domain);
// console.log(document.scripts);
// console.log(document.URL);
// const x = document.querySelectorAll(".intro");
// console.log(x);
// document.write(Date());
// let showdate = (document.getElementById("demo2").innerHTML =
//   "Date : " + Date());
// console.log(showdate);
// function getvaluebyid(value) {
//   let getvalue = document.getElementById("text1").value;
//   console.log(getvalue);
//   document.getElementById("demovalue").textContent = getvalue;
// }
// start project practice

// color changer
/*
let allbutton = document.querySelectorAll(".button");
let body = document.querySelector("body");

allbutton.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "box1") {
      body.style.backgroundColor = "red";
    } else if (e.target.id === "box2") {
      body.style.backgroundColor = "black";
    } else if (e.target.id === "box3") {
      body.style.backgroundColor = "yellow";
    } else if (e.target.id === "box4") {
      body.style.backgroundColor = "green";
    }
  });
});

*/
// second project  BMI calculater
/*
let button = document.querySelector(".btn");
console.log(button);

button.addEventListener("click", function () {
  let height = document.querySelector(".height").value;
  let weight = document.querySelector(".weight").value;
  height = height / 100;
  let bmi = weight / (height * height);
  document.querySelector(".bmi");
  document.querySelector(".bmi").textContent = bmi.toFixed(2);
  console.log(bmi.toFixed(2));
});
*/
// 3 show time project

// let showtime = document.querySelector(".show");
// setInterval(function () {
//   let date = new Date();

//   showtime.innerHTML = date.toLocaleTimeString();
// }, 1000);
// setInterval(() => {
//   let date = new Date();
//   console.log(date.toLocaleTimeString());
// }, 1000);
// let random = Math.floor(Math.random() * 100 + 1);
// console.log(random);
/*
function outerFunction() {
  let outerVariable = "I am from outer function";

  function innerFunction() {
    console.log(outerVariable); // Can access outerVariable even though it's not defined within innerFunction
  }

  return innerFunction;
}

const closureExample = outerFunction(); // outerFunction returns innerFunction
closureExample(); // 'I am from outer function' is logged to the console
*/
// foor of loop
/*
let array = ["ali", "asad", "ayaz", "nabeel"];
for (const element of array) {
  // console.log(`${element}: ${array[element]}`);
  // console.log(`${element}:${element[array]}`);
  // console.log(`${key}: ${obj[]}`);
}
let name = "tanawish";
for (const element of name) {
  console.log(element);
}
*/
let keybord = document.querySelector(".keybor");
window.addEventListener("keydown", function (e) {
  console.log(e.key);
  console.log(e.code);
});
