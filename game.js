

var numOfSquares = 6;
var colors = generateRandomColor(numOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modebuttons = document.querySelectorAll('.mode');

init();

function init(){
    for(var i=0; i<modebuttons.length; i++){
        modebuttons[i].addEventListener('click', function(){
            modebuttons[0].classList.remove('selected');
            modebuttons[1].classList.remove('selected');
            this.classList.add('selected');
    
            if(this.textContent ==="Easy"){
                numOfSquares = 3;
            }else {
                numOfSquares = 6;
            }
            reset();
        });
    }
}



function reset(){
    messageDisplay.textContent = "";
    colors = generateRandomColor(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}




resetButton.addEventListener('click' , function(){
    reset();
});

colorDisplay.textContent = pickedColor;

for (var i=0; i<squares.length; i++){
    // add intail color to squares
    squares[i].style.backgroundColor = colors[i];

    // add click listeners to squares
    squares[i].addEventListener("click" , function(){
        var clickColor = this.style.backgroundColor;
        if(clickColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Agian!";
            changeColor(clickColor);
            h1.style.backgroundColor = pickedColor;
        }else{
            this.style.backgroundColor = " #232323";
            messageDisplay.textContent = "Try Agian";
        }
    });
}


function changeColor(color){
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColor(num){
    var arr = []
    for(var i=0; i<num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
 var r = Math.floor(Math.random() * 256);
 var g = Math.floor(Math.random() * 256);
 var b = Math.floor(Math.random() * 256);
 return "rgb(" + r + ", " + g + ", " + b +")";
}