

function SayHello() {
    let my_name = document.getElementById("username").value;
    let hello_area = document.getElementById("hello_area");
    hello_area.innerText = `Hello ${my_name}!`;    
}
