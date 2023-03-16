const persona = {
  nombre: 'Daniel Arrubla',
  edad: 26,
  ciudad: 'Medellín',
  profesion: 'Frontend Developer',
}

console.log(persona)

const presentacion = (obj = persona) => {
  return `Hola, soy ${obj.nombre} ${obj.profesion}, tengo ${obj.edad} años y vivo en ${obj.ciudad}`
}

const mensaje = presentacion()
console.log(mensaje)

persona.hobbies = ['volleyball', 'videojuegos', 'entrenar']
console.log(persona.hobbies)
for (hobby of persona.hobbies) {
  console.log(hobby)
}
