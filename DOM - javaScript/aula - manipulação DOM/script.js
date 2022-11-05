function addContact(){
    const contactSection = document.getElementById('contacts-list')

    const h3 = document.createElement('h3')
    h3.innerText = "contato"

    const ul = document.createElement('ul')

    const nameLi = document.createElement('li')
    nameLi.innerText = "nome"
    const nameInput = document.createElement("input")
    nameInput.type = 'text'
    nameInput.name = "fullName"
    nameLi.appendChild(nameInput)
    ul.appendChild(nameLi)


    const phoneLi = document.createElement('li')
    phoneLi.innerText = "telefone"
    const phoneInput = document.createElement("input")
    phoneInput.type = 'text'
    phoneInput.name = "phone"
    phoneLi.appendChild(phoneInput)
    ul.appendChild(phoneLi)

    contactSection.append(h3, ul)
}