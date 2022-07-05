var palavras_para_sorteio = ['computador','mesa','kelvin','mouse','quadro','cabelo','celular','tablet','porta','lacoste']
var palavra_sorteada
var indice_da_palavra_sorteada
var quantidade_de_asteriscos_palavra_sorteada = []
var palavra_da_forca = []
var letras_tentadas = []
var i=0,h,j=""
var d=0
var erros = 0
var mistakes=-1
var cont=0
var valor_do_controle_de_formulario = ""
var pegar_palavra_em_progresso= [""]

function sortearPalavra(){
    indice_da_palavra_sorteada = Math.floor(Math.random()*10)
    palavra_sorteada = palavras_para_sorteio[indice_da_palavra_sorteada]
}

function mostrarProgressoDaPalavra(){
    
    for (j in palavra_sorteada) {
        quantidade_de_asteriscos_palavra_sorteada.push("*")
    }
    document.getElementById("progresso-da-palavra").textContent = quantidade_de_asteriscos_palavra_sorteada
}

function mostrarLetrasTentadas(){
    letras_tentadas.push(document.getElementById("letra-tentada").value)
    document.getElementById("letras-digitas").textContent = letras_tentadas
}

/*function conferirSeAcertouTudo() {
    pegar_palavra_em_progresso = document.getElementById("progresso-da-palavra").textContent
    alert(pegar_palavra_em_progresso)
    for (d = 0; d < pegar_palavra_em_progresso.length; d++) {
        if (d % 2 != 0) {
            pegar_palavra_em_progresso.splice(d)
            alert(pegar_palavra_em_progresso)
        }
    }
}*/

function conferirSeAcertou(){
    for (let k of palavra_sorteada) {
        if (document.getElementById("letra-tentada").value == k) {
            atualizarPalavra(k, cont);
            document.getElementById("mensagem").textContent = "Você acertou a letra"
        }
        else{
            erros++
        }
        cont++
    }
    if(erros == palavra_sorteada.length){
        document.getElementById("mensagem").textContent = "Você errou a letra"
        contarErro();
    }
    document.getElementById("letra-tentada").value = ""
    document.getElementById("letra-tentada").focus();
    erros = 0
    cont = 0
}

function contarErro(){
    mistakes++
    mudarBackgroundDoBoneco(mistakes);
}

function mudarBackgroundDoBoneco(mis){
    switch(mis) {
      case 0: document.getElementById("cabeca").style.backgroundColor = 'black'; break
      case 1: document.getElementById("corpo").style.backgroundColor = 'royalblue'; break
      case 2: document.getElementById("braco1").style.backgroundColor = 'red'; break
      case 3: document.getElementById("braco2").style.backgroundColor = 'orange'; break
      case 4: document.getElementById("perna1").style.backgroundColor = 'brown'; break
      case 5: 
      document.getElementById("perna2").style.backgroundColor = 'pink'; 
      document.getElementById("final").textContent = ("A palavra sorteada era: "+palavra_sorteada);
      travarJogo();
      break
    }
}

function atualizarPalavra(letra,indice){
    quantidade_de_asteriscos_palavra_sorteada[indice] = letra
    document.getElementById("progresso-da-palavra").textContent =  quantidade_de_asteriscos_palavra_sorteada
}

function travarJogo(){
    document.getElementById("letra-tentada").setAttribute('readonly','true');
    document.getElementById("botao-enviar").setAttribute('disabled','disabled');
}


sortearPalavra();
mostrarProgressoDaPalavra();
