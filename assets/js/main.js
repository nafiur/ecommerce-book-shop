// Books Data - বাংলায়
const booksData = [
  {
    id: 1,
    title: "দেয়াল",
    author: "হুমায়ূন আহমেদ",
    price: 280,
    originalPrice: 350,
    discount: 20,
    rating: 4.9,
    reviews: 2847,
    category: "উপন্যাস",
    badge: "বেস্টসেলার",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop"
  },
  {
    id: 2,
    title: "আমি তপু",
    author: "মুহম্মদ জাফর ইকবাল",
    price: 220,
    originalPrice: 280,
    discount: 21,
    rating: 4.8,
    reviews: 1892,
    category: "কিশোর উপন্যাস",
    badge: "জনপ্রিয়",
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop"
  },
  {
    id: 3,
    title: "আল্লাহর নামে",
    author: "শাহাদাত হোসেন",
    price: 320,
    originalPrice: 400,
    discount: 20,
    rating: 4.9,
    reviews: 3134,
    category: "ইসলামি বই",
    badge: "নতুন",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop"
  },
  {
    id: 4,
    title: "মিসির আলি সমগ্র",
    author: "হুমায়ূন আহমেদ",
    price: 680,
    originalPrice: 850,
    discount: 20,
    rating: 5.0,
    reviews: 4567,
    category: "গোয়েন্দা",
    badge: "সেরা বিক্রয়",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop"
  },
  {
    id: 5,
    title: "জীবন যেখানে যেমন",
    author: "আনিসুল হক",
    price: 240,
    originalPrice: 300,
    discount: 20,
    rating: 4.7,
    reviews: 2421,
    category: "আত্মজীবনী",
    badge: "জনপ্রিয়",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=600&fit=crop"
  },
  {
    id: 6,
    title: "রূপকথার গল্প",
    author: "ঈশপ",
    price: 180,
    originalPrice: 220,
    discount: 18,
    rating: 4.8,
    reviews: 1987,
    category: "শিশু সাহিত্য",
    badge: "পছন্দের",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop"
  },
  {
    id: 7,
    title: "শ্রাবণ মেঘের দিন",
    author: "জহির রায়হান",
    price: 260,
    originalPrice: 320,
    discount: 19,
    rating: 4.9,
    reviews: 3256,
    category: "উপন্যাস",
    badge: "ক্লাসিক",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=600&fit=crop"
  },
  {
    id: 8,
    title: "বাংলাদেশের ইতিহাস",
    author: "ড. মুহাম্মদ হাবিবুর রহমান",
    price: 450,
    originalPrice: 550,
    discount: 18,
    rating: 4.8,
    reviews: 1432,
    category: "ইতিহাস",
    badge: "প্রয়োজনীয়",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop"
  },
  {
    id: 9,
    title: "পথের পাঁচালী",
    author: "বিভূতিভূষণ বন্দ্যোপাধ্যায়",
    price: 300,
    originalPrice: 380,
    discount: 21,
    rating: 4.9,
    reviews: 2890,
    category: "ক্লাসিক উপন্যাস",
    badge: "ক্লাসিক",
    image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400&h=600&fit=crop"
  },
  {
    id: 10,
    title: "গীতাঞ্জলি",
    author: "রবীন্দ্রনাথ ঠাকুর",
    price: 350,
    originalPrice: 450,
    discount: 22,
    rating: 5.0,
    reviews: 5672,
    category: "কবিতা",
    badge: "নোবেল পুরস্কার",
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&h=600&fit=crop"
  },
  {
    id: 11,
    title: "হাজার বছরের বাংলা সাহিত্য",
    author: "মুহম্মদ শহীদুল্লাহ",
    price: 420,
    originalPrice: 520,
    discount: 19,
    rating: 4.7,
    reviews: 1245,
    category: "সাহিত্য",
    badge: "তথ্যবহুল",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop"
  },
  {
    id: 12,
    title: "কাকতাড়ুয়া",
    author: "সেলিনা হোসেন",
    price: 280,
    originalPrice: 350,
    discount: 20,
    rating: 4.6,
    reviews: 1876,
    category: "উপন্যাস",
    badge: "জনপ্রিয়",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=600&fit=crop"
  }
];

