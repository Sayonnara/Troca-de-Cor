/*
 [x] Saber quando o botao for clicado
 [x] Achar o body no html
 [x] Trocar a cor ao clicar

*/

function trocaCor(cor) {
  document.body.style.backgroundColor = cor;
  document.body.style.backgroundImage = "none";
}

/*
 [x] Saber quando o botao for clicado
 [x] Saber aplicar a nova cor
 [x] Gerar um nova cor

*/

function corAleatoria() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  document.body.style.backgroundImage = "none";

  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

/*
 [x] Preciso saber  que o botao de cor personalizada foi clicado
 [x] Saber quem é esse  input
 [x] Pegar o valor que tem dentro dele 
 [x] Colocar  no fundo na cor  digitada

*/

function aplicaCorPersonalizada() {
  const corInput = document.querySelector(".input-cor").value;

  trocaCor(corInput);
}

function escolherImg(imagem) {
  const reader = new FileReader();

  reader.onload = function (evento) {
    const urlImagem = evento.target.result;

    document.body.style.backgroundImage = `url(${urlImagem})`;
  };

  reader.readAsDataURL(imagem);
}
