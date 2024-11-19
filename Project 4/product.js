const products = [
    { name: 'Chocolate Chip Cookie', flavor: 'chocolate', price: 3.5, rating: 4.8, image: './images/chocolate 1.jpg' },
    { name: 'Red Velvet Cookie Delight', flavor: 'cookie', price: 3.0, rating: 4.6, image: './images/cookie 3.jpg' },
    { name: 'Strawberry Almond Crunch', flavor: 'strawberry', price: 3.2, rating: 4.7, image: './images/strawberry 3.jpg' },
    { name: 'Cherry Chocolate', flavor: 'chocolate', price: 3.8, rating: 4.5, image: './images/chocolate 4.jpg' },
    { name: 'French Vanilla', flavor: 'vanilla', price: 3.5, rating: 4.4, image: './images/vanilla 1.jpg' },
    { name: 'Strawberry Coconut Delight', flavor: 'strawberry', price: 4.0, rating: 4.9, image: './images/strawberry 2.jpg' },
    { name: 'Belgian Cookie Better', flavor: 'cookie', price: 3.9, rating: 4.3, image: './images/cookie 2.png' },
    { name: 'Matcha Mink Fusion', flavor: 'mint', price: 4.5, rating: 4.2, image: './images/mint 2.jpg' },
    { name: 'Honey Vanilla', flavor: 'vanilla', price: 3.7, rating: 4.8, image: './images/vanilla 2.jpg' },
    { name: 'Chocolate Fudge', flavor: 'chocolate', price: 4.2, rating: 4.7, image: './images/chocolate 3.jpg' },
    { name: 'Mint Oreo Crunch', flavor: 'mint', price: 3.3, rating: 4.0, image: './images/mint 1.jpg' },
    { name: 'Strawberry Swirl', flavor: 'strawberry', price: 4.3, rating: 4.9, image: './images/strawberry 1.jpg' },
    { name: 'Nutella Peanut Butter', flavor: 'cookie', price: 4.1, rating: 4.5, image: './images/cookie 1.jpg' },
    { name: 'Salted Vanilla', flavor: 'vanilla', price: 3.6, rating: 4.6, image: './images/vanilla 3.jpg' },
    { name: 'Chocolate Chunk Cookie', flavor: 'chocolate', price: 3.8, rating: 4.4, image: './images/chocolate 2.jpg' }
];

function displayProducts(productsToDisplay) {
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = '';
    productsToDisplay.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Flavor: ${product.flavor}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
            <p>Rating: ${product.rating.toFixed(2)} ⭐</p>
        `;
        productContainer.appendChild(productElement);
    });
}

function filterAndSortProducts() {
    const flavor = document.getElementById('flavorFilter').value;
    const sortPrice = document.getElementById('sortPrice').value;
    const sortRating = document.getElementById('sortRating').value;

    // Filter by flavor
    let filteredProducts = flavor === 'all'
        ? products
        : products.filter(product => product.flavor === flavor);

    // Sort by price
    if (sortPrice === 'low-to-high') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortPrice === 'high-to-low') {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    // Sort by rating
    if (sortRating === 'high-to-low') {
        filteredProducts.sort((a, b) => b.rating - a.rating);
    } else if (sortRating === 'low-to-high') {
        filteredProducts.sort((a, b) => a.rating - b.rating);
    }

    displayProducts(filteredProducts);
}

// Event listeners for filters and sorting
document.getElementById('flavorFilter').addEventListener('change', filterAndSortProducts);
document.getElementById('sortPrice').addEventListener('change', filterAndSortProducts);
document.getElementById('sortRating').addEventListener('change', filterAndSortProducts);

// Initial display
displayProducts(products);
