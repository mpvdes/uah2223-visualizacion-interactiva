function getId(nombre) {
  let id = 99;
  for (let i = 0; i < distritos.length; i++) {
    if (distritos[i].nombre==nombre) {
      id = i;
    }
  }
  return id;
  //nos devuelve el indice del distrito segun su nombre
}
function existeDistrito(nombre) {
  let existe = false;
  for (let i = 0; i < distritos.length; i++) {

    if (distritos[i].nombre==nombre) {
      // print("----------------------exsite"+distritos[i].nombre +"nombre"+nombre +"id"+i);
      existe = true;
    }
  }
  return existe;
}
