import { displayFavorites } from '../src/displayFavorites';

describe('displayFavorites', () => {
  test('should display the favorites in the favorites-container element', () => {
    // Simular el elemento HTML para el test
    document.body.innerHTML = `
      <div>
        <div id="favorites-container"></div>
      </div>
    `;

    // Mock del localStorage
    const localStorageMock = {
      getItem: jest.fn().mockReturnValue(JSON.stringify(['Favorite 1', 'Favorite 2'])),
    };
    global.localStorage = localStorageMock;

    // Ejecutar la función
    displayFavorites();

    // Comprobar que los favoritos se agregaron al favorites-container correctamente
    expect(document.getElementById('favorites-container').innerHTML).toBe('<p>Favorite 1</p><p>Favorite 2</p>');
  });

  test('should not display favorites if there are no favorites in localStorage', () => {
    // Simular el elemento HTML para el test
    document.body.innerHTML = `
      <div>
        <div id="favorites-container"></div>
      </div>
    `;

    // Mock del localStorage
    const localStorageMock = {
      getItem: jest.fn().mockReturnValue(null),
    };
    global.localStorage = localStorageMock;

    // Ejecutar la función
    displayFavorites();

    // Comprobar que no se agregaron favoritos al favorites-container
    expect(document.getElementById('favorites-container').innerHTML).toBe('');
  });
});
