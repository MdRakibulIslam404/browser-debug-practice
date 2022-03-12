// get inputs value
const addToCart = () => {
    const product = document.getElementById("product").value;
    const price = document.getElementById("price").value;
    // const price = parseFloat(priceValue);

    displayProduct(product, price);
    setStorage(product, price);
};

// display products
const displayProduct = (product, price) => {
    // console.log(product, price);
    const products = document.getElementById("products");
    const li = document.createElement("li");
    li.innerText = `${product} ${price}`;
    products.appendChild(li);

};

// get localStorage
const getStorage = () => {
    const productsCart = localStorage.getItem("products");
    let cart;
    if (productsCart) {
        cart = JSON.parse(productsCart);
    }
    else {
        cart = {};
    }
    // console.log(cart);
    return cart;
};

// set localStorage
const setStorage = (product, price) => {
    // console.log(product, price);
    const cart = getStorage();
    cart[product] = price;
    // console.log(cart);
    const cartString = JSON.stringify(cart);
    localStorage.setItem("products", cartString);
};

// keep products in UI
const keepProducts = () => {
    const cart = getStorage();
    for (const product in cart) {
        displayProduct(product, 1000);
        console.log(product);
    }
    console.log(cart);
};
keepProducts();