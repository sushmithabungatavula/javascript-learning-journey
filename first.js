//console.log("sushmitha bunga");
//console.log("my first js")
nlame="sushmitha";
uage="24"
x=null;
$y=undefined; 
is_follow=false
console.log(is_follow);
console.log(x);

var fname=("s");
console.log(fname);

let name=("sush");
name="sushmiiii"
console.log(name);

const age="25"
console.log(age);
{
let age="25"
typeof age
}
isFollow=true;
let u;

//object
const student = {
    name:"sush",
    age:20,
    cgpa:3.7,
    IsFinal: true
};
//change values in object
student["name"]="sushmitha bungatavula";
student.age=student.age+1;
console.log(student.age)
console.log(student["name"])

const product={
    name:"ball pen",
    rating:4,
    offer:5,
    price:270
}
console.log(product)

const profile={
    username:"sush",
    isfollow:true,
    posts:195,
    followers:568000,
    following:4,
    work:"entrepreneur",
    bio: "student"
} 
console.log(profile)
console.log(typeof profile["bio"]
)
//operators or contitional statements

//arthemetic operators +,-,*,/
let a=7;
let b=2;
console.log("a=",a,"&b=",b)
console.log("a+b=",a+b)
console.log("a-b=",a-b)
console.log("a*b=",a*b)
console.log("a/b=",a/b)
//modulus
console.log("a%b=",a%b)//remainder
//exponentiation
console.log("a**b=",a**b)
//unary operators[ increment++,decrement--]
console.log("a++=",a++)
console.log("b--=",b--)
//a++ first implement then increase post increment
//++a pre increment increase tehn impelment
console.log("a++=",++a)
console.log("--b=",--b)

//assignment operators[=,+=,-=,*=,**=,%=]
a-=2//a=a-2
console.log("a=",a)
b+=2 //b=b+2
console.log("b=",b)

//comparison operators [==, !=,<=,>=,>,<, equalto & type ===, notequalto & type !==]

let d=8;
let c=9;
console.log("8==9",d!=c)
//compare datatype too stricter
let ey=9;
let fu="9";
console.log("ey==fu",ey!==fu)

//logical operators[ logical and &&, logical or ||, logical not !]

let e=6;
let f=5;

let cond1= e>f;
let cond2= e===0;

console.log("cond1 && cond2",cond1 && cond2);
console.log("cond1 || cond2",cond1|| cond2);
 
console.log("!(6<5)=",!(e===6));

//conditional statements

//if statement

// if(condition){
//     do this;
// }else {
//     do this;
// }

//if statement
let voterage=5;

if(voterage>=18){
    console.log("can vote")
}
if(voterage<18){
    console.log("connot vote")
}
//if-else
let mode="dark";
let color;
if (mode==="dark"){
    color="black";
}
else{
    color="white";
}
console.log(color);

let num=9;

if (num%2===0){
    console.log("even");
}else{console.log(num,"is odd");
}

//else-if statement

let votersage=95;

if(votersage < 18){
    console.log("junior cannot vote")
}
else if(votersage>60){
    console.log("connot vote senior")
}
else{
    console.log("ok can vote ")
}

//ternary operator condition ? true output:false output asking condition is it true or false

let myage=25;
let res= age>=18 ? "adult" : "not adult"; 
console.log(res)
// age>=18 ? console.log("adult"):console.log("not adult")


//switch statement

// switch(expression) {
//     case x:
//     // code block
//     break;
//     case y:
//     // code block
//     break;
//     default:
//      // code block
// }

// alert, prompt these are to give msgs alert one time popup but prompt can take input

//alert("hello sush!");

// let namee= prompt("hello sush!");// tempary thing to take iput from user
// console.log(namee)

// let number=prompt("enter the number");

// if (number%5===0){
//     console.log("yes")
// } else{
//     console.log("no")89
// }
//let score=prompt("enter your score");
let score=90;
let grade;

if (score >=90 && score <=100){
    grade="A";
} else if (score <=89 && score >=70){
    grade="B";
} else if (score >= 60 && score <=69){
    grade="C";
} else if (score >=50 && score <=59){
    grade="D";
} else 
grade="F";

console.log("your grade is:", grade)

//loops used to execute a piece of code again and again

//for loop

for (i=1;i<=7;i++){
    console.log("sushmitha");
}

for (let name=1;name<=8;name++){
    console.log("name is sush")
}

