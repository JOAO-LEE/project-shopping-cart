const shoppingSection = document.querySelector('.items');
const cartOl = document.querySelector('.cart__items');
const emptyButton = document.querySelector('.empty-cart');
 
   emptyButton.addEventListener('click', () => {
    cartOl.innerHTML = '';
    localStorage.removeItem('cartItems');
  });
function itemsSave() {
saveCartItems(cartOl.innerHTML);
}

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}
function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  return event.target.remove();
  // save
}
function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}
async function cartObject(productId) {
  const targetads = productId.target.parentElement;
  const createItems = getSkuFromProductItem(targetads);
  const fetchCall = await fetchItem(createItems);
  const createLi = createCartItemElement(fetchCall);
  cartOl.append(createLi);
  itemsSave();
}

function createProductItemElement({ id: sku, title: name, thumbnail: image, price: salePrice }) {
  const section = document.createElement('section');
  section.className = 'item';
  
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createCustomElement('span', 'price__text', `R$${salePrice}`));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'))
  .addEventListener('click', cartObject);
  
shoppingSection.appendChild(section);
}

function getItem(productName) {
  const loadingText = document.querySelector('.loading');
  fetchProducts(productName).then(({ results }) => results.map((element) => {
    const object = {
      id: element.id, 
      title: element.title,
      price: element.price,
      thumbnail: element.thumbnail,
    };
    loadingText.remove();
    return createProductItemElement(object);  
  }));
  }

function getFromLocalStorage() {
  const lisToRemove = getSavedCartItems();
  cartOl.innerHTML = lisToRemove;
  const liEl = document.querySelectorAll('.cart__item');
  liEl.forEach((value) => {
    value.addEventListener('click', cartItemClickListener);
  });
  }

  window.onload = () => {
    getItem('computador');
    getFromLocalStorage();
    // lisToRemove();
  };