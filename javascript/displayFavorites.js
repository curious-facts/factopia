window.addEventListener("DOMContentLoaded", displayFavorites);

function displayFavorites() {
  // Obtener el array de favoritos del almacenamiento local
  const favorites = localStorage.getItem("favorites");
  
  if (favorites) {
    const favoritesContainer = document.getElementById("favorites-container");
    const favoritesArray = JSON.parse(favorites);
    
    // Crear un párrafo para cada favorito y agregarlo al contenedor
    favoritesArray.forEach(favorite => {
      const paragraph = document.createElement("p");
      paragraph.textContent = favorite;
      favoritesContainer.appendChild(paragraph);
    });
  }
}

// window.addEventListener("beforeunload", clearFavorites);

// function clearFavorites() {
//   localStorage.removeItem("favorites");
// }
