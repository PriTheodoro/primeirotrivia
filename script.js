

var name = ("E ai, qual o seu nome?");
var getName = document.getElementById("formname");
document.getElementById("formname").addEventListener("submit", function (evt){
  evt.preventDefault();
var welcomeName = document.getElementById ("formname").value;
console.log(welcomeName);
var welcome = ("Olá " + welcomeName + " bora jogar?");
var escolha = ("Escolha o seu tema!");


document.getElementById("nome").innerHTML = name;
document.getElementById("welcome").innerHTML = welcome;
document.getElementById("tema").innerHTML = escolha;

//variáveis perguntas sobre o tema herois
var pergunta1h = ("Qual o nome do Capitão América? Escolha uma das alternativas.\na-Steve Louis\nb-Steve Roger");
var pergunta2h = ("Em que cidade vive o Homem-Aranha? Escolha uma das alternativas.\na-Nova York\nb-Los Angeles");
var pergunta3h = ("Quem matou os pais do Batmam?\nEscolha uma das alternativas.\na-Joe Chill\nb-Julio Chill");

//perguntas sobre o tema herois
function herois(){
  var resposta1h = prompt(pergunta1h);
  var resposta2h = prompt(pergunta2h);
  var resposta3h = prompt(pergunta3h);
  
  //validação de respostas sobre o tema herois
  var rh1 = ("Resposta 1 correta");
  var rh1e = ("Resposta 1 errada");
    if (resposta1h == "b"){
    document.getElementById("respostash1").innerHTML = rh1;
    } else {
    document.getElementById("respostash1").innerHTML = rh1e;
    }
  
  var rh2 = ("Resposta 2 correta");
  var rh2e = ("Resposta 2 errada");
  if (resposta2h == "a"){
    document.getElementById("respostash2").innerHTML = rh2;
    } else {
    document.getElementById("respostash2").innerHTML = rh2e;
    }
 
  var rh3 = ("Resposta 3 correta");
  var rh3e = ("Resposta 3 errada");
  if (resposta3h == "a"){
    document.getElementById("respostash3").innerHTML = rh3;
    } else {
    document.getElementById("respostash3").innerHTML = rh3e;
    }
 
}

//variáveis perguntas sobre o tema Vilões
var pergunta1v = ("Coringa é inimigo de qual héroi? Escolha uma das alternativas.\na-Super Man\nb-Batman");
var pergunta2v = ("Quem é o grande inimigo do Homem-Aranha? Escolha uma das alternativas.\na-Duende Verde\nb-Anão Azul");
var pergunta3v = ("Soldado Invernal é iminigo do qual Super Héroi?\nEscolha uma das alternativas.\na-Homem de Ferro\nb-Capitão América");

//perguntas sobre o tema viloes
function viloes(){
  var resposta1v = prompt(pergunta1v);
  var resposta2v = prompt(pergunta2v);
  var resposta3v = prompt(pergunta3v);
  
  //validação de respostas sobre o tema viloes
  var rv1 = ("Resposta 1 correta");
  var rv1e = ("Resposta 1 errada");
    if (resposta1v == "b"){
    document.getElementById("respostasv1").innerHTML = rv1;
    } else {
      document.getElementById("respostasv1").innerHTML = rv1e
    }
  
  var rv2 = ("Resposta 2 correta");
  var rv2e = ("Resposta 2 errada");
  if (resposta2v == "a"){
    document.getElementById("respostasv2").innerHTML = rv2;
    } else {
      document.getElementById("respostasv2").innerHTML = rv2e
    }
 
  var rv3 = ("Resposta 3 correta");
  var rv3e = ("Resposta 3 errada");
  if (resposta3v == "b"){
    document.getElementById("respostasv3").innerHTML = rv3;
    } else {
    document.getElementById("respostasv3").innerHTML = rv3e;
    }
}
//limpar respostas e jogar novamente
function jogarNovamente(){
var limparh1 = document.getElementById("respostash1");
var limparh2 = document.getElementById("respostash2");
var limparh3 = document.getElementById("respostash3");
var limparv1 = document.getElementById("respostasv1");
var limparv2 = document.getElementById("respostasv2");
var limparv3 = document.getElementById("respostasv3");
limparh1.innerHTML = " ";
limparh2.innerHTML = " ";
limparh3.innerHTML = " ";
limparv1.innerHTML = " ";
limparv2.innerHTML = " "; 
limparv3.innerHTML = " ";
}






