const botaoConverter = document.querySelector(".btn-converter");
const valorSelecionado = document.querySelector("#select-moeda");
const valorConverter = document.querySelector(".valor-br");
const valorConvertido = document.querySelector(".valor-convertido");
const textoConvertido = document.querySelector(".texto-convertido");
const imagemConvertida = document.querySelector(".logo-converter");

const formatadorReal = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});

const formatadorDolar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

const formatadorEuro = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'EUR'
});

function botaoClicado() {
  const valorInput = parseFloat(document.querySelector(".input-br").value);
  const dolarAtual = 4.96;
  const dolarConvertido = valorInput / dolarAtual;
  const euroAtual = 5.37;
  const euroConvertido = valorInput / euroAtual;

  if (valorSelecionado.value === "dolar") {
    valorConverter.innerHTML = formatadorReal.format(valorInput);
    valorConvertido.innerHTML = formatadorDolar.format(dolarConvertido);
    trocarSelecao();
  } else if (valorSelecionado.value === "euro") {
    valorConverter.innerHTML = formatadorReal.format(valorInput);
    valorConvertido.innerHTML = formatadorEuro.format(euroConvertido);
    trocarSelecao();
  }
}

function trocarSelecao() {
  if (valorSelecionado.value === "dolar") {
    textoConvertido.innerHTML = "Dólar Americano";
    imagemConvertida.src = "./img/estados-unidos (1) 1.png";
  } if (valorSelecionado.value === "euro") {
    textoConvertido.innerHTML = "Euro";
    imagemConvertida.src = "./img/Euro.png";
  }
  
  botaoClicado();

}

valorSelecionado.addEventListener("change", trocarSelecao); 
botaoConverter.addEventListener("click", botaoClicado);