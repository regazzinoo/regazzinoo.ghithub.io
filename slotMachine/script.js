arraySimboli=new Array("images/1.jpg", "images/2.jpg", "images/3.png", "images/4.png", "images/5.png", "images/6.png", "images/7.png", "images/8.png", "images/9.jpg", "images/10.jpg");
// situazione iniziale
document.getElementById('slot1').innerHTML = arraySimboli[0];
document.getElementById('slot2').innerHTML = arraySimboli[2];
document.getElementById('slot3').innerHTML = arraySimboli[1];

function gioca(){
    document.getElementById("button-slot").disabled=true;

    let crediti=10;

    let slot1=generaRandom(arraySimboli.lenght);
        document.getElementById("slot1").src=arraySimboli[numeroRandom];

    let slot2=generaRandom(arraySimboli.lenght);
        document.getElementById("slot2").src=arraySimboli[numeroRandom];

    let slot3= generaRandom(arraySimboli.lenght);
     document.getElementById("slot3").src=arraySimboli[numeroRandom];
    
     crediti--;
        if(crediti<=0){
            clearInterval("slot1");
            return null;
        }
}

function vincita(){
    slot1 = document.getElementById("slot1").innerHTML;
    slot2 = document.getElementById("slot2").innerHTML;
    slot3 = document.getElementById("slot3").innerHTML;

    if (slot1 == slot2 && slot2 == slot3){
      document.getElementById("result").innerHTML = 'HAI VINTO';
    } else {
      document.getElementById("result").innerHTML = 'HAI PERSO';
    }
}


function generaRandom(max){
	return Math.floor((Math.random() *  max));
}


