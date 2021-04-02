const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let gameOver = false;


p1Button.addEventListener('click', () => {
    if (!gameOver) {
        p1Score++;
        p1Display.textContent = p1Score;
        if (p1Score === winningScore) {
            gameOver = true;
        }
    }
});

p2Button.addEventListener('click', () => {
    if (!gameOver) {
        p2Score++;
        p2Display.textContent = p2Score;
        if (p2Score === winningScore) {
            gameOver = true;
        }
    }
});

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
});


resetButton.addEventListener('click', reset);

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    gameOver = false;
}