//while loop ---- checks the condition first then excutes some work

// while(condition){
//     do this
// }

//
let count=1;
while(count<=7){
    console.log("sush")
    count++;
}

//do while loop ------ executes at least one time before checking the condition 

// do{
//     do this;
// } while(condition);

let j=1;
do {
    console.log("i=",j);
    j++;
} while(j<=9);


//for -of loop ------ on sone specila datastyepes-- like strings and arrays-- to iterate through characters in strings 

// for (let val of str)
//{do some work}

let str="sushu";
let size=0;

for (let val of str){
    console.log("val=",val)
    size++;
    //console.log(size);
}
console.log("sixe of str is: ",size);

//for - in loop ---- for arrays and objects
//--- this loop retruns keys of an object  can access key value pairs

//for(let var in obj)
//{doo work};

let mystudent={
    myname:"sush",
    age:26,
    cgpa:10,
    isPass:true,
};

for (let key in mystudent){
    console.log("key=",key,"  value is=",mystudent[key]);
}
//retruns keyys
for (let i in mystudent){
    console.log(i)
}


//practice

// for (let num=0;num<=100;num++){
//     if (num%2!==0)
//         console.log("num is: ", num)
// }

let myi=0
while (myi<=100){
    if (myi%2===0){
        console.log("num is: ", myi);
    }
    myi++;
}

// game:
let gameNum=7;
let userNumber =7// prompt("guess the game number:");

while(userNumber!=gameNum){
    userNumber= prompt("you entered worng number, guess again")
}
console.log("congrats, correct answer!!!");

//strings

let mystr='sush';
let mystrrr="sushu";

//string length 
console.log(mystrrr.length)

//string indices--- access char in string
console.log(mystr[3])
console.log(mystrrr[4])

//templete literals
//string interpolation it is --- create strings by doing substitution of place holders
//`string text${expresstion}continue string text`

let speacialStr=`this is a templete literal`
console.log(speacialStr);

//here example
let obj={
    item:"pen",
    price:10,
};

console.log("the cost of this",obj.item,"is",obj.price,"rupees");
// this can be written as like this
console.log(`the cost of this ${obj.item} is ${obj.price} rupees`);

console.log(`the cost of this ${1+2} rupees`);

//escape character ---- \n next line-- \t--- tab space
console.log(`the cost of this \n${1+2}\trupees`);

//---string methods---- built in functions to manipulate strings
// --- it doest change the orginal string it creates new str with new val
//--- AS STRINGS ARE IMMUTABLE

//str.toUpperCase() str.toLowerCase()
let strrr="Sushuu     ";
let my="self"
let upper=strrr.toUpperCase();
let lower=strrr.toLowerCase();
console.log(upper,lower);

// str.trim()--- removes the spaces start and end

let trimm=strrr.trim();
console.log(trimm);
console.log(strrr.indexOf("u"))
console.log(strrr.slice(2,-1))
console.log(strrr.substring(0,3))
console.log(strrr.replace("u","uu"))
console.log(strrr.repeat(7))
console.log(strrr.charAt(3))
console.log(strrr.split(""))
console.log(strrr.concat(my))

//practice
let fullName="sushu"; //prompt("enter your full name");

// let userName= "@"+fullName + fullName.length;

//---using templete laterals
let userName=`@${fullName}${fullName.length}`;
console.log(userName);
//concat:
// let userName= "@"+fullName.concat(fullName.length) 
// console.log(userName);

//---ARRAYS----- Collection of arrays-- linear all data dytes but preffered same datatype

let marks=[89,78,56,45,34]
console.log(marks);

//array is itself an object data type
let movies=["thor","hulk","dhoni","hello"];
console.log(movies)

//array indices
console.log(marks[2]=88,marks);
console.log(movies[1])


// --- iteration in arrays--- looops in array

//--for loop--

for (let idx = 0;idx < movies.length;idx++){
    console.log(movies[idx]);
}
for (let i of marks){
    console.log(i);
}

let studentMarks=[85,97,44,37,76,60];
let sum=0
let avg=0

for (let mark = 0;mark <  studentMarks.length;mark++){
    sum+=studentMarks[mark]
    avg= sum/studentMarks.length
}
console.log(avg)

for (let mark of studentMarks){
    sum+=mark;
    avg= sum/studentMarks.length;
}
console.log(avg);

// [item]*10/100

