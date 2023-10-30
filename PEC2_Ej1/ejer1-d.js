// Función asíncrona que busca el elemento dentro del array.
const findElement = async (list, { key, value }, { onSuccess, onError }) => {
  const element = await list.find((element) => element[key] === value);

  return element;
};

// Función asíncrona que espera a que se encuentre el elemento en el array
// para mostrar un mensaje de éxito o error por pantalla.
const findOne = async (list, { key, value }, { onSuccess, onError }) => {
  const element = await list.find((element) => element[key] === value);

  element ? onSuccess(element) : onError({ msg: "ERROR: Element Not Found" });
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
