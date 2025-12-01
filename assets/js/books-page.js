// Books Page Specific JavaScript (No Card Style)

// Import books data from main.js
const booksData = window.booksData || [
  {
    id: 1,
    title: "হিমু সমগ্র",
    author: "হুমায়ূন আহমেদ",
    price: 450,
    originalPrice: 600,
    discount: 25,
    rating: 4.8,
    reviews: 120,
    image: "assets/images/deyal.png",
    badge: "বেস্টসেলার",
    category: "উপন্যাস"
  },
  {
    id: 2,
    title: "প্যারাডক্সিক্যাল সাজিদ",
    author: "আরিফ আজাদ",
    price: 300,
    originalPrice: 400,
    discount: 25,
    rating: 4.9,
    reviews: 250,
    image: "assets/images/book1.png",
    badge: "জনপ্রিয়",
    category: "ইসলামি"
  },
  {
    id: 3,
    title: "মিছির আলি সমগ্র",
    author: "হুমায়ূন আহমেদ",
    price: 550,
    originalPrice: 700,
    discount: 21,
    rating: 4.7,
    reviews: 95,
    image: "assets/images/book2.png",
    badge: "নতুন",
    category: "উপন্যাস"
  },
  {
    id: 4,
    title: "বেলা ফুরাবার আগে",
    author: "আরিফ আজাদ",
    price: 280,
    originalPrice: 350,
    discount: 20,
    rating: 4.8,
    reviews: 180,
    image: "assets/images/book3.png",
    badge: "বেস্টসেলার",
    category: "ইসলামি"
  },
  {
    id: 5,
    title: "সঞ্চিতা",
    author: "কাজী নজরুল ইসলাম",
    price: 320,
    originalPrice: 400,
    discount: 20,
    rating: 4.9,
    reviews: 150,
    image: "assets/images/book1.png",
    badge: "ক্লাসিক",
    category: "কবিতা"
  },
  {
    id: 6,
    title: "গীতাঞ্জলি",
    author: "রবীন্দ্রনাথ ঠাকুর",
    price: 250,
    originalPrice: 300,
    discount: 16,
    rating: 4.8,
    reviews: 130,
    image: "assets/images/book2.png",
    badge: "ক্লাসিক",
    category: "কবিতা"
  },
  {
    id: 7,
    title: "একাত্তরের দিনগুলি",
    author: "জাহানারা ইমাম",
    price: 350,
    originalPrice: 450,
    discount: 22,
    rating: 4.9,
    reviews: 200,
    image: "assets/images/book3.png",
    badge: "মুক্তিযুদ্ধ",
    category: "ইতিহাস"
  },
  {
    id: 8,
    title: "আগুনের পরশমণি",
    author: "হুমায়ূন আহমেদ",
    price: 220,
    originalPrice: 300,
    discount: 26,
    rating: 4.7,
    reviews: 110,
    image: "assets/images/deyal.png",
    badge: "জনপ্রিয়",
    category: "উপন্যাস"
  },
  {
    id: 9,
    title: "ক্রাচের কর্নেল",
    author: "শাহাদুজ্জামান",
    price: 380,
    originalPrice: 500,
    discount: 24,
    rating: 4.6,
    reviews: 80,
    image: "assets/images/book1.png",
    badge: "ইতিহাস",
    category: "ইতিহাস"
  },
  {
    id: 10,
    title: "নৌকাডুবি",
    author: "রবীন্দ্রনাথ ঠাকুর",
    price: 300,
    originalPrice: 400,
    discount: 25,
    rating: 4.5,
    reviews: 90,
    image: "assets/images/book2.png",
    badge: "ক্লাসিক",
    category: "উপন্যাস"
  }
];

// Bengali Number Helper
function toBengaliNumber(num) {
  const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return String(num).split('').map(digit => bengaliDigits[parseInt(digit)] || digit).join('');
}

// Cart Logic
let cart = JSON.parse(localStorage.getItem('boierbariCart')) || [];

