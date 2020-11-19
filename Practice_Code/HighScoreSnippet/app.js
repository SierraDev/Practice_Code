// Example 1
if(1 !== 1){
    console.log("True!");
}

// Example 2
let rating = 3;
if(rating >= 3){
    console.log("You're awesome!")
} else if (rating === 2) {
    console.log("Good enough, I guess")
} else {
    console.log("Not good")
}

// Example 3
let num = 10;
if(num % 2 !== 0){
    console.log("Odd number")
}
else{
    console.log("Even number")
}

// Example 4
let highScore = 1800;
let userScore = 1345;

if(userScore >= highScore){
    console.log(`Congratulations, you have the new high score of ${userScore}`);
    highScore = userScore;
}
else {
    console.log(`Good try. Your score of ${userScore} didn't beat the high score of ${highScore}`);
}