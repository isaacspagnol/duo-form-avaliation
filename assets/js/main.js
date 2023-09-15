$(document).ready(function () {
  function salvarDados() {
    const nome = $("#nome").val();
    const telefone = $("#telefone").val();
    const email = $("#email").val();
    const assunto = $("#assunto").val();
    const mensagem = $("#mensagem").val();

    const dados = {
      Nome: nome,
      Telefone: telefone,
      Email: email,
      Assunto: assunto,
      Mensagem: mensagem,
    };

    console.log(dados);
  }

  $("#enviar").click(function () {
    salvarDados();
  });
});
