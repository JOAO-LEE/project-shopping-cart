const fetchProducts = async (product) => {
  const url = 'https://api.mercadolibre.com/sites/MLB/search?q=';
  try {
  if (!product) {
    throw new Error('You must provide an url');
  }
    const chamada = await fetch(`${url}${product}`);
    const call = await chamada.json();
    return call;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
