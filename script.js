var num = 1;


function loop(){
    num = 0;
}

function loopsound_none(){
    setTimeout(function playtest(){
        let audio = document.getElementById("audio");
        audio.play();
    }, 4000); 
     
 }

function loopsound_two(){
    let num1 = getRndInteger(4000,6500);
   setTimeout(function playtest(){
       let audio = document.getElementById("audio");
       audio.play();
   }, num1);
   let num2 = getRndInteger((num1 + 6000), 13500);
   setTimeout(function playtest(){
       let audio = document.getElementById("audio");
       audio.currentTime=0;
       audio.play();
   }, num2);
    
}

function loopsound_three(){
    let num1 = getRndInteger(4000,6500);
    setTimeout(function playtest(){
        let audio = document.getElementById("audio");
        audio.play();
    }, num1);
    let num2 = getRndInteger((num1 + 6000), 13500);
    setTimeout(function playtest(){
        let audio = document.getElementById("audio");
        audio.currentTime=0;
        audio.play();
    }, num2);
    let num3 = getRndInteger((num2 + 6000), 17000);
    setTimeout(function playtest(){
        let audio = document.getElementById("audio");
        audio.currentTime=0;
        audio.play();
    }, num3);
     
 }

function stopsound(){
    num = -1;
}
function loopsound_constant(){
    let interval = getRndInteger(5000, 8500);
    
   let myvar = setInterval(function playtest(){
        if(num == -1){ 
            clearInterval(myvar);
            audio.currentTime = 0;
        }
        interval = getRndInteger(5000, 8500);
        let audio = document.getElementById("audio");
        audio.play();

    }, interval);
}

function playsound(){
    if(num == 0){
        loopsound_constant();
    }
    if(num == 1){
        loopsound_none();
    }
    if(num == 2){
        loopsound_two();
    }
    if(num == 3){
        loopsound_three();
    }
    
}

function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function repeat_1(){
    num = 1;
    
}

function repeat_2(){
   num = 2;
}

function repeat_3(){
    num = 3;
}



   document.querySelector('vbtn-radio1').addEventListener('touchstart',playsound());
   document.querySelector('vbtn-radio2').addEventListener('touchstart',stopsound());
     
   document.querySelector('btnradio1').addEventListener('touchstart',repeat_1());
   document.querySelector('btnradio2').addEventListener('touchstart',repeat_2());
   document.querySelector('btnradio3').addEventListener('touchstart',repeat_3());
   document.querySelector('btnradio4').addEventListener('touchstart',loop());


