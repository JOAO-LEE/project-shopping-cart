const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  const savingItems = '<ol><li>Item</li></ol>'
  it('Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado', async () => {
    saveCartItems(savingItems);
    expect(localStorage.setItem).toHaveBeenCalled(); 
  });

  it('Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado com dois parâmetros', async () => {
    saveCartItems(savingItems);
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', savingItems); 
  });
});