// Authors Data - বাংলায়
const authorsData = [
  {
    id: 1,
    name: "হুমায়ূন আহমেদ",
    books: 245,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces"
  },
  {
    id: 2,
    name: "মুহম্মদ জাফর ইকবাল",
    books: 118,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces"
  },
  {
    id: 3,
    name: "রবীন্দ্রনাথ ঠাকুর",
    books: 532,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=faces"
  },
  {
    id: 4,
    name: "কাজী নজরুল ইসলাম",
    books: 341,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces"
  },
  {
    id: 5,
    name: "শরৎচন্দ্র চট্টোপাধ্যায়",
    books: 215,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=faces"
  },
  {
    id: 6,
    name: "সুনীল গঙ্গোপাধ্যায়",
    books: 228,
    avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop&crop=faces"
  },
  {
    id: 7,
    name: "আনিসুল হক",
    books: 92,
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&h=200&fit=crop&crop=faces"
  },
  {
    id: 8,
    name: "সৈয়দ শামসুল হক",
    books: 187,
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop&crop=faces"
  }
];

// Shopping Cart
let cart = [];
let itemCount = 0;

// Bengali Number Conversion
function toBengaliNumber(num) {
  const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return String(num).split('').map(digit => bengaliDigits[parseInt(digit)] || digit).join('');
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  loadBooks();
  loadAuthors();
  setupEventListeners();
  loadCart();
});

// Load books
function loadBooks() {
  const booksGrid = document.getElementById('booksGrid');
  booksGrid.innerHTML = '';
  
  booksData.forEach(book => {
    const bookCard = createBookCard(book);
    booksGrid.appendChild(bookCard);
  });
}

// Create book card
function createBookCard(book) {
  const card = document.createElement('div');
  card.className = 'book-card';
  
  const stars = '★'.repeat(Math.floor(book.rating)) + '☆'.repeat(5 - Math.floor(book.rating));
  
  card.innerHTML = `
    <div style="position: relative; cursor: pointer;" onclick="window.location.href='book-details.html?id=${book.id}'">
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

// Load authors
function loadAuthors() {
  const authorsGrid = document.getElementById('authorsGrid');
  if (!authorsGrid) return; // Skip if authors grid doesn't exist on this page
  
  authorsGrid.innerHTML = '';
  
  authorsData.forEach(author => {
    const authorCard = createAuthorCard(author);
    authorsGrid.appendChild(authorCard);
  });
}

// Create author card
function createAuthorCard(author) {
  const card = document.createElement('div');
  card.className = 'author-card';
  
  card.innerHTML = `
    <img src="${author.avatar}" alt="${author.name}" class="author-avatar">
    <h4 class="author-name bangla">${author.name}</h4>
    <p class="author-books bangla">${toBengaliNumber(author.books)} টি বই</p>
  `;
  
  return card;
}

// Add to cart
function addToCart(bookId) {
  const book = booksData.find(b => b.id === bookId);
  if (!book) return;
  
  const existingItem = cart.find(item => item.id === bookId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...book,
      quantity: 1
    });
  }
  
  updateCartCount();
  saveCart();
  showNotification(`"${book.title}" কার্টে যোগ হয়েছে!`);
}

// Update cart count
function updateCartCount() {
  const cartCount = document.getElementById('cartCount');
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  itemCount = totalItems;
  cartCount.textContent = toBengaliNumber(totalItems);
  
  cartCount.style.transform = 'scale(1.3)';
  setTimeout(() => {
    cartCount.style.transform = 'scale(1)';
  }, 200);
}

// Save cart
function saveCart() {
  localStorage.setItem('rokomariCart', JSON.stringify(cart));
}

// Load cart
function loadCart() {
  const savedCart = localStorage.getItem('rokomariCart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartCount();
  }
}

// Show notification
function showNotification(message) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 80px;
    right: 20px;
    background: var(--secondary-color);
    color: white;
    padding: 15px 20px;
    border-radius: 4px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    z-index: 10000;
    animation: slideIn 0.3s ease-out;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 10px;
  `;
  
  notification.innerHTML = `
    <i class="fas fa-check-circle"></i>
    <span class="bangla">${message}</span>
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => {
      if (notification.parentNode) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Setup event listeners
function setupEventListeners() {
  const searchInput = document.querySelector('.search-input');
  const searchBtn = document.querySelector('.search-btn');
  
  searchBtn.addEventListener('click', performSearch);
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  });
  
  const cartBtn = document.getElementById('cartBtn');
  cartBtn.addEventListener('click', showCart);
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Perform search
function performSearch() {
  const searchInput = document.querySelector('.search-input');
  const query = searchInput.value.trim().toLowerCase();
  
  if (!query) return;
  
  const booksGrid = document.getElementById('booksGrid');
  booksGrid.innerHTML = '';
  
  const filteredBooks = booksData.filter(book => 
    book.title.toLowerCase().includes(query) ||
    book.author.toLowerCase().includes(query) ||
    book.category.toLowerCase().includes(query)
  );
  
  if (filteredBooks.length === 0) {
    booksGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px;">
        <i class="fas fa-search" style="font-size: 60px; color: var(--text-muted); margin-bottom: 15px;"></i>
        <h3 class="bangla">কোনো বই পাওয়া যায়নি</h3>
        <p class="bangla" style="color: var(--text-muted);">অন্য কিছু লিখে খোঁজ করুন</p>
      </div>
    `;
  } else {
    filteredBooks.forEach(book => {
      const bookCard = createBookCard(book);
      booksGrid.appendChild(bookCard);
    });
  }
  
  document.getElementById('bestsellers').scrollIntoView({ behavior: 'smooth' });
}

