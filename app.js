/** Molde de Items e Items */
class Item{
    constructor(nombre, precio, comida){
        this.nombre = nombre;
        this.precio = precio;
        this.comida = comida;
    }
}

const tarta = new Item("Tarta", 20, 5);
const tarta2 = new Item("Tarta", 20, 5);
const dona = new Item("Dona", 8, 2);
const dona2 = new Item("Dona", 8, 2);
const postre = new Item("Postre", 10, 3);
const muffin = new Item("Muffin", 5, 2);
const helado = new Item("Helado", 10, 3);

/** Inventario de Tienda */

const inventario = [tarta, dona, postre, muffin, helado];

/** Plata */

let cash = 45

/** Hambre */

let food = 0

// Elementos

const elementoCash = document.querySelector("#cash");
elementoCash.innerText= cash

const elementoFood = document.querySelector("#food");
elementoFood.innerText= food


//Funciones 

function comprar(Item){
    if(cash - Item.precio > 0 && food < 10){
        cash = cash - Item.precio;
        food = food + Item.comida;
        let index= inventario.indexOf(Item);
        actualizarHTML();
    }else if(cash - Item.precio < 0){
        alert("No tienes suficiente dinero para poder comprar " + Item.nombre);
        return;
    }else if (food >= 10){
        alert("Estas demasiado lleno como para comer " + Item.nombre);
        return;
    }
}

function actualizarHTML(){
    elementoCash.innerText = cash;
    elementoFood.innerText = food;
}