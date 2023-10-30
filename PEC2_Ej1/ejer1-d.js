// Función asíncrona que espera a que se encuentre el elemento en el array
// para mostrar un mensaje de éxito o error por pantalla.
const findOne = async (list, { key, value }, { onSuccess, onError }) => {
  const element = await list.find((element) => element[key] === value);

  element ? onSuccess(element) : onError({ msg: "ERROR: Element Not Found" });
};

// Función que fabrica las dos promesas paralelas.
const findAll = async () => {
  return await Promise.all([
    findOne(users, { key: "name", value: "Carlos" }, { onSuccess, onError }),
    findOne(users, { key: "name", value: "Fermin" }, { onSuccess, onError }),
  ]);
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

// Llama a findAll() para crear las promesas y las ejecuta en paralelo.
// Luego lanza un mensaje por pantalla.
findAll().then(() => {
  console.log("Both calls to findOne have been executed in parallel.");
});