// Show cart
function showCart() {
  if (cart.length === 0) {
    showNotification('আপনার কার্ট খালি!');
    return;
  }
  
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  let cartHTML = `
    <div style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.6); z-index: 10000; display: flex; align-items: center; justify-content: center; padding: 20px;" id="cartModal" onclick="if(event.target.id === 'cartModal') closeCart()">
      <div style="background: white; border-radius: 8px; max-width: 700px; width: 100%; max-height: 85vh; overflow-y: auto; box-shadow: 0 10px 40px rgba(0,0,0,0.3);" onclick="event.stopPropagation()">
        <div style="padding: 20px; border-bottom: 2px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; position: sticky; top: 0; background: white; z-index: 1;">
          <h2 class="bangla" style="margin: 0; color: var(--primary-color);">শপিং কার্ট</h2>
          <button onclick="closeCart()" style="background: transparent; font-size: 24px; padding: 5px; color: var(--text-muted);">
            <i class="fas fa-times"></i>
          </button>
        </div>
        
        <div style="padding: 20px;">
  `;
  
  cart.forEach(item => {
    cartHTML += `
      <div style="display: flex; gap: 15px; padding: 15px; border-bottom: 1px solid var(--border-light); align-items: center;">
        <img src="${item.image}" alt="${item.title}" style="width: 70px; height: 100px; object-fit: cover; border-radius: 4px; border: 1px solid var(--border-light);">
        <div style="flex: 1;">
          <h4 class="bangla" style="margin: 0 0 5px 0; font-size: 15px; color: var(--text-primary);">${item.title}</h4>
          <p class="bangla" style="margin: 0 0 8px 0; color: var(--text-muted); font-size: 13px;">${item.author}</p>
          <div style="display: flex; align-items: center; gap: 10px;">
            <p class="bangla" style="margin: 0; font-weight: 700; color: var(--primary-color); font-size: 16px;">৳${toBengaliNumber(item.price)}</p>
            <p class="bangla" style="margin: 0; color: var(--text-muted); font-size: 13px;">× ${toBengaliNumber(item.quantity)}</p>
          </div>
        </div>
        <button onclick="removeFromCart(${item.id})" style="background: #e74c3c; color: white; padding: 8px 12px; border-radius: 4px; font-size: 14px;">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    `;
  });
  
  cartHTML += `
        </div>
        
        <div style="padding: 20px; background: var(--bg-gray); border-top: 2px solid var(--border-color);">
          <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
            <span class="bangla" style="font-size: 15px;">মোট পণ্য:</span>
            <strong class="bangla" style="color: var(--primary-color);">${toBengaliNumber(totalItems)} টি</strong>
          </div>
          <div style="display: flex; justify-content: space-between; font-size: 20px; font-weight: 700; color: var(--primary-color); margin-bottom: 20px;">
            <span class="bangla">মোট মূল্য:</span>
            <span class="bangla">৳${toBengaliNumber(totalPrice)}</span>
          </div>
          
          <button onclick="checkout()" class="bangla" style="width: 100%; background: var(--primary-color); color: white; padding: 15px; border-radius: 4px; font-weight: 600; font-size: 16px;">
            <i class="fas fa-credit-card"></i> চেকআউট করুন
          </button>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', cartHTML);
}

// Close cart
function closeCart() {
  const modal = document.getElementById('cartModal');
  if (modal) {
    modal.remove();
  }
}

// Remove from cart
function removeFromCart(bookId) {
  cart = cart.filter(item => item.id !== bookId);
  saveCart();
  updateCartCount();
  closeCart();
  
  if (cart.length > 0) {
    showCart();
  }
  
  showNotification('পণ্য মুছে ফেলা হয়েছে');
}

// Checkout
function checkout() {
  showNotification('চেকআউট শীঘ্রই আসছে!');
  closeCart();
}

// Add animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