let items=[250,645,300,900,50]
for (let item of items){
    let newitem = item-(item*10/100);
    console.log(newitem);
}
//use for loop to track index 
// Use normal for loop when modifying array values
for (let item =0; item<items.length;item++){
     items[item] = items[item]-(items[item]*10/100);
} console.log(items);
//for...of → best for reading values
//for loop → best for changing array elements


///-- array methods-- 2 types change an array, or return new array

items.push(89);
console.log(items);
console.log(items.pop(89));
console.log(items);
console.log(items.toString());
console.log(items.concat(movies));
items.unshift(90);
console.log(items);
items.shift(90);
console.log(items);
console.log(movies.slice(1,3));//do not change orginal array
console.log(movies.reverse());
//splice --- change orginal array(add,remove,delete)
//-- .splice(start, deleteCount, item1, item2 …itemN) 
console.log(movies.splice(0,2,"oyy"));
console.log(movies);
//add
console.log(movies.splice(2,0,"shiva"));
console.log(movies);
console.log(movies.splice(0,0,"rrr"));
console.log(movies);

let companies=["bloomberg","micro","uber","google","ibm","netflix"]
console.log(companies);
//a
companies.shift();
console.log(companies);
companies.splice(1,1,"Ola");
console.log(companies);
companies.push("amazon");
console.log(companies);

console.log(Array.isArray(movies));
console.log(Array.from("rrr"));

//----Functions--- the block of code that does atask and can ve invoked when needed

//-- funtion definition-- function func name(param 1,...){// do some work }
//function call functionName();

function sushu(){
    console.log("sushu");
}
sushu (); //peice of code that needsto be repeated -- helps from redundancy

function sushu(msg){
    //parameter--iput
    console.log(msg);
}
sushu ("i me sushu"); //argument 

function mysum(a,b){//a,b are inputs
    //fun parameters are local variables--have block scope of function
    s=a+b;
    return s
}
let val=mysum(1,2);
console.log(val);

//-- arrow functions
// const functionname=(a,b)=>{
//     s=a+b;
//     return s
// }

// const sumul=(a,b)=>{
//     console.log(a*b);
// };console.log(sumul); //returns function
// sumul(3,4);


const sumul=(a,b)=>{
    return a*b;
 } //returns function
console.log(sumul(3,4));

//--single line code
const print=()=> console.log("hello");


//--practice

const myvowels=(str)=>{
    let count=0;
    for (let i of str){
        if (i=="a"||i=="e"||i=="i"||i=="o"||i=="u")
        {
            count+=1;
        }
    }
    return count

};
console.log(myvowels("hellooohyaeiou"));


//----- forEach loop in arrays---

// array.forEach(callback function)
//-- callback function: function 
//--- a callback is a funtion passed as an argument to another function

let arr = [1,7, 8, 9];

// arr.forEach(function valuess (val) {
//     console.log(val);
// });

arr.forEach((val)=> {
    console.log(val+9);
});

let strrrr=["a","b","c"];
strrrr.forEach((val,idx,arr)=>{//can have val,index,array itself
    console.log(val.toUpperCase(),idx,arr);
}
)
//--- higher order function -- uses any other funcation as parameter or returns any function

let myarr=[1,2,3,4];
myarr.forEach((val)=>{
    console.log(val**2);
});

let myar=[1,2,3,4];
let calval=(val)=>{
    console.log(val**2);
};

myarr.forEach(calval);


//---arr.map---method-- simillar to forEach .. 
// map rerurns new array with results of some operation. the value its callback returns are used to form new array

// -- arr.map(callbackfunx(value,index,array){})

let newarr=myarr.map((calval)=>{// return new array 
    return calval*7; 
});console.log(newarr);

//----arr.filter method
//---- creates a new array of elements that give true for a condition/filter
// ---- let newarr= arr.filter((val){--conditions thats true })


let susharr=[1,2,3,4];

let evenval=susharr.filter((val)=>{
    return val % 2===0;
}); console.log(evenval);

//---- reduce method---

// ----performs some operations and reduces the array to give a single value. it returns that single value

let output=susharr.reduce((res,val)=>{
    return res+val;
}); console.log(output);

let large=susharr.reduce((prev,val)=>{
    return prev>val? prev:val;
}); console.log(large);

marks=[79,90,89,78,95,45,96];

let highmarks=marks.filter((val)=>{
    return val>=90;
}); console.log(highmarks);


let n=[1] //prompt("enter a number");
let suarr=[];

