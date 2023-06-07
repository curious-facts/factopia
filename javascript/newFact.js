function newFact() {
    fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
        .then(response => response.json())
        .then(data => {

            const result = document.getElementById('curious-fact');
            result.textContent = data.text;
        })
        .catch(error => {
            console.log('Error:', error);
        });
}
