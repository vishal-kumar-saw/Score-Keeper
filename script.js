const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display'),
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display'),
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let winningScore = 3;
let gameOver = false;

function updateScores(player, opponent) {
    if (!gameOver) {
        player.score += 1;
        player.display.textContent = player.score;
        if (player.score === winningScore) {
            gameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
}

p1.button.addEventListener('click', () => {
    updateScores(p1, p2);
});

p2.button.addEventListener('click', () => {
    updateScores(p2, p1);
});

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
});


resetButton.addEventListener('click', reset);

function reset() {
    gameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.display.textContent = 0;
        p.button.disabled = false;
    }
}