let coinFlip;
let numberOfTimes = parseInt(prompt("How many times do you want to flip the coin?"));
for (let i = 0; i < numberOfTimes; i++) {
    coinFlip = Math.round(Math.random());
    if (coinFlip === 1) {
        console.log("Heads");
    } else {
        console.log("Tails");
    } 
}