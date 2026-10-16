class Producto {
  constructor(fruta, precio, calidad, stock) {
    this.fruta = fruta;
    this.precio = precio;
    this.calidad = calidad;
    this.stock = stock;
  }

  vender(cantidad) {
    if (cantidad <= this.stock) {
      this.stock = this.stock - cantidad;
      console.log(`Venta realizada: ${cantidad} unidad(es) de "${this.fruta}".`);
    } else {
      console.log(`Stock insuficiente para "${this.fruta}". Stock disponible: ${this.stock}`);
    }
  }

  sumarIva() {
    this.precio = this.precio * 1.21;
  }
}

const producto1 = new Producto("Manzana", 2500, "Excelente", 20);
const producto2 = new Producto("Frutilla", 2000, "Buena", 5);
const producto3 = new Producto("Pera", 500, "Regular", 2);

const frutas = [producto1, producto2, producto3];

alert('Tenemos: Manzana, Frutilla y Pera');
const buscado = prompt('¿Qué fruta deseas?');


const productoEncontrado = frutas.find(
  (p) => p.fruta.toLowerCase() === buscado.toLowerCase()
);

if (productoEncontrado) {
  console.log(`${productoEncontrado.fruta} está en stock.`);
  
  productoEncontrado.vender(1);
  
  productoEncontrado.sumarIva();
  console.log(`Precio final con IVA: $${productoEncontrado.precio.toFixed(2)}`);

} else {
  console.log(`"${buscado}" no está en nuestro catálogo.`);
}

function listarStock(lista) {
  console.log('--- Stock actual ---');
  for (const elemento of lista) {
    console.log(`Producto: ${elemento.fruta} | Calidad: ${elemento.calidad} | Stock disponible: ${elemento.stock}`);
  }
  console.log(`Total: ${lista.length} variedades de frutas evaluadas.`);
}

listarStock(frutas);