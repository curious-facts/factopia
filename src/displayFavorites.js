window.addEventListener("DOMContentLoaded", displayFavorites);

function displayFavorites() {
 
  const favorites = localStorage.getItem("favorites");
  
  if (favorites) {
    const favoritesContainer = document.getElementById("favorites-container");
    const favoritesArray = JSON.parse(favorites);
    
   
    favoritesArray.forEach(favorite => {
      const paragraph = document.createElement("p");
      paragraph.textContent = favorite;
      favoritesContainer.appendChild(paragraph);
    });
  }
}

