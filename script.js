function gerarCaractereAleatorio() {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$*+.";
    const indice = Math.floor(Math.random() * caracteres.length);
    return caracteres.charAt(indice);
}


function gerarSenha(comprimento) {
    let senha = "";
    for (let i = 0; i < comprimento; i++) {
      senha += gerarCaractereAleatorio();
    }
    return senha;
}


const botao = document.getElementById("botao");
const senha = document.getElementById("senha");
const resultado = document.getElementById("resultado");
const msg = document.getElementById("msg");

botao.addEventListener("click", function() {
  const comprimento = document.getElementById("range").value;
  senha.innerHTML = gerarSenha(comprimento);
  resultado.style.display = "flex";
  msg.style.display = "block";
});


resultado.addEventListener("click", function() {
  let textoCopiado = document.getElementById("senha");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999);
  document.execCommand("copy");
})