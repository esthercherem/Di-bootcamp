El script filtra y muestra una lista de robots basada en
entrada del usuario en un cuadro de búsqueda (search box):


El script comienza definiendo dos variables usando la variable const: cardContainer y searchBox.
A cardContainer se le asigna el elemento DOM con el id 'cardContainer' usando document.getElementById()
method, que hace una referencia al elemento HTML con la identificación especificada. Del mismo modo, 
searchBox es asignado al elemento DOM con el id 'searchBox'.


Despues, se define una función llamada filterRobots utilizando una sintaxis de función de flecha. 
Esta función es responsable de filtrar la lista de robots según el valor de entrada proporcionado en el 
cuadro de búsqueda (search box).


El cardContainer se borra por default estableciendo su propiedad innerHTML en un empty string, efectivamente
eliminando todas las tarjetas de robot mostradas anteriormente para solo mostrar las tarjetas del nuevo
array creado por el filtro.


Dentro de la función filterRobots, el valor de la entrada en el cuadro de búsqueda (serach box) se recupera 
y se convierte en minúsculas usando el método toLowerCase(), y es almacenado en una variable llamada 
inputValue.


El array de robots se filtra mediante el método filter(), que devuelve un nuevo array que contiene solo 
los elementos que satisfacen la condición dada. En este caso, el robot.name se convierte a minúsculas 
y se comprueba si incluye el valor de entrada (inputValue). El array filtrado se almacena en un
variable llamada filteredRobots.


Se usa un loop para iterar a través del filteredRobots array usando el método forEach(). Para cada robot
en el array, se crea un nuevo elemento de tarjeta (card) utilizando el método document.createElement() 
y se le asigna un nombre de clase de 'card' usando la propiedad className.


Dentro del loop, los elementos de imagen, nombre, nombre de usuario y correo electrónico se crean 
utilizando document.createElement() y sus propiedades como src, alt, textContent se establecen usando 
las propiedades correspondientes del robot object.

The image, name, username, and email elements are appended as child elements to the card element using 
the appendChild() method.

Los elementos de imagen, nombre, nombre de usuario y correo electrónico se agregan (append) como 
elementos secundarios al elemento de la tarjeta (card) usando el método appendChild().


Finalmente, el card element se agrega como un elemento secundario al elemento cardContainer 
usando el método appendChild().

Después de definir la función filterRobots, se agrega un detector de eventos (event listener) al elemento 
searchBox usando el método addEventListener(). El detector de eventos escucha el evento de 'entrada', 
que se activa siempre que cambie el valor de la entrada en el cuadro de búsqueda. Cuando se activa el 
evento, la función filterRobots se llama para filtrar y mostrar los robots en función del valor de 
entrada actualizado.

Por último, la función filterRobots se llama una vez para crear el conjunto inicial de tarjetas en la 
carga de la página, que muestra todos los robots antes de que se proporcione cualquier entrada del 
usuario en el cuadro de búsqueda.