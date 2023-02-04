//============== JSON ==============
let json = `{"id": 1,"nome": "Rayane","idade": 12, "turmas": [{"nome":"Ilog"}]}`;

let resultsObj = JSON.parse(json); //converte de json => objeto js
let resultsString = JSON.stringify(JSON.parse(json)); //converte de objeto js => json
console.log(resultsObj);
console.log(resultsString);

//============== localStorage ==============
let usuario = {
  nome: "João Vitor",
  idade: 23,
  cidade: "Guarulhos",
};
//Para salvar um item no localStorage
localStorage.setItem("usuario", JSON.stringify(usuario));
localStorage.setItem("idioma", "pt-br");

let tagP = document.getElementById("try");
// tagP.innerHTML = localStorage.getItem("usuario");

//Para pegar um item no localStorage
console.log(localStorage.getItem("idioma"));
console.log(JSON.parse(localStorage.getItem("usuario")));

//Para remover um item do localStorage
// localStorage.removeItem("idioma");
//Para apagar todo o localStorage
// localStorage.clear();

//============== timeout e interval ==============
let data;
setTimeout(() => {
  console.log("Entrei no Timeout");
  data = {
    nome: "João Vitor",
    idade: 23,
    cidade: "Guarulhos",
  };
}, 2000);

let interval = setInterval(function () {
  console.log("Entrei");

  if (data) {
    clearInterval(interval); // faz com que limpa o intervalo criado na linha 42
  }
}, 1000);
