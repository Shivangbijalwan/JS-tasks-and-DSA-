// color all the 5 boxes randomly via DOM method
let boxes = document.querySelector(".container").children

function getRandomColor(){
    let val1 = Math.ceil(Math.random() * 256); // multiplying 256 gives you range for 0 to 255
    let val2 = Math.ceil(Math.random() * 256);
    let val3 = Math.ceil(Math.random() * 256);
    return `rgb(${val1}, ${val2}, ${val3})`;
}

Array.from(boxes).forEach((e) => {
    e.style.backgroundColor = getRandomColor()

})
