document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [];
    const cartTotalElement = document.getElementById('cart-total');
    const cartItemsElement = document.querySelector('.cart-items');
    const placeOrderButton = document.getElementById('place-order');
    const orderSuccessElement = document.getElementById('order-success');
    const bodyElement = document.body;

  
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const menuItem = this.closest('.menu-item');
            const itemName = menuItem.dataset.name;
            const itemPrice = parseFloat(menuItem.dataset.price);

          
            cartItems.push({ name: itemName, price: itemPrice });

    
            updateCartDisplay();
        });
    });


    function updateCartDisplay() {

        cartItemsElement.innerHTML = '';

        let total = 0;
        cartItems.forEach((item, index) => {
            total += item.price;

         
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;

        
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.style.marginLeft = '10px';
            removeButton.addEventListener('click', () => {
             
                cartItems.splice(index, 1);
              
                updateCartDisplay();
            });

            listItem.appendChild(removeButton);
            cartItemsElement.appendChild(listItem);
        });

      
        cartTotalElement.textContent = total.toFixed(2);
    }

    
    placeOrderButton.addEventListener('click', () => {
        if (cartItems.length === 0) {
            alert('Your cart is empty. Please add items to your cart.');
            return;
        }

       
        orderSuccessElement.style.display = 'block';
        bodyElement.classList.add('dimmed');


        cartItems.length = 0; 
        updateCartDisplay();

        
        setTimeout(() => {
            orderSuccessElement.style.display = 'none';
            bodyElement.classList.remove('dimmed');
        }, 3000);
    });
});

