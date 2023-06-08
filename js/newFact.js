async function newFact() {
    try {
      const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random');
      const data = await response.json();
      
      document.getElementById('curious-fact').textContent = data.text;
    } catch (error) {
      console.log('Error:', error);
    }
  }

  
  