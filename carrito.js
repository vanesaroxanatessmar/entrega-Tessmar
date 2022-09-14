const productos = [
    {nombre: "Koury", precio: 2600},
    {nombre: "Fantasia", precio:3500},
    {nombre: "Anastasia", precio:4700},
    {nombre: "Belen", precio:3200},
    {nombre: "Yasmin", precio: 2560},
    {nombre: "Andressa", precio:2999},
    {nombre: "Marcela K", precio:3100},
    {nombre: "Plumeti", precio:2500},
    {nombre: "Valery", precio: 2450},
    {nombre: "Vanessa", precio:2000},
    {nombre: "luna", precio:2700},
    {nombre: "Girasol", precio:2100},
];
let carrito = []

let seleccion = prompt("Hola! Deseas comprar alguno de nuestros productos Si o No")

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor, debes ingresar si o no")
    seleccion = prompt("Deseas comprar algo?")
}

if(seleccion == "si"){
    alert("Genial!! ahora nuestra lista de productos")
    let nuestrosProductos = productos.map(
        (productos) => productos.nombre + " " + productos.precio + "$"); 
    alert(nuestrosProductos.join(" - "))
}   else if (seleccion == "no"){
    alert("Gracias por visitar nuestro sitio, hasta pronto.!")
}

while (seleccion !== "no") {
    let productos = prompt("Que deseas llevar? Agraga productos a tu carrito....")
    let precio = 0

    if(productos == "koury" || productos == "Fantasia" || productos == "Anastasia" || productos == "Belen" || productos == "Yasmin" || productos == "Andressa" || productos == "Marcela K" || productos == "Plumeti"  || productos == "Valery" || productos == "Vanessa" || productos == "luna" || productos == "Girasol"){
       
  switch (productos){
    case "koury":
      precio = 2600;
      break;
    case "Fantasia":
        precio = 3500;
      break;
    case "Anastasia":
        precio = 4700;
       break;
    case "Belen":
        precio = 3200;
      break;
    case "Yasmin":
        precio = 2560;
      break;
    case "Andressa":
        precio = 2999;
      break;
    case "Marcela K":
        precio = 3100;
      break;
    case "Plumeti":
        precio = 2500;
        break;
    case "Valery":
        precio = 2450;
      break;
    case "Vanessa":
        precio = 2000;
        break;
    case "luna":
        precio = 2700;
        break;
    case "Girasol":
        precio = 2100;
        break;

    default:
      break;
}
let cantidad = parseInt(prompt("Cuantas prendas deseas llevar?"))

carrito.push({productos, cantidad, precio})
console.log(carrito)

seleccion = prompt("Deseas seguir comprando?")

while(seleccion === "no"){
    alert("Nos vemos.... Gracias por tu compra")
    carrito.forEach((carritoFinal) => {
        console.log(`productos: ${carritoFinal.productos}, cantidad: ${carritoFinal.cantidad}, Precio total a pagar ${carritoFinal.cantidad * carritoFinal.precio}`)
    })
break;
}



const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)
console.log(`el total a pagar por su compre es de: ${total}`)

//alert("el total de la compra es de: " + total)

const regalo = () => {
    if (total >= 15000) {
      alert("Te ganaste un regalo sorpresa")
    }  
}

regalo()

// regalo si supera 15000

}
}

