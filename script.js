// function showTime() {
//     const date = new Date()
//     console.log(date.getHours());
// }

// showTime() // call
let input = document.getElementById("input")

console.log(input);


function typeNumber(num) {
    console.log(num);

    console.log("hello Working");
    input.value += num
}


function calculate() {
    let input = document.getElementById("input")
    // console.log();   
    input.value = eval(input.value)
}

// eval