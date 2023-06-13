![Logotipo Factopia](/img/logo.png)

Hemos creado una página web que llama a una API externa, que nos devuelve textos sobre hechos curiosos de manera aleatoria. 

##Para el usuario/ funcionalidad
1.  Cada vez que se hace click en el botón "New Facts", aparecen frases con hechos curiosos de forma aleatoria.
2.  Si deseas conservar alguno de las frases, puedes hacerlo con un click en el botón "Add to your favorites".
3.  Puedes acceder a tus favoritos guardados mediante el botón "My favorites" que se encuentra en el header de la página de inicio.
4.  Para volver a la página de inicio, debes hacer click en el logotipo de nuestra organización, que se encuentra en el header arriba a mano izquierda.   





##Código

```

   function saveFact() {
  const factText = document.getElementById("curious-fact").textContent;

  // Obtener el array de favoritos del almacenamiento local
  let favorites = localStorage.getItem("favorites");
  if (!favorites) {
    favorites = [];
  } else {
    favorites = JSON.parse(favorites);
  }

  // Verificar si el favorito ya existe en el array
  if (favorites.includes(factText)) {
    alert("This fact is already in your favorites!");
    return;
  }

  // Agregar el nuevo favorito al array
  favorites.push(factText);

  // Guardar el array de favoritos actualizado en el almacenamiento local
  localStorage.setItem("favorites", JSON.stringify(favorites));
  document.getElementById("popup").style.display = "none";


  // Mostrar el nuevo favorito en la página actual
  const favoritesContainer = document.getElementById("favorites-container");
  const paragraph = document.createElement("p");
  paragraph.textContent = factText;
  favoritesContainer.appendChild(paragraph);
}
  ```



##Figma

###Desktop
![Prototipo Desktop](/img/Desktop.jpeg)

###Movil
![Prototipo Movil](/img/movil.jpeg)





 ##Herramientas utilizadas
 <h4 align="center">
 ✔️  HTML 
</h4>
<h4 align="center">
✔️ CSS 
</h4>
<h4 align="center">
✔️ Javascript 
</h4>
<h4 align="center">
✔️ Visual Studio Code 
</h4>
<h4 align="center">
✔️Git / Github 
</h4>
<h4 align="center">
✔️ Google 
</h4>
<h4 align="center">
✔️ Node
</h4>




## Proyecto desarrollado por:

Jeaneth Sanchez y Marga Mbande   

