# 📖 Books.html আপডেট করার সহজ গাইড

## Step 1: index.html থেকে Header কপি করুন

### 1.1 `index.html` খুলুন
- File explorer এ যান: `c:\Users\NafiurRahman\Desktop\book\index.html`
- VS Code বা আপনার এডিটরে খুলুন

### 1.2 Header Section সিলেক্ট করুন
নিচের line numbers অনুযায়ী:
- **শুরু**: Line 17 - যেখানে `<body>` আছে
- **শেষ**: Line 161 - যেখানে `</header>` আছে

**টিপস**: 
- Line number দেখতে VS Code এ `Ctrl + G` চাপুন
- অথবা left side এ line numbers দেখা যায়

### 1.3 কপি করুন
- Line 17 থেকে Line 161 পর্যন্ত সব সিলেক্ট করুন
- `Ctrl + C` চেপে কপি করুন

## Step 2: books.html এ Paste করুন

### 2.1 `books.html` খুলুন
- File: `c:\Users\NafiurRahman\Desktop\book\books.html`

### 2.2 পুরোনো Header মুছে ফেলুন
- **Line 16** (`<body>`) থেকে শুরু করুন
- **Line 90** (`</header>`) পর্যন্ত সব সিলেক্ট করুন
- **Delete** চেপে মুছে ফেলুন

### 2.3 নতুন Header Paste করুন
- Cursor টি Line 16 এ রাখুন (যেখানে `<body>` ছিল)
- `Ctrl + V` চেপে paste করুন

## Step 3: "Active" Class পরিবর্তন করুন

এখন দুই জায়গায় পরিবর্তন করতে হবে:

### 3.1 মোবাইল মেনুতে (প্রায় Line 32)

**খুঁজে বের করুন:**
```html
<a href="index.html" class="mobile-menu-link bangla active">
    <i class="fas fa-home"></i>হোম
</a>
```

**পরিবর্তন করুন:**
```html
<a href="index.html" class="mobile-menu-link bangla">
    <i class="fas fa-home"></i>হোম
</a>
```
(হোম থেকে `active` সরিয়ে দিন)

---

**খুঁজে বের করুন:**
```html
<a href="books.html" class="mobile-menu-link bangla">
    <i class="fas fa-book"></i>বই
</a>
```

**পরিবর্তন করুন:**
```html
<a href="books.html" class="mobile-menu-link bangla active">
    <i class="fas fa-book"></i>বই
</a>
```
(বই তে `active` যোগ করুন)

### 3.2 ডেস্কটপ নেভিগেশনে (প্রায় Line 155)

**খুঁজে বের করুন:**
```html
<li class="nav-item"><a href="index.html" class="nav-link bangla fw-bold active">হোম</a></li>
```

**পরিবর্তন করুন:**
```html
<li class="nav-item"><a href="index.html" class="nav-link bangla fw-bold">হোম</a></li>
```
(হোম থেকে `active` সরিয়ে দিন)

---

**খুঁজে বের করুন:**
```html
<li class="nav-item"><a href="books.html" class="nav-link bangla fw-bold">বই</a></li>
```

**পরিবর্তন করুন:**
```html
<li class="nav-item"><a href="books.html" class="nav-link bangla fw-bold active">বই</a></li>
```
(বই তে `active` যোগ করুন)

## Step 4: সেভ করুন
- `Ctrl + S` চেপে সেভ করুন

## Step 5: টেস্ট করুন
1. `books.html` ব্রাউজারে খুলুন
2. Page refresh করুন (`F5`)
3. চেক করুন:
   - ✅ মোবাইল ভিউতে (window ছোট করে) হ্যামবার্গার মেনু দেখা যাচ্ছে কিনা
   - ✅ মেনু বাটন লোগোর বাম পাশে আছে কিনা
   - ✅ মেনুতে ক্লিক করলে সাইডবার খুলছে কিনা
   - ✅ "বই" মেনু আইটেমে active/highlighted দেখাচ্ছে কিনা

## 🎯 দ্রুত টিপস:

### Find & Replace ব্যবহার করুন (আরও সহজ!)

**Step 1**: `Ctrl + H` চাপুন (Find & Replace)

**Step 2**: মোবাইল মেনু আপডেট করুন

Find:
```
<a href="index.html" class="mobile-menu-link bangla active">
                    <i class="fas fa-home"></i>হোম
                </a>
```

Replace:
```
<a href="index.html" class="mobile-menu-link bangla">
                    <i class="fas fa-home"></i>হোম
                </a>
```

Click "Replace"

---

Find:
```
<a href="books.html" class="mobile-menu-link bangla">
                    <i class="fas fa-book"></i>বই
                </a>
```

Replace:
```
<a href="books.html" class="mobile-menu-link bangla active">
                    <i class="fas fa-book"></i>বই
                </a>
```

Click "Replace"

**Step 3**: ডেস্কটপ মেনু আপডেট করুন

Find:
```
<a href="index.html" class="nav-link bangla fw-bold active">হোম</a>
```

Replace:
```
<a href="index.html" class="nav-link bangla fw-bold">হোম</a>
```

Click "Replace"

---

Find:
```
<a href="books.html" class="nav-link bangla fw-bold">বই</a>
```

Replace:
```
<a href="books.html" class="nav-link bangla fw-bold active">বই</a>
```

Click "Replace"

## ✅ সম্পন্ন!

এখন `books.html` পেজে সঠিকভাবে মোবাইল মেনু কাজ করবে! 🎉

## সমস্যা হলে:
- নিশ্চিত করুন `index.html` সঠিকভাবে কাজ করছে
- Browser cache clear করুন (`Ctrl + Shift + Delete`)
- Console চেক করুন (`F12`) কোনো error আছে কিনা
