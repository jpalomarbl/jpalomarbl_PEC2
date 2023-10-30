// Declara la función findOne como una arrow function
const findOne = (list, { key, value }, { onSuccess, onError }) => {
  // Espera dos segundos y realiza la búsqueda
  setTimeout(() => {
    const element = list.find((element) => element[key] === value);
    // Si encuentra el elemento, lanza la función onSuccess, si no, lanza onError con el mensaje de error.
    element ? onSuccess(element) : onError({ msg: "ERROR: Element Not Found" });
  }, 2000);
};

// Declara la función onSuccess como una arrow function.
// Toma como parámetro un objeto que contiene un elemento y e imprime su valor por pantalla.
const onSuccess = ({ name }) => console.log(`user: ${name}`);
// Declara la función onError como una arrow function.
// Toma como parámetro un objeto que contiene un elemento con el mensaje de error y lo imprime.
const onError = ({ msg }) => console.log(msg);

// Declara un array de objetos
const users = [
  {
    name: "Carlos",
    rol: "Teacher",
  },
  {
    name: "Ana",
    rol: "Boss",
  },
];

// findOne encontrará el objeto con name: "Carlos" e imprimirá "name: Carlos".
console.log("findOne success");
findOne(users, { key: "name", value: "Carlos" }, { onSuccess, onError });

// findOne no encontrará el objeto con name: "Fermin" e imprimirá "ERROR: Element Not Found".
console.log("findOne error");
findOne(users, { key: "name", value: "Fermin" }, { onSuccess, onError });