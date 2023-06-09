import { saveFact } from '../src/saveFacts';

describe('saveFact', () => {
  test('should save a fact to favorites and update the favorites-container element', () => {
    // Simular el elemento HTML para el test
    document.body.innerHTML = `
      <div>
        <div id="curious-fact">This is a fact</div>
        <div id="favorites-container"></div>
      </div>
    `;

    // Mock del localStorage
    const localStorageMock = {
      getItem: jest.fn(),
      setItem: jest.fn(),
    };
    global.localStorage = localStorageMock;

    // Ejecutar la función
    saveFact();

    // Comprobar que el favorito se agregó al localStorage correctamente
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'favorites',
      JSON.stringify(['This is a fact'])
    );

    // Comprobar que el favorito se agregó al favorites-container correctamente
    expect(document.getElementById('favorites-container').innerHTML).toBe('<p>This is a fact</p>');
  });

  test('should show an alert if the fact is already in favorites', () => {
    // Simular el elemento HTML para el test
    document.body.innerHTML = `
      <div>
        <div id="curious-fact">This is a fact</div>
        <div id="favorites-container">
          <p>This is a fact</p>
        </div>
      </div>
    `;

    // Mock del localStorage
    const localStorageMock = {
      getItem: jest.fn().mockReturnValue(JSON.stringify(['This is a fact'])),
    };
    global.localStorage = localStorageMock;

    // Mock de la función de alerta
    global.alert = jest.fn();

    // Ejecutar la función
    saveFact();

    // Comprobar que se mostró la alerta correctamente
    expect(alert).toHaveBeenCalledWith('This fact is already in your favorites!');
  });
});
