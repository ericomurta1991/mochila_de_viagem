const form = document.getElementById('novoItem')

form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    console.log(evento)

    console.log(evento.target.elements['nome'].value) /*  input name utilizado pra 'nome'*/
    console.log(evento.target.elements['quantidade'].value)


    criarElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)

})

function criarElemento(nome, quantidade){

    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade

    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += nome



    lista.appendChild(novoItem)



}