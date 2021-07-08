var nome = "Nicolas Do Nascimento Borba";
var cargo = "Scrum-dev"
var texto2 = document.getElementById("texto-2");
var texto1 = document.getElementById("texto-1");
var nomehtml = document.getElementById("nome-html");
var cargoHtml =document.getElementById("cargo-no-html");


function colocarNomeNoHTML(nome){
    nomehtml.innerHTML = nome;
}

function colocarCargoNoHTML(cargo){
    cargoHtml.innerHTML = cargo;
}

function logarNome(){
    console.log(nome);
}
function clickNoProjeto(){
    console.log("clicou no botao projeto");
    texto2.style.display="block";
    texto1.style.display="none";
}
function clickNoSobre(){
    console.log("clicou no botao sobre");
    texto1.style.display = "block"
    texto2.style.display = "none"
}

colocarNomeNoHTML(nome);
colocarCargoNoHTML(cargo);