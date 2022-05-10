const fetchItem = async (productId) => {
  const urlId = 'https://api.mercadolibre.com/items/';
  try {
    if (!productId) {
      throw new Error('You must provide an url');
    }
    const call = await fetch(`${urlId}${productId}`);
    const filter = await call.json();
    return filter;
  } catch (err) {
    return err;
  }
  };
  if (typeof module !== 'undefined') {
    module.exports = {
      fetchItem,
    };
  }