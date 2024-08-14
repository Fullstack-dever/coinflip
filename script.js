const coin = document.getElementById("coin");

let x = 0;

function start_flip() {
    x = x + 7200;
    coin.style.transform = `perspective(1000px) rotateY(${x}deg)`
}