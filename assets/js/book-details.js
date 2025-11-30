// Book Details Page JavaScript (jQuery Version)

// Get book ID from URL parameter
function getBookIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return parseInt(urlParams.get('id')) || 1;
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
  $('#pageTitle').text(`${book.title} - রকমারি ডট কম`);
  
  // Update breadcrumb
  $('#breadcrumbTitle').text(book.title);
  
  // Update book details
  $('#bookImage').attr('src', book.image).attr('alt', book.title);
  $('#bookTitle').text(book.title);
  $('#bookAuthor').text(book.author);
  $('#bookCategory').text(book.category);
  
  // Update price
  $('#bookPrice').text(`৳${toBengaliNumber(book.price)}`);
  $('#bookOriginalPrice').text(`৳${toBengaliNumber(book.originalPrice)}`);
  $('#bookDiscount').text(`${toBengaliNumber(book.discount)}% ছাড়`);
  
  // Update reviews count
  const reviewsTabBtn = $('#reviews-tab');
  if (reviewsTabBtn.length) {
    reviewsTabBtn.text(`রিভিউ (${toBengaliNumber(book.reviews)})`);
  }
  
  // Update specs
  $('#specTitle').text(book.title);
  $('#specAuthor').text(book.author);
  
  // Store current book ID for add to cart
  window.currentBookId = bookId;
  
  // Load related books
  loadRelatedBooks(book.category, bookId);
}

// Load related books
function loadRelatedBooks(category, currentBookId) {
  const relatedBooks = booksData
    .filter(b => b.category === category && b.id !== currentBookId)
    .slice(0, 6); // Show up to 6 related books
  
  const $grid = $('#relatedBooksGrid');
  if ($grid.length === 0) return;
  
  $grid.empty();
  
  $.each(relatedBooks, function(index, book) {
    // Use createBookCard from main.js (ensure main.js is loaded before this script)
    if (typeof createBookCard === 'function') {
      const $card = createBookCard(book);
      $grid.append($card);
    }
  });
  
  // If not enough related books, fill with others
  if (relatedBooks.length < 6) {
    const additionalBooks = booksData
      .filter(b => b.id !== currentBookId && !relatedBooks.includes(b))
      .slice(0, 6 - relatedBooks.length);
    
    $.each(additionalBooks, function(index, book) {
      if (typeof createBookCard === 'function') {
        const $card = createBookCard(book);
        $grid.append($card);
      }
    });
  }
}

// Add to cart from details page
function addToCartFromDetails() {
  if (window.currentBookId) {
    addToCart(window.currentBookId);
  }
}

// Initialize when page loads
$(document).ready(function() {
  loadBookDetails();
});
