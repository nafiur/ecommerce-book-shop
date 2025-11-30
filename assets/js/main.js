// Main JavaScript File (jQuery Version)

// Mock Data
const booksData = [
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

const authorsData = [
  { id: 1, name: "হুমায়ূন আহমেদ", books: 350, avatar: "https://ds.rokomari.store/rokomari110/people/20230507/1683442566_Humayun_Ahmed.jpg" },
  { id: 2, name: "মুহম্মদ জাফর ইকবাল", books: 120, avatar: "https://ds.rokomari.store/rokomari110/people/20230507/1683442566_Muhammed_Zafar_Iqbal.jpg" },
  { id: 3, name: "রবীন্দ্রনাথ ঠাকুর", books: 500, avatar: "https://ds.rokomari.store/rokomari110/people/20230507/1683442566_Rabindranath_Tagore.jpg" },
  { id: 4, name: "কাজী নজরুল ইসলাম", books: 400, avatar: "https://ds.rokomari.store/rokomari110/people/20230507/1683442566_Kazi_Nazrul_Islam.jpg" },
  { id: 5, name: "শরৎচন্দ্র চট্টোপাধ্যায়", books: 150, avatar: "https://ds.rokomari.store/rokomari110/people/20230507/1683442566_Sarat_Chandra_Chattopadhyay.jpg" },
  { id: 6, name: "আরিফ আজাদ", books: 15, avatar: "https://ds.rokomari.store/rokomari110/people/20230507/1683442566_Arif_Azad.jpg" }
];

// Bengali Number Helper
function toBengaliNumber(num) {
  const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return String(num).split('').map(digit => bengaliDigits[parseInt(digit)] || digit).join('');
}

// Cart Logic
let cart = JSON.parse(localStorage.getItem('rokomariCart')) || [];

function updateCartCount() {
  $('#cartCount').text(toBengaliNumber(cart.length));
}

function addToCart(bookId) {
  const book = booksData.find(b => b.id === bookId);
  if (book) {
    cart.push(book);
    localStorage.setItem('rokomariCart', JSON.stringify(cart));
    updateCartCount();
    alert('বইটি কার্টে যুক্ত হয়েছে!');
  }
}

// Make addToCart globally accessible
window.addToCart = addToCart;

// Create Book Card HTML
function createBookCard(book) {
  const stars = '★'.repeat(Math.floor(book.rating)) + '☆'.repeat(5 - Math.floor(book.rating));
  
  const col = $('<div>').addClass('col');
  
  const card = `
    <div class="card h-100 book-card border-0 shadow-sm" data-id="${book.id}">
      <div class="position-relative">
        <img src="${book.image}" alt="${book.title}" class="card-img-top book-image">
        <span class="position-absolute top-0 end-0 m-2 badge bg-danger bangla">${book.badge}</span>
      </div>
      <div class="card-body p-2 d-flex flex-column">
        <h5 class="card-title book-title bangla mb-1" title="${book.title}">${book.title}</h5>
        <p class="card-text text-muted small mb-2 bangla">${book.author}</p>
        
        <div class="mb-2">
          <span class="text-warning small">${stars}</span>
          <span class="text-muted small bangla">(${toBengaliNumber(book.reviews)})</span>
        </div>
        
        <div class="mt-auto">
          <div class="d-flex align-items-center gap-2 mb-2 flex-wrap">
            <span class="fw-bold text-primary bangla">৳${toBengaliNumber(book.price)}</span>
            <span class="text-muted small text-decoration-line-through bangla">৳${toBengaliNumber(book.originalPrice)}</span>
            <span class="badge bg-success bangla">${toBengaliNumber(book.discount)}%</span>
          </div>
          
          <button class="btn btn-outline-primary btn-sm w-100 bangla add-to-cart-btn">
            <i class="fas fa-shopping-cart me-1"></i> কার্টে
          </button>
        </div>
      </div>
    </div>
  `;
  
  col.html(card);
  
  // Add click event for card navigation
  col.find('.book-card').on('click', function(e) {
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

// Create Author Card HTML
function createAuthorCard(author) {
  const col = $('<div>').addClass('col');
  
  const card = `
    <div class="card h-100 border-0 shadow-sm text-center p-3 hover-shadow">
      <img src="${author.avatar}" alt="${author.name}" class="author-avatar mx-auto mb-3 rounded-circle">
      <h6 class="card-title bangla fw-bold mb-1">${author.name}</h6>
      <small class="text-muted bangla">${toBengaliNumber(author.books)} টি বই</small>
    </div>
  `;
  
  col.html(card);
  return col;
}

// Load Books
function loadBooks() {
  const $booksGrid = $('#booksGrid');
  if ($booksGrid.length === 0) return;
  
  $booksGrid.empty();
  
  // Determine if we should show all books or just a subset
  const isBooksPage = window.location.pathname.indexOf('books.html') !== -1;
  const booksToShow = isBooksPage ? booksData : booksData.slice(0, 8);
  
  $.each(booksToShow, function(index, book) {
    const $bookCard = createBookCard(book);
    $booksGrid.append($bookCard);
  });
}

// Load Authors
function loadAuthors() {
  const $authorsGrid = $('#authorsGrid');
  if ($authorsGrid.length === 0) return;
  
  $authorsGrid.empty();
  
  $.each(authorsData, function(index, author) {
    const $authorCard = createAuthorCard(author);
    $authorsGrid.append($authorCard);
  });
}

// Initialize
$(document).ready(function() {
  loadBooks();
  loadAuthors();
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
  
  // Smooth scroll for anchor links
  $('a[href^="#"]').on('click', function(e) {
    const target = $(this.getAttribute('href'));
    if (target.length) {
      e.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 100
      }, 600);
    }
  });
  
  // Prevent page jump on hash links
  $('a[href="#"]').on('click', function(e) {
    e.preventDefault();
  });
});
