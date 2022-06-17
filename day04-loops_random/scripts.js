var numeroSecreto = parseInt(Math.random(0,9)*11);
var resultado = document.querySelector("h2#resultado");
var respotasArea = document.querySelector("#lista");
var chance = 3;
var respostas = [];




function Chutar(){
    var chute = parseInt(document.querySelector("input#valor").value);
    console.log(chute);
    respostas.push(chute)

    chance-=1;
 
    
    if(chute==numeroSecreto){
        
        resultado.innerText = "Parabéns você acertou";

    }
    else {

        let listaRespostas = "<h2 id='chutes' >CHUTES REALIZADOS</h2><ul>";

        for(let element = 0; respostas.length>element; element++){
            listaRespostas += `<li>${respostas[element]}</li>`;
        }

        listaRespostas += '</u>';

        respotasArea.innerHTML = listaRespostas;

        if(chance>0){
            resultado.innerText = "Você errou, e ainda tem "+chance+" chance";
        }

        else{
            resultado.innerText = "GAME OVER";
        }
    }
}