





const balls = document.querySelectorAll('.ball');
let currentBall = 0; 
let interval;
let isSwapping = true;

//  the 2 changed colors colors
const allBallsColor = "green"; 
const uniqueBallColor = "rgb(0, 42, 255)";  


function changeColors() {
        if (!isSwapping) return;
    
        balls.forEach(ball => ball.style.backgroundColor = allBallsColor);

        setInterval(() => {
            balls[currentBall].style.backgroundColor = uniqueBallColor;
        } ,1000)

        currentBall = (currentBall + 1) % balls.length;
        console.log(currentBall);
}

function startSwapping() {
    interval = setInterval(changeColors, 2000);  
}

function stopSwapping() {
    isSwapping = false;  
}

function resumeSwapping() {
    isSwapping = true;  
}

balls.forEach(ball => {
    ball.addEventListener('mouseover', stopSwapping);  // Stop on hover
    ball.addEventListener('mouseleave', resumeSwapping);  // Resume on mouse leave
});

startSwapping();

