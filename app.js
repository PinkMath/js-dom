const button = document.getElementById("botao-toggle");
const info = document.getElementById("info");

function toggleInfo() {
  info.classList.toggle('oculto');
  const estav = !info.classList.contains('oculto');

  if (estav) {
    button.textContent = 'Esconder informações 🚫';
	atualizarContador();
  } else {
    button.textContent = 'Mostrar informações 📂';
  }
}

function atualizarContador() {
  const contadorElemento = document.getElementById("contador");
  let contador = parseInt(contadorElemento.textContent.split(': ')[1]);
  contador++;
  contadorElemento.textContent = `Aberturas: ${contador}`;
}

button.addEventListener('click', () => {
  toggleInfo();
});