const ivaMercado = 1.10
const ivaElectrodomesticos = 1.20

let totalCompra = 0;  // Variable para rastrear el total de la compra

function escogerProductos() {
    alert('🛒🛒🛒 HOY DIA SIN IVA, APROVECHA ESTA PROMOCION DEL GOBIERNO COLOMBIANO🛒🛒🛒')
    alert('Marca 1: 🍎🍗🥚 si quieres comprar mercado, o marca 2:🖥️🛠️🛁 si quieres comprar electrodomesticos')
    let tipoProducto = parseInt(prompt('1 o 2'))
    if (tipoProducto === 1) {
        alert('ESCOGISTE MERCADO:🍎, Vamos hacer el mercado que necesitas para tu Hogar🏠')
        mercado()
    } else if (tipoProducto === 2) {
        alert('ESCOGISTE ELECTRODOMESTICOS:🖥️,  Vamos a escoger los Electrodomesticos que quieres con descuento')
        electrodomesticos()
    }

}

let huevos = 20000
let leche = 50000

function mercado() {
    alert('LOS PRODUCTOS DE LA CATEGORÍA MERCADO NORMALMENTE TIENEN UN IVA DEL 10%, ¡¡HOY NO TIENES QUE PAGARLO!!');

    let cantidadHuevos = 0
    let cantidadLeche = 0

    if (confirm('🍳 Cubeta de huevos Triple A por 24 und, \n Precio: $' + huevos + '\n¿Quieres añadirlo a la cesta?')) {
        cantidadHuevos = parseInt(prompt('¿Cuantas cubetas de huevos quieres comprar?'));
        alert('Añadido al carrito, compraste ' + cantidadHuevos + ' Cubetas de huevos \nPrecio normal: ' + huevos * cantidadHuevos + '\nPrecio sin iva = $' + parseInt((huevos * cantidadHuevos) / ivaMercado))
    }

    if (cantidadHuevos === 0 || !cantidadHuevos) {
        alert('no quieres huevos, vamos con el siguieente pruducto')
    }
   
    if (confirm('Paca de Leche 🥛 entera Alquería por 24 und, \n Precio: $' + leche + '\n¿Quieres añadirlo a la cesta?')) {
        cantidadLeche = parseInt(prompt('¿Cuantas pacas de leche quieres comprar?'))
        alert('Añadido al carrito, compraste ' + cantidadLeche + ' Pacas de leche \nPrecio con iva: ' + leche * cantidadLeche + '\nHoy las llevas sin iva por = $' + parseInt((leche * cantidadLeche) / ivaMercado))
    }

    let totalCompra = parseInt((cantidadHuevos * huevos + cantidadLeche * leche) / ivaMercado)

    if (totalCompra > 0) {
        alert('Total de la compra: $ ' + totalCompra)
    } else {
        alert('No seleccionaste ningun producto. Tu carrito esta vacio.')
    }
}

let televisor = 2000000
let nevera = 1500000

function electrodomesticos() {
    alert('LOS PRODUCTOS DE LA CATEGORÍA ELECTRODOMESTICOS NORMALMENTE TIENEN UN IVA DEL 20%, ¡¡HOY NO TIENES QUE PAGARLO!!');

    let cantidadTelevisores = 0
    let cantidadNeveras = 0

    if (confirm('Tv Samsung curve 55 pulgadas, \n Precio: $' + televisor + '\n¿Quieres añadirlo a la cesta?')) {
        cantidadTelevisores = parseInt(prompt('¿Cuantos televisores quieres comprar?'));
        alert('Añadido al carrito')
    }

    if (cantidadTelevisores === 0 || !cantidadTelevisores) {
        alert('no quieres un televisor nuevo, vamos con el siguieente pruducto')
    }

    if (confirm('Nevera LG, \n Precio: $' + nevera + '\n¿Quieres añadirlo a la cesta?')) {
        cantidadNeveras = parseInt(prompt('¿Cuantas Neveras quieres comprar?'))
        alert('Añadido al carrito')
    }
    if (cantidadNeveras === 0 || !cantidadNeveras) {
        alert('No quieres neveras')
    }

    let totalCompra = parseInt((cantidadTelevisores * televisor + cantidadNeveras * nevera) / ivaElectrodomesticos)

    if (totalCompra > 0) {
        mostrarProductosComprados(['Televisor(es)', 'Nevera(s)'], [cantidadTelevisores, cantidadNeveras], [televisor, nevera], [ivaElectrodomesticos, ivaElectrodomesticos]);
        alert(`Total valor de la compra: $ ${parseInt((cantidadTelevisores*televisor+cantidadNeveras*nevera)/ivaElectrodomesticos)}`)
    } else {
        alert('No seleccionaste ningún producto. Tu carrito está vacío.');
    }
    

}


function mostrarProductosComprados(productos, cantidad, precio, iva) {
    for (let i = 0; i < productos.length; i++) {
        if (cantidad[i] > 0) {
            const subtotal = cantidad[i] * precio[i];
            const subtotalSinIVA = parseInt(subtotal / iva[i]);
            alert(`Compraste ${parseInt(cantidad[i])} ${productos[i]} por un total de $${parseInt(subtotal)}. Precio sin IVA: $${subtotalSinIVA}`);
        }
    }
}


// Inicia el proceso escogiendo el tipo de productos


escogerProductos()

