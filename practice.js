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


//--- practice event handler---

let modebtn=document.querySelector("#mode");
let currentmode="light";
let body=document.querySelector("body")

modebtn.addEventListener("click",()=>{
    //console.log("you are trying to change the mode")
    if (currentmode==="light"){
        currentmode="dark"
        // document.querySelector("body").style.backgroundColor="black";
        body.classList.add("dark")
        body.classList.remove("light")

    }
    else{
        currentmode="light"
        // document.querySelector("body").style.backgroundColor="white";
        body.classList.add("light")
        body.classList.remove("dark")
    }
    console.log(currentmode);
})
