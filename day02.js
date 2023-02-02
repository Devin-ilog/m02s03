let tagDiv = document.querySelector("div.page");

//======== createElement() =========
let tagLabel = document.createElement("label");
//Cria uma tag - <label></label>
//Adicionando texto
tagLabel.innerHTML += `
<span class="chip" id="span">
    <strong>Uso do createElement</strong>
</span>`;

//======== Alterações de atributos =========
//Setar um valor
tagLabel.id = "label";
tagLabel.setAttribute("id", "labelId");
//Pegar o valor
console.log(tagLabel.id);
console.log(tagLabel.getAttribute("id"));
//Extra - como adicionar uma classe
tagLabel.classList.add("label");

//======== appendChild() =========
tagDiv.appendChild(tagLabel);
//dentro da tag div com a classe page será adicionada a tag label e todo o seu corpo

//======== removeChild() =========
let divChild = document.getElementById("box");
let divfather = document.getElementById("divFather");
//Para remover um filho sua tag capturada dev obrigatóriamente estar
//dentro da tag capturada
//Exemplo:
divfather.removeChild(divChild);

// Exercício slide 11 - aula 2
// let tagsLi = document.querySelectorAll("ul#list li");

// for (let i = 0; i < tagsLi.length; i++) {
//   if (tagsLi[i].textContent[0].toUpperCase() == "C") {
//     let tagUl = tagsLi[i].parentElement;
//     tagUl.removeChild(tagsLi[i]);
//   }
// }

//======== cloneNode() =========
let tagUl = document.querySelector("ul#list");
let cloneTagUlWithTrue = tagUl.cloneNode(true);
console.log(cloneTagUlWithTrue); // a nível de estrutura ela é exatamente igual a tagUl

let cloneTagUl = tagUl.cloneNode();
console.log(cloneTagUl); // é clonada apenas a tag e seus respectivos atributos, mas não
// suas tags filhas
