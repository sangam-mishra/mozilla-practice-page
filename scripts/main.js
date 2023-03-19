let myButton=document.querySelector("button");
let myHeading=document.querySelector("h1");
function setUserName(){
    const myName=prompt("please enter your name");
    if(!myName){
        setUserName();
    }
    else{
    localStorage.setItem("name",myName);
    myHeading.textContent=`Mozilla is cool,${myName}`;
    }
}
if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }
  
myButton.onclick=()=>{
    setUserName();
};

/*
// Personalized welcome message code
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
*/

//picture change code
const myImage=document.querySelector("img");

myImage.onclick=()=>{
    const mySrc=myImage.getAttribute("src");
    if(mySrc==="images/firefox-icon.jpeg"){
        myImage.setAttribute("src","images/firefox2.jpg");
    }
    else{
        myImage.setAttribute("src","images/firefox-icon.jpeg");
    }

};
