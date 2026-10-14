var tesouro = Math.floor(Math.random() * 25)
var tentativas = 0
var mapa = document.getElementById("mapa")


for (var i =0; i<25;i++){
    mapa.innerHTML += "<button onclick='clicar(this," + i + ")'>?</button>"
}


function clicar(botao, posicao){
    tentativas = tentativas + 1
    var distancia = Math.abs(posicao - tesouro)
    var msg = document.getElementById("msg")


    if(posicao == tesouro){
       botao.innerText = "⭐"
       msg.innerText = "Achou em " + tentativas + " tentativas!"
    }else if(distancia <= 2){
        botao.innerText = "🔥"
        msg.innerText= "Quente"
    }else{
        botao.innerText="🧊"
        msg.innerText= "Frio"
    }
}




