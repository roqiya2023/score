//1.held a number between 1 and 20,this is going to be the secret number
let secretNumber=Math.floor(Math.random()*20) +1;
secretNumber=9;
let score=20;
let highScore=0;
//2.once user clicks on check button, 
document.querySelector('.check').addEventListener('click',function(){
   let userGuess= document.querySelector('.guess').value;
   document.querySelector('.guess').value="";
   //"",0,null,undefined all are falsy values
   if(!userGuess){
         document.querySelector('.message').textContent='No Number';
   }else if (userGuess==secretNumber){
      document.querySelector('.message').textContent='Correct Number';
      document.querySelector('body').style.backgroundColor='#60b347';
      document.querySelector('.number').textContent=secretNumber;
        document.querySelector('.number').style.width='30rem';
        if(score>highScore){
            highScore=score;
            document.querySelector('.highscore').textContent=highScore;
        }

   }else if(userGuess !==secretNumber){
    const feedBack=userGuess>secretNumber ? 'Too High':'Too Low';
    document.querySelector('.message').textContent=feedBack;
    score--;
    document.querySelector('.score').textContent=score;
   }
})
document.querySelector('.again').addEventListener('click',function(){
    score=20;
    document.querySelector('.score').textContent=score;
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('.number').style.width='15rem';
})