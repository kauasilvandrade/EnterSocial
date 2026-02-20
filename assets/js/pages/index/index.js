import { btnConfirmCode, btnLogin, input_email, inputCode } from "../../global/elements.js"
import { getUsuarios } from "../../global/functions.js"

function abrirModal(event) {
  event.preventDefault()

  // Validação de email
  const email = input_email.value.trim()
  const usuarios = getUsuarios()
  const procurar_email = usuarios.find((e) => e.email === email)

  // Abrir modal e validação de código
  if (procurar_email) {

    const modalId = btnLogin.getAttribute("data-modal")
    const modal = document.getElementById(modalId)

    modal.showModal()
    
    let emailUser = document.getElementById("emailUser")
    emailUser.innerText = `${email}`

  } else {
    alert("Digite um email válido!")
    input_email.value = ""
    return
  }
}

function validarCodigo() {
  const code = 123456
  const codeUser = inputCode.value.trim()

  if (codeUser == code) {
      window.location.href = "welcome.html"
  } else {
    alert("Cógido inválido!")
    codeUser.value = ""
  }

}

btnLogin.addEventListener("click", abrirModal)
btnConfirmCode.addEventListener("click", validarCodigo)