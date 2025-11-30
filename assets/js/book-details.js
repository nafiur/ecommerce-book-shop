// Book Details Page JavaScript

// Get book ID from URL parameter
function getBookIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return parseInt(urlParams.get('id')) || 1;
}

// Bengali Number Helper
function toBengaliNumber(num) {
  const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return String(num).split('').map(digit => bengaliDigits[parseInt(digit)] || digit).join('');
}

// Load book details
function loadBookDetails() {
  const bookId = getBookIdFromUrl();
  const book = booksData.find(b => b.id === bookId);
  
  if (!book) {
    window.location.href = 'books.html';
    return;
  }
  
  // Update page title
  document.title = `${book.title} - রকমারি ডট কম`;
  document.getElementById('pageTitle').textContent = `${book.title} - রকমারি ডট কম`;
  
  // Update breadcrumb
  document.getElementById('breadcrumbTitle').textContent = book.title;
  
  // Update book details
  document.getElementById('bookImage').src = book.image;
  document.getElementById('bookImage').alt = book.title;
  document.getElementById('bookTitle').textContent = book.title;
  document.getElementById('bookAuthor').textContent = book.author;
  document.getElementById('bookCategory').textContent = book.category;
  
  // Update price
  document.getElementById('bookPrice').textContent = `৳${toBengaliNumber(book.price)}`;
  document.getElementById('bookOriginalPrice').textContent = `৳${toBengaliNumber(book.originalPrice)}`;
  
  const savings = book.originalPrice - book.price;
  document.querySelector('.save-amount').textContent = 
    `${toBengaliNumber(book.discount)}% ছাড় - সাশ্রয় ৳${toBengaliNumber(savings)}`;
  
  // Update reviews
  const stars = '★'.repeat(Math.floor(book.rating)) + '☆'.repeat(5 - Math.floor(book.rating));
  document.querySelectorAll('.stars').forEach(el => {
    if (!el.closest('.review-item')) {
      el.textContent = stars;
    }
  });
  document.getElementById('bookReviews').textContent = `(${toBengaliNumber(book.reviews)} রিভিউ)`;
  
  // Update specs
  document.getElementById('specTitle').textContent = book.title;
  document.getElementById('specAuthor').textContent = book.author;
  
  // Store current book ID for add to cart
  window.currentBookId = bookId;
  
  // Load related books
  loadRelatedBooks(book.category, bookId);
}

// Load related books
function loadRelatedBooks(category, currentBookId) {
  const relatedBooks = booksData
    .filter(b => b.category === category && b.id !== currentBookId)
    .slice(0, 4);
  
  const grid = document.getElementById('relatedBooksGrid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  relatedBooks.forEach(book => {
    const card = createBookCard(book);
    grid.appendChild(card);
  });
  
  // If not enough related books in same category, add random books
  if (relatedBooks.length < 4) {
    const additionalBooks = booksData
      .filter(b => b.id !== currentBookId && !relatedBooks.includes(b))
      .slice(0, 4 - relatedBooks.length);
    
    additionalBooks.forEach(book => {
      const card = createBookCard(book);
      grid.appendChild(card);
    });
  }
}

// Switch tab
function switchTab(tabName) {
  // Update buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
  
  // Update content
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });
  document.getElementById(tabName).classList.add('active');
}

// Add to cart from details page
function addToCartFromDetails() {
  if (window.currentBookId) {
    addToCart(window.currentBookId);
  }
}

// Make book cards clickable to go to details page
function createBookCard(book) {
  const card = document.createElement('div');
  card.className = 'book-card';
  card.style.cursor = 'pointer';
  
  const stars = '★'.repeat(Math.floor(book.rating)) + '☆'.repeat(5 - Math.floor(book.rating));
  
  card.innerHTML = `
    <div style="position: relative;" onclick="window.location.href='book-details.html?id=${book.id}'">
      <img src="${book.image}" alt="${book.title}" class="book-image">
      <div class="book-badge bangla">${book.badge}</div>
    </div>
    <div class="book-info">
      <h4 class="book-title bangla" onclick="window.location.href='book-details.html?id=${book.id}'" style="cursor: pointer;">${book.title}</h4>
      <p class="book-author bangla">${book.author}</p>
      <div class="book-rating">
        <span class="stars">${stars}</span>
        <span class="rating-count bangla">(${toBengaliNumber(book.reviews)})</span>
      </div>
      <div class="book-price">
        <span class="price-current bangla">৳${toBengaliNumber(book.price)}</span>
        <span class="price-original bangla">৳${toBengaliNumber(book.originalPrice)}</span>
        <span class="discount bangla">${toBengaliNumber(book.discount)}% ছাড়</span>
      </div>
      <button class="add-to-cart-btn bangla" onclick="event.stopPropagation(); addToCart(${book.id})">
        <i class="fas fa-shopping-cart"></i> কার্টে যোগ করুন
      </button>
    </div>
  `;
  
  return card;
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
  loadBookDetails();
});
