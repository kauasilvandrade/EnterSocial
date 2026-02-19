import { btnLogin } from "../../global/elements.js"
import { input_email } from "../../global/elements.js"
import { getUsuarios } from "../../global/functions.js"

export function abrirModal(event) {
  event.preventDefault()

  // Validação de email
  const email = input_email.value.trim()
  const usuarios = getUsuarios()
  const procurar_email = usuarios.find((e) => e.email === email)

  // Abrir modal e validação de código
  if (procurar_email) {
    const code = 123456

    const modalId = btnLogin.getAttribute("data-modal")
    const modal = document.getElementById(modalId)

    modal.showModal()
  } else {
    alert("Digite um email válido!")
    input_email.value = ""
    return
  }
}

btnLogin.addEventListener("click", abrirModal)