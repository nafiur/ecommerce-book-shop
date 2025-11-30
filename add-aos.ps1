# Add AOS to all HTML files
$htmlFiles = @(
    "index.html",
    "dashboard.html", 
    "orders.html",
    "order-details.html",
    "wishlist.html",
    "address.html",
    "profile-edit.html"
)

foreach ($file in $htmlFiles) {
    $filePath = "C:\Users\NafiurRahman\Desktop\book\$file"
    
    if (Test-Path $filePath) {
        $content = Get-Content $filePath -Raw -Encoding UTF8
        
        # Add AOS CSS after custom CSS (if not already added)
        if ($content -notmatch 'aos@2.3.1/dist/aos.css') {
            $content = $content -replace '(<link rel="stylesheet" href="assets/css/style.css">)', "`$1`r`n    <!-- AOS CSS -->`r`n    <link rel="stylesheet" href=`"https://unpkg.com/aos@2.3.1/dist/aos.css`" />"
        }
        
        # Add AOS JS before custom JS (if not already added)
        if ($content -notmatch 'aos@2.3.1/dist/aos.js') {
            $content = $content -replace '(<script src="assets/js/main.js"></script>)', "<!-- AOS JS -->`r`n    <script src=`"https://unpkg.com/aos@2.3.1/dist/aos.js`"></script>`r`n    `$1"
        }
        
        Set-Content $filePath $content -Encoding UTF8 -NoNewline
        Write-Host "Updated: $file" -ForegroundColor Green
    } else {
        Write-Host "File not found: $file" -ForegroundColor Yellow
    }
}

Write-Host "`nAOS added to all files!" -ForegroundColor Cyan
