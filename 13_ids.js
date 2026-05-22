//selecting  by ides , classes and more

let box = document.getElementsByClassName("box");
console.log(box);

box[2].style.backgroundColor = "pink";

document.getElementById("gray").style.backgroundColor = "gray";

document.querySelector(".box").style.backgroundColor = "green";

// to select all element with box as class 

// document.querySelectorAll(".box") .forEach((e) => {
//    e.style.backgroundColor = "green";
// })

