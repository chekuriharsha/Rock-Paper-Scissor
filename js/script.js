let score = 0;

function fun1() {
    let user = 'rock';
    funRes(user);
}
function fun2() {
    let user = 'paper';
    funRes(user);
}
function fun3() {
    let user = 'scissors';
    funRes(user);
}
function funRes(u) {
    document.getElementById('ply1').innerHTML = `Player-1: ${u}`;
    let comp = Math.floor(Math.random() * 3) + 1;
    let choice = '';
    if (comp === 1) {
        choice = 'rock';
    }
    else if (comp === 2) {
        choice = 'paper';
    }
    else {
        choice = 'scissors';
    }
    document.getElementById('ply2').innerHTML = `Player-2: ${choice}`;

    if (u === 'rock') {
        if (choice === 'scissors') {
            document.getElementById('res').innerHTML = 'Result: Won';
            score += 1;
            document.getElementById('scr').innerHTML = 'Score: ' + score;
        }
        else if (choice === 'paper') {
            document.getElementById('res').innerHTML = 'Result: Loss';
            score -= 1;
            document.getElementById('scr').innerHTML = 'Score: ' + score;
        }
        else {
            document.getElementById('res').innerHTML = 'Result: Tie';
        }
    }
    else if (u === 'paper') {
        if (choice === 'rock') {
            document.getElementById('res').innerHTML = 'Result: Won';
            score += 1;
            document.getElementById('scr').innerHTML = 'Score: ' + score;
        }
        else if (choice === 'scissors') {
            document.getElementById('res').innerHTML = 'Result: Loss';
            score -= 1;
            document.getElementById('scr').innerHTML = 'Score: ' + score;
        }
        else {
            document.getElementById('res').innerHTML = 'Result: Tie';
        }
    }
    else {
        if (choice === 'paper') {
            document.getElementById('res').innerHTML = 'Result: Won';
            score += 1;
            document.getElementById('scr').innerHTML = 'Score: ' + score;
        }
        else if (choice === 'rock') {
            document.getElementById('res').innerHTML = 'Result: Loss';
            score -= 1;
            document.getElementById('scr').innerHTML = 'Score: ' + score;
        }
        else {
            document.getElementById('res').innerHTML = 'Result: Tie';
        }
    }
}

function fun4() {
    score = 0;
    document.getElementById('scr').innerHTML = 'Score: ' + score;
    document.getElementById('ply1').innerHTML = 'Player-1: NONE';
    document.getElementById('ply2').innerHTML = 'Player-2: NONE';
    document.getElementById('res').innerHTML = 'Result: NONE'
}