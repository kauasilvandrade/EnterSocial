import { input_email } from "../../js/global/elements.js"
import { usuarios } from "../global/global.js"

export function registrarUsuario(event) {
  event.preventDefault()

  let email = input_email.value

  if (email !== "") {
    usuarios.email = email

    localStorage.setItem("usuario", JSON.stringify(usuarios))
    const usuarioSalvo = localStorage.getItem("usuario")
    const usuarioConvertido = JSON.parse(usuarioSalvo)

    input_email.value = ""
  } else {
    alert("Digite um email válido!")
  }

}

export function abrirModal() {
  let email = input_email.value

  const usuarioSalvo = localStorage.getItem("usuario")
  const usuarioConvertido = JSON.parse(usuarioSalvo)

  if (email == usuarioConvertido.email) {
    alert("Deu certo")
  } else {
    alert("Deu errado")
  }
}