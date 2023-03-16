const receta = {}
receta.nombre = 'Sandwich'
receta.ingredientes = []
receta.ingredientes.push({ nombre: 'Pan', cantidad: 2 })
receta.ingredientes.push({ nombre: 'Queso', cantidad: 1 })

console.log(receta.ingredientes[0].nombre) // 'Pan'
console.log(receta.ingredientes.reduce((acc, curr) => acc + curr.cantidad, 0)) // 3
