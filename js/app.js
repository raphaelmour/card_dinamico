const formulario = document.querySelector('form')
const contas = document.querySelector('.container');
const contasCriadas = []

formulario.addEventListener('submit', function (event) {

    const dados = Object.fromEntries(new FormData(formulario).entries())

    adicionarCard(dados);
    event.preventDefault();
})



function adicionarCard(dados) {


    contasCriadas.push(dados);

    contas.innerHTML = ""
    contasCriadas.forEach((conta) => {
        const card = document.createElement('div')
        card.innerHTML = `<div class="card fundo">
                         <div class="titulo">
                             <h3>${conta.nome}</h3>
                         </div>
                         <div class="imagem">
                                 <img src="${conta.link}" alt="">
                             </div>
                         <div class="descricao">
                             <p>${conta.desc}</p>
                         </div>`
        card.setAttribute("class", "card");
        contas.appendChild(card);
        let primeiroPost = contas.firstChild;
        contas.insertBefore(card, primeiroPost)

    });
}
