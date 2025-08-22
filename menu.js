document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [];
    const cartTotalElement = document.getElementById('cart-total');
    const cartItemsElement = document.querySelector('.cart-items');
    const placeOrderButton = document.getElementById('place-order');
    const orderSuccessElement = document.getElementById('order-success');
    const bodyElement = document.body;

    // Add to Cart functionality
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const menuItem = this.closest('.menu-item');
            const itemName = menuItem.dataset.name;
            const itemPrice = parseFloat(menuItem.dataset.price);

            // Add item to cart
            cartItems.push({ name: itemName, price: itemPrice });

            // Update cart display
            updateCartDisplay();
        });
    });

    // Update Cart display
    function updateCartDisplay() {
        // Clear the cart display
        cartItemsElement.innerHTML = '';

        let total = 0;
        cartItems.forEach((item, index) => {
            total += item.price;

            // Create list item for each cart item
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;

            // Create Remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.style.marginLeft = '10px';
            removeButton.addEventListener('click', () => {
                // Remove item from cart
                cartItems.splice(index, 1);
                // Update cart display
                updateCartDisplay();
            });

            listItem.appendChild(removeButton);
            cartItemsElement.appendChild(listItem);
        });

        // Update total display
        cartTotalElement.textContent = total.toFixed(2);
    }

    // Place Order functionality
    placeOrderButton.addEventListener('click', () => {
        if (cartItems.length === 0) {
            alert('Your cart is empty. Please add items to your cart.');
            return;
        }

        // Show order success message and dim the background
        orderSuccessElement.style.display = 'block';
        bodyElement.classList.add('dimmed');

        // Clear cart and update display
        cartItems.length = 0; // Clear the cart
        updateCartDisplay();

        // Hide the order success message after 3 seconds and restore background
        setTimeout(() => {
            orderSuccessElement.style.display = 'none';
            bodyElement.classList.remove('dimmed');
        }, 3000);
    });
});
