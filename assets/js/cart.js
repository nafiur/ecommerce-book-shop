// Cart Page JavaScript

$(document).ready(function() {
    loadCartItems();
});

// Load cart items from localStorage
function loadCartItems() {
    const cart = JSON.parse(localStorage.getItem('boierbariCart')) || [];
    const container = $('#cartItemsContainer');
    
    if (cart.length === 0) {
        container.html(`
            <tr>
                <td colspan="5" class="text-center py-5">
                    <div class="text-muted">
                        <i class="fas fa-shopping-basket fa-3x mb-3 text-black-50"></i>
                        <p class="mb-0">আপনার কার্ট খালি!</p>
                        <a href="books.html" class="btn btn-primary btn-sm mt-3 bangla">কেনাকাটা করুন</a>
                    </div>
                </td>
            </tr>
        `);
        updateCartSummary(0);
        return;
    }

    let html = '';
    let subtotal = 0;

    cart.forEach(item => {
        // Ensure quantity exists, default to 1
        item.quantity = item.quantity || 1;
        
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        html += `
            <tr>
                <td class="ps-4 py-3">
                    <div class="d-flex align-items-center gap-3">
                        <img src="${item.image}" alt="${item.title}" class="rounded" style="width: 50px; height: 75px; object-fit: cover;">
                        <div>
                            <h6 class="mb-1 bangla fw-bold text-dark text-decoration-none d-block">${item.title}</h6>
                            <small class="text-muted bangla">${item.author}</small>
                        </div>
                    </div>
                </td>
                <td class="py-3 bangla">৳${toBengaliNumber(item.price)}</td>
                <td class="py-3">
                    <div class="input-group input-group-sm" style="width: 100px;">
                        <button class="btn btn-outline-secondary" type="button" onclick="updateQuantity(${item.id}, 'decrease')">-</button>
                        <input type="text" class="form-control text-center bangla" value="${toBengaliNumber(item.quantity)}" readonly>
                        <button class="btn btn-outline-secondary" type="button" onclick="updateQuantity(${item.id}, 'increase')">+</button>
                    </div>
                </td>
                <td class="py-3 bangla fw-bold">৳${toBengaliNumber(itemTotal)}</td>
                <td class="pe-4 py-3 text-end">
                    <button class="btn btn-link text-danger p-0" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </td>
            </tr>
        `;
    });

    container.html(html);
    updateCartSummary(subtotal);
}

// Update item quantity
function updateQuantity(id, action) {
    let cart = JSON.parse(localStorage.getItem('boierbariCart')) || [];
    const itemIndex = cart.findIndex(item => item.id === id);

    if (itemIndex !== -1) {
        if (action === 'increase') {
            cart[itemIndex].quantity = (cart[itemIndex].quantity || 1) + 1;
        } else if (action === 'decrease') {
            if (cart[itemIndex].quantity > 1) {
                cart[itemIndex].quantity -= 1;
            } else {
                // Optional: Confirm removal if quantity becomes 0
                return; 
            }
        }
        
        localStorage.setItem('boierbariCart', JSON.stringify(cart));
        loadCartItems();
        updateCartCount(); // From main.js
    }
}

// Remove item from cart
function removeFromCart(id) {
    if(!confirm('আপনি কি নিশ্চিত যে এই বইটি কার্ট থেকে মুছে ফেলতে চান?')) return;

    let cart = JSON.parse(localStorage.getItem('boierbariCart')) || [];
    cart = cart.filter(item => item.id !== id);
    
    localStorage.setItem('boierbariCart', JSON.stringify(cart));
    loadCartItems();
    updateCartCount(); // From main.js
}

// Update Cart Summary
function updateCartSummary(subtotal) {
    const shipping = subtotal > 0 ? 50 : 0;
    const total = subtotal + shipping;

    $('#cartSubtotal').text(toBengaliNumber(subtotal));
    $('#shippingCharge').text(toBengaliNumber(shipping));
    $('#cartTotal').text(toBengaliNumber(total));
}

// Checkout Button Handler
$(document).on('click', '.btn-primary:contains("চেকআউট করুন")', function() {
    window.location.href = 'checkout.html';
});
