import { btnRegister, input_email, closeModal } from "../../global/elements.js"

export function registrarUsuario(event) {
  event.preventDefault()
  
  const email = input_email.value.trim()
  
  if (!email) {
    alert("Digite um email válido!")
    return
  }
  
  const usuarios_salvos = localStorage.getItem("usuarios")
  const lista_de_usuarios = usuarios_salvos ? JSON.parse(usuarios_salvos) : []
  
  const email_existe = lista_de_usuarios.some(
    (usuario) => usuario.email === email,
  )

  if (email_existe) {
    const modalId = btnRegister.getAttribute("data-modal")
    const modal = document.getElementById(modalId)

    modal.showModal()
    return
  }

  const novo_usuario = {
    email: email,
  }
  
  lista_de_usuarios.push(novo_usuario)
  
  localStorage.setItem("usuarios", JSON.stringify(lista_de_usuarios))
  
  input_email.value = ""
  
  alert("Usuário cadastrado com sucesso!")

  window.location.href = "index.html"
}

btnRegister.addEventListener("click", registrarUsuario)

closeModal.addEventListener("click", () => {
  const modalId = closeModal.getAttribute("data-modal")
  const modal = document.getElementById(modalId)
  modal.close()
  input_email.value = ""
})