Observa que se han creado funciones handle en el fichero controlador
(todo.controller.js), las cuales son pasadas como parámetro. Esto es debido al problema con el cambio de contexto (this) que existe en JavaScript. Ahora mismo si no tienes muy claro que está sucediendo, revisa qué hacen las “fat-arrow” de ES6 sobre el objeto this, y prueba a cambiar el código para comprender qué está sucediendo cuando se modifica la siguiente línea:

```js
this.view.bindAddTodo(this.handleAddTodo);
```

Por esta:

```js
this.view.bindAddTodo(this.service.addTodo);
```

**¿Por qué es el valor de this es undefined?**

En el contexto de las funciones flecha, el ámbito de *this* es en el que se define la función, no como en cualquier otro caso, en el que sería el ámbito en el que se ejecuta la misma.

Es decir, en este caso, el ámbito de *this* es la clase *TodoController*, donde no existe ningún atributo *service.addTodo* (por lo que JS lo interpreta como *undefined*), pero sí la función flecha *handleAddTodo*.