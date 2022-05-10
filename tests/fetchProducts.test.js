require('../mocks/fetchSimulator');
const { ruleName } = require('stylelint/lib/rules/selector-type-no-unknown');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts',  () => {
  
  it('1. Teste se `fetchProducts` é uma função;', () => {
  expect(fetchProducts).toBeInstanceOf(Function)
  });

  it('2. Execute a função `fetchProducts` com o argumento "computador" e teste se `fetch` foi chamada;', async () => {
    const search = 'computador'
    await fetchProducts(search)
    expect(fetch).toHaveBeenCalled()
  });

  it('3. Testa se ao chamar a função fetchProducts, a função fetch utiliza o endpoint correto', async () => {
  const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  await fetchProducts('computador')
  expect(fetch).toHaveBeenCalledWith(url)
  }) 

  it('4. Teste se o retorno da função `fetchProducts` com o argumento "computador" é uma estrutura de dados igual ao objeto `computadorSearch`, que já está importado no arquivo.', async () => {
    const search = await fetchProducts('computador')
    expect(search).toEqual(computadorSearch)
  })
    it('5. Teste se, ao chamar a função `fetchProducts` sem argumento, retorna um erro com a mensagem: You must provide an url.', async () => {
      const emptySearch = await fetchProducts()
      expect(emptySearch).toEqual(new Error('You must provide an url'))
  });
});