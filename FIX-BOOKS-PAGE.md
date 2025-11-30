# Books.html সমস্যা সমাধান

## সমস্যা:
`books.html` ফাইলে header section সঠিকভাবে আপডেট হচ্ছে না।

## সমাধান (ম্যানুয়াল):

### Step 1: `index.html` খুলুন
`index.html` ফাইলটি সঠিকভাবে আপডেট করা আছে।

### Step 2: Header Section কপি করুন
`index.html` থেকে এই অংশটুকু কপি করুন:
- Line 17 (`<body>`) থেকে শুরু করে
- Line 161 (`</header>`) পর্যন্ত

### Step 3: `books.html` এ Paste করুন
1. `books.html` খুলুন
2. `<body>` tag থেকে `</header>` পর্যন্ত পুরো অংশ মুছে দিন
3. `index.html` থেকে কপি করা কোড paste করুন

### Step 4: Active Class পরিবর্তন করুন
`books.html` এ দুই জায়গায় "active" class পরিবর্তন করতে হবে:

#### মোবাইল মেনুতে (প্রায় line 30):
```html
<!-- হোম থেকে active সরান -->
<a href="index.html" class="mobile-menu-link bangla">

<!-- বই তে active যোগ করুন -->
<a href="books.html" class="mobile-menu-link bangla active">
```

#### ডেস্কটপ নেভিগেশনে (প্রায় line 155):
```html
<!-- হোম থেকে active সরান -->
<a href="index.html" class="nav-link bangla fw-bold">

<!-- বই তে active যোগ করুন -->
<a href="books.html" class="nav-link bangla fw-bold active">
```

### Step 5: সেভ করুন এবং টেস্ট করুন
ফাইল সেভ করে ব্রাউজারে খুলে দেখুন।

## বিকল্প সমাধান:

যদি ম্যানুয়াল এডিট করতে সমস্যা হয়, তাহলে:

1. `books.html.backup` ফাইলটি রাখুন (ব্যাকআপ হিসেবে)
2. আমাকে জানান, আমি একটি সম্পূর্ণ নতুন `books.html` তৈরি করে দেব

## নোট:
একই পদ্ধতিতে `categories.html`, `authors.html`, এবং `book-details.html` আপডেট করতে পারবেন। 
শুধু প্রতিটি পেজে সংশ্লিষ্ট মেনু আইটেমে `active` class যুক্ত করতে হবে।
