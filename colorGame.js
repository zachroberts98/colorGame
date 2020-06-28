let numSquares = 6;
let colors = [];
let pickedColor;

let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let button = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    modeButton();
    gamePlay();
    resetGame();
}

reset.addEventListener("click", function(){
    resetGame();
    this.textContent = "New Colors";
});


function changeColors(color) {
    //loop through all squares
    for(let i = 0; i < squares.length; i++) {
    //change each color to match given colors
    squares[i].style.backgroundColor = color;
    }
    
};

function pickColor(){
    //picks a random item in our array
    let random = Math.floor(Math.random() * colors.length)
    //calls the function so when refreshed, and new random color is selected for the game
    return colors[random]; 
};

function generateRandomColors(num) {
    //make and array
    let arr = [];
    //repeat num times
    for (let i = 0; i < num; i++) {
    // get random color and push into arr
        arr.push(randomColor())
    }
    //return array
    return arr;
};

function randomColor(){
    // pick a "red" from 0 to 255
    let r = Math.floor(Math.random() * 256);
    // pick a "green" from 0 to 255
    let g = Math.floor(Math.random() * 256);
    // pick a "blue" from 0 to 255
    let b = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", " + g + ", " + b + ")";
};


function resetGame() {
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    squareColor();
    //reset h1 background color
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
};

function squareColor(){
    for(let i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
};

function modeButton() {
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6
            resetGame();
            //figure out how many squares to show
            //pick new colors
            //pick a new pickedColor
            //update page to reflect changes
        });
    };
};

function gamePlay() {
    for(let i = 0; i < squares.length; i++){
        //click listeners to squares 
        squares[i].addEventListener("click", function(){
                //grab color of clicked square
            let clickedColor = this.style.backgroundColor;
                //compare color to picked color
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                button.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                 messageDisplay.textContent = "Try Again!";
            };
        });
    };
};