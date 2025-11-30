// Checkout Page JavaScript

$(document).ready(function() {
    loadCheckoutSummary();
    
    // Handle Form Submission
    $('#checkoutForm').on('submit', function(e) {
        e.preventDefault();
        placeOrder();
    });
});

// Load Checkout Summary
function loadCheckoutSummary() {
    const cart = JSON.parse(localStorage.getItem('rokomariCart')) || [];
    const container = $('#checkoutItems');
    
    if (cart.length === 0) {
        window.location.href = 'books.html'; // Redirect if cart is empty
        return;
    }

    let html = '';
    let subtotal = 0;

    cart.forEach(item => {
        item.quantity = item.quantity || 1;
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        html += `
            <tr>
                <td>
                    <div class="d-flex align-items-center gap-2">
                        <img src="${item.image}" alt="${item.title}" class="rounded" style="width: 30px; height: 45px; object-fit: cover;">
                        <div>
                            <span class="d-block text-truncate" style="max-width: 150px;">${item.title}</span>
                            <small class="text-muted">x ${toBengaliNumber(item.quantity)}</small>
                        </div>
                    </div>
                </td>
                <td class="text-end">৳${toBengaliNumber(itemTotal)}</td>
            </tr>
        `;
    });

    container.html(html);
    
    const shipping = 50;
    const total = subtotal + shipping;

    $('#checkoutSubtotal').text(toBengaliNumber(subtotal));
    $('#checkoutShipping').text(toBengaliNumber(shipping));
    $('#checkoutTotal').text(toBengaliNumber(total));
}

// Place Order
function placeOrder() {
    // Here you would typically send data to a server
    // For now, we'll simulate a successful order
    
    // Clear Cart
    localStorage.removeItem('rokomariCart');
    
    // Redirect to Success Page
    window.location.href = 'order-success.html';
}
