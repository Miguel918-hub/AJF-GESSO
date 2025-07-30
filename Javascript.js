async function publicarAnuncio() {
  const titulo = document.getElementById("titulo").value;
  const imagem = document.getElementById("imagem").value;
  const descricao = document.getElementById("descricao").value;
  const senha = document.getElementById("senha").value;

  if (senha !== "AJF123456AJF") {
    alert("Senha incorreta para publicar o anúncio.");
    return;
  }

  if (!titulo || !descricao) {
    alert("Preencha o título e a descrição.");
    return;
  }

  // ...
}
