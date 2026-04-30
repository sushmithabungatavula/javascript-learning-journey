let newbtn=document.createElement("button");
newbtn.innerText="click me"
newbtn.style.backgroundColor="red";
newbtn.style.color="white";

document.querySelector("body").prepend(newbtn);
console.log(newbtn);

//q2
let para=document.querySelector("p");

console.log(para.getAttribute("class"));
//if we use setattribute as it overwtites 
//para.setAttribute("class" ,"newclass")

//---- using class list--- collection of class attributes of an element

console.log(para.classList);
para.classList.add("newclass");//adds the new class styling
para.classList.remove("class");