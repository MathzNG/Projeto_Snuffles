// Salvar horários
document.getElementById("formHorarios").addEventListener("submit", function(e) {
  e.preventDefault();

  const h1 = document.getElementById("h1").value;
  const h2 = document.getElementById("h2").value;
  const h3 = document.getElementById("h3").value;

  const dados = { h1, h2, h3 };

  localStorage.setItem("horarios", JSON.stringify(dados));

  mostrarHorarios();
});

// Mostrar horários na tela
function mostrarHorarios() {
  const dados = JSON.parse(localStorage.getItem("horarios"));

  if (!dados) return;

  document.getElementById("show1").innerText = dados.h1 || "--:--";
  document.getElementById("show2").innerText = dados.h2 || "--:--";
  document.getElementById("show3").innerText = dados.h3 || "--:--";

  // Preenche inputs também
  document.getElementById("h1").value = dados.h1 || "";
  document.getElementById("h2").value = dados.h2 || "";
  document.getElementById("h3").value = dados.h3 || "";
}

// Toast botão liberar
function liberar() {
  const toast = document.getElementById("toast");
  toast.style.opacity = "1";

  setTimeout(() => {
    toast.style.opacity = "0";
  }, 2000);
}

// Carrega ao abrir
window.onload = mostrarHorarios;