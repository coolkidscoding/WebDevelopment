let add = document.querySelector("#add");
let subtract = document.querySelector("#subtract");

add.addEventListener("click", function () {
    let output = document.querySelector("#output");
    //let result = output.innerHText + 1
    let result = Number(output.innerText) + 1;

    if (result > 10) {
        result = 0;
    }

    output.innerText = result;
})

subtract.addEventListener("click", function () {
    let output = document.querySelector('#output');
    let result = Number(output.innerText) - 1;

    if (result < 0) {
        result = 0;
    }

    output.innerText = result;
})

console.log(add, subtract);

