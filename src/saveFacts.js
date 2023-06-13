function saveFact() {
  const factText = document.getElementById("curious-fact").textContent;

  if (factText === "") {
    alert("Empty fact");
    return;
  }


  let favorites = localStorage.getItem("favorites");
  if (!favorites) {
    favorites = [];
  } else {
    favorites = JSON.parse(favorites);
  }

 
  if (favorites.includes(factText)) {
    alert("This fact is already in your favorites!");
    return;
  }


  favorites.push(factText);

  
  localStorage.setItem("favorites", JSON.stringify(favorites));
  document.getElementById("popup").style.display = "none";


 
  const favoritesContainer = document.getElementById("favorites-container");
  const paragraph = document.createElement("p");
  paragraph.textContent = factText;
  favoritesContainer.appendChild(paragraph);
}

