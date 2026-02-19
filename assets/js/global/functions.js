export function getUsuarios() {
  const usuarios_salvos = localStorage.getItem("usuarios")
  return usuarios_salvos ? JSON.parse(usuarios_salvos) : []
}