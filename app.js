/** Molde de Items e Items */
class Item{
    constructor(id, nombre, precio, comida){
        this.id= id;
        this.nombre = nombre;
        this.precio = precio;
        this.comida = comida;
    }
}

const tarta = new Item("tarta", "Tarta", 20, 5);
const tarta2 = new Item("tarta2", "Tarta", 20, 5);
const dona = new Item("dona", "Dona", 8, 2);
const dona2 = new Item("dona2", "Dona", 8, 2);
const postre = new Item("postre", "Postre", 10, 3);
const muffin = new Item("muffin", "Muffin", 5, 2);
const helado = new Item("helado", "Helado", 10, 3);

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

function comprar(Item) {
    if (food >= 10) {
      alert("Estas demasiado lleno como para comer " + Item.nombre + ".");
      return;
    } else if (food + Item.comida > 10) {
      alert("No puedes comer " + Item.nombre + " o te alimentará demasiado.");
      return;
    } else if (Item.precio > cash) {
      alert(
        "No tienes suficiente dinero para poder comprar " + Item.nombre + "."
      );
      return;
    }
    cash = cash - Item.precio;
    food = food + Item.comida;
    let divParaEliminar = document.getElementById(Item.id.toLowerCase());
    divParaEliminar.remove();

  actualizarHTML();
}

function actualizarHTML(){
    elementoCash.innerText = cash;
    elementoFood.innerText = food;
}

function califica(){
  let calificacion = parseInt(prompt("Califique nuestro servicio del 1 al 5"))
  if(calificacion < 1 || calificacion > 5 ||(isNaN(calificacion))){
    alert("La calificación ingresada no es valida, porfavor ingrese un número del 1 al 5")
    return
  }else{
    alert("Gracias por calificar nuestro servicio")
    let ulCalificaciones = document.getElementById("calificaciones");
    let liCalificacion = document.createElement("li");
    liCalificacion.textContent = calificacion + "/5";
    ulCalificaciones.appendChild(liCalificacion);
  }
}