const aluno = document.querySelector("#aluno");
const idade = document.querySelector("#idade");
const primeira_nota = document.querySelector("#primeira-nota");
const segunda_nota = document.querySelector("#segunda-nota");
const terceira_nota = document.querySelector("#terceira-nota");

const situacao = document.querySelector("#situacao");
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    const nomeAluno = aluno.value.trim();
    const idadeAluno = Number(idade.value);
    const primeiraNota = Number(primeira_nota.value);
    const segundaNota = Number(segunda_nota.value);
    const terceiraNota = Number(terceira_nota.value);

    if (idadeAluno === "" || idadeAluno <= 0) {
        resultado.textContent = "Preencha os dados corretamente.";
        return;
    }
    if (idadeAluno >= 18) {
        resultado.textContent = "Cadastro de " + nomeAluno + ": maior de idade."
    }
    else {
        resultado.textContent = "Cadastro de " + nomeAluno + ": menor de idade";
    }

    let situacaoAluno = "";

    const media = (primeiraNota + segundaNota + terceiraNota) / 3
    console.log("chegou");
    if (media >= 7) {
        situacaoAluno = "Aprovado";
        situacao.classList.add("aprovado");
    }
    else if (media >= 5 && media < 7) {
        situacaoAluno = "Recuperação";
        situacao.classList.add("recuperacao");
    }
    else {
        situacaoAluno = "Reprovado";
        situacao.classList.add("reprovado");
    }
    situacao.textContent = "Situação do aluno: " + situacaoAluno;
});

formulario.addEventListener("reset", function (event) {
    situacao.textContent = "";
    resultado.textContent = "";
    situacao.classList.remove(situacao.className);
});