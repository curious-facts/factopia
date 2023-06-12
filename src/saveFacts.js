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

