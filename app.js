const p1 = {
    score: 0,
    button: document.querySelector('#p1bt'),
    display: document.querySelector('#p1ds')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2bt'),
    display: document.querySelector('#p2ds')
}



// const p1bt = document.querySelector('#p1bt');
// const p2bt = document.querySelector('#p2bt');
// const p1ds = document.querySelector('#p1ds');
// const p2ds = document.querySelector('#p2ds');


const rst = document.querySelector('#rst');
const slct = document.querySelector('#playto');

let winnerpt = 3;
let p1sc=0,p2sc=0;
let gameover = false;

function updateScore(player,opponent){
    if(!gameover){
        player.score++;
        player.display.textContent = player.score;
    }
    if(player.score==winnerpt){
        gameover = true;
        player.display.classList.add('has-text-success');
        opponent.display.classList.add('has-text-danger');
        player.button.disabled = true;
        opponent.button.disabled = true;
    }
}


slct.addEventListener('change',(e)=>{
    winnerpt = parseInt(slct.value);
    reset();
})

p1bt.addEventListener('click',(e)=>{
    updateScore(p1,p2);
    // if(!gameover){
    //     p1sc++;
    //     p1ds.textContent = p1sc;
    // }
    // if(p1sc==winnerpt){
    //     gameover=true;
    //     p1ds.classList.add('has-text-success');
    //     p2ds.classList.add('has-text-danger');
    //     p1bt.disabled = true;
    //     p2bt.disabled = true;
    // }
})


p2bt.addEventListener('click',(e)=>{
    updateScore(p2,p1);
    // if(!gameover){
    //     p2sc++;
    //     p2ds.textContent = p2sc;
    // }
    // if(p2sc==winnerpt){
    //     gameover=true;
    //     p2ds.classList.add('has-text-success');
    //     p1ds.classList.add('has-text-danger');
    //     p1bt.disabled = true;
    //     p2bt.disabled = true;
    // }
})


rst.addEventListener('click',reset)

function reset(){
    p1.display.textContent = Number(0);
    p2.display.textContent = Number(0);
    p1.display.classList.remove('has-text-success','has-text-danger');
    p2.display.classList.remove('has-text-danger','has-text-success');
    gameover = false;p1.score=0;p2.score=0;
    p1.button.disabled = false;
    p2.button.disabled = false;
}
