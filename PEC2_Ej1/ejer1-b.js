// Declara la función findOne como una arrow function
const findOne = async (list, { key, value }, { onSuccess, onError }) => {
  // Realiza la búsqueda
  const element = list.find((element) => element[key] === value);

  // Retorna una promesa
  return new Promise((resolve, reject) => {
    // Si la búsqueda encontró el elemento, resuelve la promesa
    // tomando el elemento encontrado como argumento.
    if (element !== undefined) resolve(element);
    // Si la búsqueda falla, rechaza la promesa.
    else reject();
  });
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
findOne(users, { key: "name", value: "Carlos" }, { onSuccess, onError })
  // Despues de resolver la promesa, lanza la función onSuccess.
  .then((element) => {
    onSuccess(element);
  })
  // Si la promsa se rechaza, lanza onError.
  .catch(() => {
    onError({ msg: "ERROR: Element Not Found" });
  });

// findOne no encontrará el objeto con name: "Fermin" e imprimirá "ERROR: Element Not Found".
console.log("findOne error");
findOne(users, { key: "name", value: "Fermin" }, { onSuccess, onError })
  // Despues de resolver la promesa, lanza la función onSuccess.
  .then((element) => {
    onSuccess(element);
  })
  // Si la promsa se rechaza, lanza onError.
  .catch(() => {
    onError({ msg: "ERROR: Element Not Found" });
  });
