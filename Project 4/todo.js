const todoList = document.getElementById('todo-list');
const chocolateItemInput = document.getElementById('chocolate-item');

// Load saved items from local storage
const loadItems = () => {
    const items = JSON.parse(localStorage.getItem('chocolateOrders')) || [];
    todoList.innerHTML = '';
    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = () => removeItem(index);
        li.appendChild(removeBtn);
        todoList.appendChild(li);
    });
}

// Add new item
const addItem = () => {
    const itemText = chocolateItemInput.value.trim();
    if (itemText) {
        const items = JSON.parse(localStorage.getItem('chocolateOrders')) || [];
        items.push(itemText);
        localStorage.setItem('chocolateOrders', JSON.stringify(items));
        chocolateItemInput.value = '';
        loadItems();
    }
}

// Remove item
const removeItem = (index) => {
    const items = JSON.parse(localStorage.getItem('chocolateOrders')) || [];
    items.splice(index, 1);
    localStorage.setItem('chocolateOrders', JSON.stringify(items));
    loadItems();
}

// Initial load of items
loadItems();


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the page from reloading
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation check
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        // Clear the form after submission
        document.getElementById('contactForm').reset();
    } else {
        alert("Please fill in all fields.");
    }
});


const reviews = [
    { name: "Alice", text: "Best ice cream I've ever had!" },
    { name: "Bob", text: "Delicious and creamy flavors." },
    { name: "Charlie", text: "The vanilla is amazing!" },
    { name: "Sophia", text: "The cookies & cream flavor is heavenly!" },
    { name: "James", text: "Loved the unique flavors, especially the caramel swirl!" },
    { name: "Emily", text: "Perfect treat on a hot summer day!" },
    { name: "Liam", text: "The portions are generous, and the flavors are spot on!" },
    
];


function displayReviews() {
    const reviewContainer = document.getElementById('review-list');
    reviewContainer.innerHTML = '';
    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        reviewElement.innerHTML = `<strong>${review.name}:</strong> ${review.text}`;
        reviewContainer.appendChild(reviewElement);
    });
}

document.getElementById('add-review').addEventListener('click', () => {
    const randomReview = reviews[Math.floor(Math.random() * reviews.length)];
    reviews.push(randomReview);
    displayReviews();
});