function updateCartCount() {
  $('#cartCount').text(toBengaliNumber(cart.length));
}

function addToCart(bookId) {
  const book = booksData.find(b => b.id === bookId);
  if (book) {
    cart.push(book);
    localStorage.setItem('boierbariCart', JSON.stringify(cart));
    updateCartCount();
    alert('বইটি কার্টে যুক্ত হয়েছে!');
  }
}

// Make addToCart globally accessible
window.addToCart = addToCart;

// Create Book Item WITHOUT Card (Simple Layout)
function createBookItem(book) {
  const stars = '★'.repeat(Math.floor(book.rating)) + '☆'.repeat(5 - Math.floor(book.rating));
  
  const col = $('<div>').addClass('col');
  
  const item = `
    <div class="book-item text-center" data-id="${book.id}" style="cursor: pointer;">
      <div class="position-relative mb-2">
        <img src="${book.image}" alt="${book.title}" class="img-fluid book-image" style="height: 200px; object-fit: contain;">
        <span class="position-absolute top-0 start-0 m-1 badge bg-danger bangla small">${toBengaliNumber(book.discount)}% ছাড়</span>
        <span class="position-absolute top-0 end-0 m-1 badge bg-success bangla small">${book.badge}</span>
      </div>
      <h6 class="book-title bangla mb-1 text-truncate" title="${book.title}">${book.title}</h6>
      <p class="text-muted small mb-1 bangla">${book.author}</p>
      
      <div class="mb-2">
        <span class="text-warning small">${stars}</span>
        <span class="text-muted small bangla">(${toBengaliNumber(book.reviews)})</span>
      </div>
      
      <div class="mb-2">
        <span class="fw-bold text-primary bangla">৳${toBengaliNumber(book.price)}</span>
        <span class="text-muted small text-decoration-line-through bangla ms-1">৳${toBengaliNumber(book.originalPrice)}</span>
        <span class="badge bg-success bangla small ms-1">${toBengaliNumber(book.discount)}%</span>
      </div>
      
      <button class="btn btn-primary btn-sm w-100 bangla add-to-cart-btn">
        <i class="fas fa-shopping-cart me-1"></i> কার্টে যোগ করুন
      </button>
    </div>
  `;
  
  col.html(item);
  
  // Add click event for book navigation
  col.find('.book-item').on('click', function(e) {
    if (!$(e.target).closest('.add-to-cart-btn').length) {
      window.location.href = `book-details.html?id=${book.id}`;
    }
  });
  
  // Add click event for add to cart button
  col.find('.add-to-cart-btn').on('click', function(e) {
    e.stopPropagation();
    addToCart(book.id);
  });
  
  return col;
}

// Load Books
function loadBooks() {
  const $booksGrid = $('#booksGrid');
  if ($booksGrid.length === 0) return;
  
  $booksGrid.empty();
  
  $.each(booksData, function(index, book) {
    const $bookItem = createBookItem(book);
    $booksGrid.append($bookItem);
  });
}

// Initialize
$(document).ready(function() {
  loadBooks();
  updateCartCount();
  
  // Cart Button Click
  $('#cartBtn').on('click', function() {
    window.location.href = 'cart.html';
  });
  
  // Mobile Menu Toggle
  $('#mobileMenuToggle').on('click', function() {
    $('.mobile-menu').addClass('active');
    $('.mobile-menu-overlay').addClass('active');
    $('body').css('overflow', 'hidden');
  });
  
  // Close mobile menu
  $('.mobile-menu-close, .mobile-menu-overlay').on('click', function() {
    $('.mobile-menu').removeClass('active');
    $('.mobile-menu-overlay').removeClass('active');
    $('body').css('overflow', '');
  });
  
  // Close menu when clicking on a link
  $('.mobile-menu-link').on('click', function() {
    $('.mobile-menu').removeClass('active');
    $('.mobile-menu-overlay').removeClass('active');
    $('body').css('overflow', '');
  });
});
