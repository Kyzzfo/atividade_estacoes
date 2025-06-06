const mes = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

const estacao_ano = ["Primavera", "Verão", "Outono", "Inverno"];

const primavera = [
  { "nome": "Rosa chá", "cor": "rgb(255, 182, 193)" },
  { "nome": "Lilás", "cor": "rgb(200, 162, 200)" },
  { "nome": "Verde menta", "cor": "rgb(152, 255, 152)" },
  { "nome": "Amarelo limão", "cor": "rgb(255, 250, 85)" },
  { "nome": "Peônia", "cor": "rgb(255, 105, 180)" }
];

const verao = [
    { nome: 'Turquesa', cor: 'rgb(64, 224, 208)' },
    { nome: 'Verde limão', cor: 'rgb(173, 255, 47)' },
    { nome: 'Amarelo ouro', cor: 'rgb(255, 223, 0)' },
    { nome: 'Laranja pastel', cor: 'rgb(255, 179, 71)' },
    { nome: 'Coral', cor: 'rgb(255, 127, 80)' }    
];

const outono = [
    { nome: 'Amarelo suave', cor: 'rgb(255, 239, 184)' },
    { nome: 'Bege claro', cor: 'rgb(210, 180, 140)' },
    { nome: 'Pêssego suave', cor: 'rgb(255, 218, 185)' },
    { nome: 'Marrom claro', cor: 'rgb(222, 184, 135)' },
    { nome: 'Laranja pastel', cor: 'rgb(255, 160, 122)' } // Substituindo o vermelho vinho por um laranja pastel suave
  ];

const inverno = [
    { nome: 'Azul gelo', cor: 'rgb(240, 248, 255)' },
    { nome: 'Branco gelo', cor: 'rgb(240, 255, 255)' },    
    { nome: 'Lavanda', cor: 'rgb(230, 230, 250)' },   
    { nome: 'Azul suave', cor: 'rgb(135, 206, 235)' },
    { nome: 'Azul profundo', cor: 'rgb(0, 191, 255)' }
    
  ];

const labelmes = document.getElementById('nome_mes')
const input_mes = document.getElementById('i_mes') 
const label_estacao = document.getElementById('nome_estacao')
const img_verao = document.querySelector('.estacao_verao img')
const img_outono = document.querySelector('.estacao_outono img')
const img_inverno = document.querySelector('.estacao_inverno img')
const img_primavera = document.querySelector('.estacao_primavera img')
const nome_cor = document.getElementById('nome_cor')
function calcula_estacao(){
  const cores = document.getElementsByClassName("cor")
  let vet_estacao;
  const num_mes = parseInt(input_mes.value, 10)
  labelmes.textContent = "Estamos em " + mes[num_mes-1]
  
  if (num_mes == 12 || num_mes<=2){
    label_estacao.textContent = "É " + estacao_ano[1]+" ☀️"
    vet_estacao = verao;
    coresEstacao(cores, verao)
    img_verao.style.filter = "grayscale(0%)";
    img_inverno.style.filter = "grayscale(100%)";
    img_outono.style.filter = "grayscale(100%)";
    img_primavera.style.filter = "grayscale(100%)";
  }
  else if(3<=num_mes && num_mes<=5){
    label_estacao.textContent = "É " + estacao_ano[2]+" 🍂"
    vet_estacao = outono;
    coresEstacao(cores, outono)
    img_outono.style.filter = "grayscale(0%)";
    img_verao.style.filter = "grayscale(100%)";
    img_inverno.style.filter = "grayscale(100%)";
    img_primavera.style.filter = "grayscale(100%)";
  }
  else if(6<=num_mes && num_mes<=8){
    label_estacao.textContent = "É " + estacao_ano[3]+" ❄️"
    vet_estacao = inverno; // Corrigido para usar a variável
    coresEstacao(cores, inverno)
    img_inverno.style.filter = "grayscale(0%)";
    img_verao.style.filter = "grayscale(100%)"; 
    img_outono.style.filter = "grayscale(100%)";
    img_primavera.style.filter = "grayscale(100%)";
  }
  else if(9<=num_mes && num_mes<=11){
    label_estacao.textContent = "É " + estacao_ano[0]+" 🌸"
    vet_estacao = primavera; // Corrigido para usar a variável
    coresEstacao(cores, primavera)  
    img_primavera.style.filter = "grayscale(0%)";
    img_verao.style.filter = "grayscale(100%)";
    img_outono.style.filter = "grayscale(100%)";
    img_inverno.style.filter = "grayscale(100%)";
  }
  clearInterval(intervalo_fundo);
  num_cor_ciclo_fundo = 0;
  coresEstacao(cores, vet_estacao);
  intervalo_fundo = setInterval(function() {
      coresEstacao(cores, vet_estacao);
  }, 2000);

}

estacoes = document.getElementById('estacoes');

let num_cor_ciclo_fundo = 0; // Índice para o ciclo de cores do fundo do #estacoes.
let intervalo_fundo;         // ID do setInterval para o fundo.
// Função para mudar a cor de fundo do #estacoes a cada 2 segundos.

function coresEstacao(tags, elements){
    for (let i = 0; i < tags.length && i < elements.length; i++) {
      tags[i].innerHTML = elements[i].nome;
      tags[i].style.backgroundColor = elements[i].cor;
    }
    if (estacoes && elements && elements.length > 0) {
        const indice = num_cor_ciclo_fundo % elements.length;
        const corObj = elements[indice];
        
        estacoes.style.backgroundColor = corObj.cor;
        if (nome_cor) {
            nome_cor.textContent = corObj.nome; 
        }
        num_cor_ciclo_fundo++;
    } else if (estacoes) {
        estacoes.style.backgroundColor = 'transparent';
        if (nome_cor) {
            nome_cor.textContent = '??';
        }
    }

}
    

document.addEventListener('DOMContentLoaded', calcula_estacao);
