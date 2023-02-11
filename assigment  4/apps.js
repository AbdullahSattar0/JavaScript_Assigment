//chap#09-11


//Q-1
/*
var city = prompt("Enter the city name");
if (city == "karachi") {
   alert("welcome to the city of light");
}
*/

//Q-2
/*
var gender = prompt("Enter your gender");
if (gender == "male") {
   alert("Good morning sir.")
}
if (gender == "female") {
   alert("Good morning ma'am.")
}
*/


//Q-3
/*
var color = prompt("please enter traffic signal color");
if (color == "red") {
   alert("must stop")
}
if (color == "green") {
   alert("move on")
}
if (color == "yellow") {
   alert("ready to move")
}
*/

//Q-4
/*
var fuel = prompt("please enter remaining amount of fuel" , "0.25 litres");
if (fuel < "0.25 litres") {
   alert("Please refill the fuel in your car")
}
*/

//Q-5
//a.
/*
var a =4;
if (++a ===5){
alert("given condition for variable a is true");
}
*/

//b.
/*
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
*/

//c.
/*
var c =12;
if (c++ ===13){
alert("condition is true");
}
if (c ===13){
alert("condition 2 is true"):
}
if (++c < 14){
alert("condition 3 is true");
}
if(c ===14){
alert("condition 4 is true");
}
*/

//d.
/*
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost ===laborCost + materialCost){
  alert("The cost equals");
}
*/
//e.
/*
if("car" < "cat"){
alert("car is smaller than cat");
}
*/
//f.
/*
if (true){
alert("True");
}
if (false){
alert("False");
}
*/

//Q-6
/*
var totalMark = prompt("enter here total mark");
var obtainMark = prompt(" enter here obtain mark")
var percentage = obtainMark / totalMark *100

document.write("Mark Sheet" ,"<br>");
document.write("total mark :" + totalMark ,"<br>");
document.write("obtain mark :" + obtainMark ,"<br>");
document.write("Percentage :" + percentage  +"%" ,"<br>");

if (percentage >= 80) {
  document.write("Grade : A" ,"<br>");
  document.write("Remarks : Excellent","<br>");
}
else if (percentage >= 70) {
  document.write("Grade : B" ,"<br>");
  document.write("Remarks : Good","<br>");
}
else if (percentage >= 60) {
  document.write("Grade : B" ,"<br>");
  document.write("Remarks : You need to improve","<br>");
}
else
{
document.write("Grade : fail" ,"<br>");
document.write("Remarks : Sorry","<br>");
}
*/
//Q-7
/*
var num = 4;
guessNum = prompt("guess the secret number");
if (num == guessNum) {
   alert("Bingo! Correct answer");
}
else
{
   alert("Close enough to the correct answer")
}
*/

//Q-8
/*
var num = +prompt ("Enter any number");
if (num%3 === 0){
document.write("Number is divisble by 3");
}
else {
document.write("Number is not divisble by 3")
}
*/



//Q-9
/*
var n;
n = prompt("Enter any number");
if(n%2==0){
alert(n+" is even");
}
else
{
alert(n+" is odd");
}
*/

//Q-10
/*
var temp = +prompt("enter temperature here");
if (temp > 40) {
   document.write("It is too hot outside.")
}
else if (temp > 30) {
   document.write("The Weather today is Normal.")
}
else if (temp > 20) {
   document.write("Today's Weather is cool.")
}
else
{
   document.write("OMG! Today's weather is so Cool.")
}
*/

//Q-11
/*
var num1 = +prompt("first number");
var operation = prompt("operation");
var num2 = +prompt ("second number");
var results;
if (operation == "+") {
  results = num1 + num2;
}
else if (operation == "-") {
  results = num1 - num2;
}
else if (operation == "*") {
  results = num1 * num2;
}
else if (operation == "/") {
  results = num1 / num2;
}
else
{
  document.write("not a number");
}
document.write("result is " + results);
*/



//chap#12-13


//Q-01
/*
var x = prompt ("enter name");
var y=x.toUpperCase();
if (x==y) {
alert("uppercase");
}

else{
alert("lowercase")
}
*/


//Q-2
/*
var a = +prompt("enter a integer");
var b = +prompt("enter a integer");

  if (a > 0 && b > 0 && a > b) {
    document.write("The larger number is " + a );
  } else if (a > 0 && b > 0 && a < b) {
    document.write("The larger number is " + b);
  } else if (a === b && a > 0 && b > 0) {
    document.write("Both numbers are equal!")
  } else {
      document.write("Please add an integer!");
  }
*/


//Q-3
/*
var num = +prompt("enter a number");
if (num > 0) {
  alert("the number is positive");
}
else if (num < 0) {
  alert(`the number is negative`);
} 
else {
   alert(`the number is zero`);
}
*/


//Q-4
/*
var vowel = prompt("enter an alphabet");
if (vowel == "a" || vowel == "e" || vowel == "i"|| vowel == "o" || vowel == "u") {
  alert("True");
}
else {
   alert(`false`);
}
*/

//Q-5
/*
var pasWrd = prompt("enter a password");
var pasWrd2 = prompt("enter a password again");
if (pasWrd == pasWrd2) {
   alert(`correct`);
}
else{
  alert(`incorrect`);
}
*/

//Q-6
/*
var greeting;
var hour= 13;
if (hour < 18) {
greeting = "Good day";
  }
else{
greeting = "Good evening";
}
document.write(greeting);
*/


//Q-7
/*
var time = prompt("Enter time in 24-hour clock format (e.g., 1900 for 7pm)");

if (time >= 0000 && time < 1200) {
  document.write("Good morning!");
} else if (time >= 1200 && time < 1700) {
  document.write("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
  document.write("Good evening!");
} else if (time >= 2100 && time <= 2359) {
  document.write("Good night!");
} else {
  document.write("Invalid time entered.");
}
*/
