# ISIS3710-ParcialPractico-202620


Cristian Felipe Ochoa Osorio
202415857


| # | Ubicación (archivo y línea) | Herramienta que lo detectó | Regla o principio incumplido | Por qué es un problema o caso especifico | Correción |
| -- | ---- | ---- | -------- | -------- | --------|
| 1  | ./src/components/UserMenu.tsx : 41    |  Lighthouse   | El boton no tiene un nombre accesible.  | Porque para lectores de pantalla no es posible enunciar de que se trata o que es lo que haría el botón.          | Darle un nombre, aparte de las calssName de estilos, darle el atributo name con algo como logOut.        |
| 2  | ./src/app/plans/page.tsx : 14     | Lighthouse     | La imagen de la grilla de planes no tiene un atributo alt.      | Primero, para lectores de pantalla no es posible enunciar de que se trata la imagen, y además cuando no cargue correctamente no se mostrara un mensaje relacionado a la imágen.         | Adicionarle el atributo alt con el nombre que, como se hace en la página dedicada al plan.   |
| 3  | ./src/app/plans/page.tsx : 19 - 39      | Lighthouse     | El contraste de los elementos con respecto al fondo no es suficiente.         | Porque no permite visualizar facilmente la información que se quiere mostrar relacionada al plan.         | Usar un color que tenga un mejor contraste con el fondo blanco, puede ser un color gris más oscuro que el actual o un color negro.        |
| 4  |      |      |          |          |         |
| 5  |      |      |          |          |         |