for (let i=1;i<=n;i++){
    suarr[i-1]=i;
}console.log(suarr);

let result=suarr.reduce((sum,curr)=>{
    return sum+curr;
});console.log(result);

let producct=suarr.reduce((sum,curr)=>{
    return sum*curr;
});console.log(producct);

//-----window object
// ---its a browsers object automaticalyy created
// --- its a global with lots of properties and methods
console.log(result); //can rewrite as 
window.console.log(result);

//---------DOM--------

// DOCUMENT OBJECT MODEL--- when a page is loaded the browser create a DOM of the page

// window.documet will get all the code
// if i want to see all properties console.dir(document)
// console.dir-- will print the properties or methods

console.dir(window.document);

console.dir(document.body);
console.log(document.body.childNodes);
//console.log(document.body.style.background="purple");
// -- to make dynamic changes--

//--- DOM MANIPULATION--- access elememts

// ---using their id ---- as its unique item 

// let para= document.getElementById("myPara");
// console.dir(para);


// ---- slecting with class-- returns html collection--similar to array

let pras= document.getElementsByClassName("myPara-class");
console.dir(pras);
console.log(pras);

//---selecting using tagname---
let mypras= document.getElementsByTagName("p");
console.dir(mypras);
console.log(mypras);

//---- query selector---
// document.querySelector("myid/myclass/tag")--- this will return first Element
// document.querySelectorAll("myid/myclass/tag")--- this will retrun nodelist

let ras= document.querySelectorAll("p");//all elements
console.dir(ras);
let rass=document.querySelector("#myPara");//first element
console.dir(rass);
//  #- to get id, .classanme to get class

// // --- DOM manipulation properties---

// // --tageName: to print the tag name of an element nodes


// let sas= document.querySelector("button");//all elements

// console.log(sas.tagName);

// // --innertext--- it will return the text content and its content
// let li= document.querySelector("li");
// let div= document.querySelector("div");
// console.log(div.innerText);
// // --innerhtml--- returns plain text or html contents in the element
// console.log(div.innerHTML);
// // we can also manipuloate the original data here like changed whole content in div 
// // console.log(div.innerHTML="<div></div>");
// // we can also manipuloate the original data here like changed whole content in list 
// console.log(li.innerText="applesss");
// console.log(div.innerHTML);

// // ---textcontent---- it returns textual contents even for hiden elements
// let heading= document.querySelector("h3");
// console.log(heading.textContent);

// // -- practice---

// let h2=document.querySelector("h2");
// console.log(h2.innerText)//hello js

// h2.innerText= h2.innerText+" from sushu";
// console.log(h2.innerText);

// let divs=document.querySelectorAll(".box");
// console.log(divs[1].innerText+=" welcome");
// divs[2].innerText="welcome";
// console.log(divs[2].innerText);


// //usinh for loop to change the values of the divs
// let idx=1;
// for (div of divs){
//     div.innerText=`new value ${idx}`
//     idx++
//     console.log(div.innerText)
// }

// --- dom manipulation--- 
// ---attributes---

//---getattribute--- to get the attribute value
 let divv= document.querySelector("div");
console.log(divv);
let id= divv.getAttribute("id");
console.log(id);


let names= divv.getAttribute("name");
console.log(names);

let para= document.querySelector("p");
console.log(para);
para.setAttribute("id","678");

// set attribute------ to set the attribute value
divv.setAttribute("id","7");
para.setAttribute("id","678");

// ---style---node.style
let styleDiv= document.querySelector("div");

styleDiv.style.backgroundColor="yellow";
styleDiv.style.fontSize="14px";
styleDiv.innerText="hello";
//styleDiv.style.visibility="hidden";

//---- create an element 
let btn=document.createElement("button");
btn.innerHTML="click here!"
console.log(btn)

//--- insert elemnts-- node.apped(el)-- adds at end of the node(inside)
//console.log(styleDiv.append(btn));
//console.log(styleDiv.prepend(btn)); //--  adds at start of the node(inside)
//styleDiv.after(btn); //---  adds after the node(outside) 
//console.log(styleDiv.before(btn)); //--- adds before the node (outside)

//-- example 

let mynewheading=document.createElement("h1");
mynewheading.innerHTML="this is my new heading for insert elements"
document.querySelector("div").before(mynewheading);
console.log(mynewheading);
// --- delete element-- node.remove()--- removes the node

let removeDiv=document.querySelector("div");
removeDiv.remove();