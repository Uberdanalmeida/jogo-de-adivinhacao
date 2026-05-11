let numeroSorteado;
let tentativas = 0;

function sortearNumero() {
  numeroSorteado = Math.floor(Math.random() * 500) + 1;
  alert("Número sorteado! Agora tente adivinhar.");
  tentativas = 0;
  const tentar = document.getElementById("tentar");

  if (tentar) {
    tentar.innerHTML = "";
  }
}

function clicou() {
  const numer = document.getElementById("num").value;
  const principal = document.getElementById("princ");
  const tentar = document.getElementById("tentar");
  const img = document.getElementById("foto");

  if (numeroSorteado === undefined) {
    alert(
      'O número ainda não foi sorteado. Clique no botão "Sortear Número" primeiro.',
    );
    return;
  }

  if (numer > 500 || numer === "") {
    alert("Escolha um número válido entre 1 e 500.");
  } else if (parseInt(numer) === numeroSorteado) {
    img.src = "imagem/trofeu.png";
    alert("Parabéns! Você acertou!");
    document.body.style.backgroundImage = 'url("imagem/vencedor.jpg")';
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";

    tentativas++;

    if (tentar) {
      tentar.innerHTML = `<p id='par'>Parabéns! você acertou!<br/> Você <span>precisou de ${tentativas} tentativa(s)</span> para acertar o número.<p/>`;
    }
  } else if (parseInt(numer) > numeroSorteado) {
    tentativas++;
    alert("O número é menor.");
    document.getElementById("num").value = "";
  } else {
    tentativas++;
    alert("O número é maior.");
    document.getElementById("num").value = "";
  }
}
