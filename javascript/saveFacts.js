function saveFact() {
    const factText = document.getElementById('favorite-fact').textContent;
  
    // Guardar el texto como favorito en el almacenamiento local
    localStorage.setItem('favorite-fact', factText);
  
    // Redirigir al otro HTML donde se mostrarán los favoritos
    window.location.href = '/html/favorites.html';
  }
