# SBM Apparels Pvt Limited - Professional Website

A modern, responsive, and professional static website for **SBM Apparels Pvt Limited**, a leading manufacturer of quality recycled textiles and custom clothing solutions.

## 🌍 Overview

**Company:** SBM Apparels Pvt Limited
**Location:** Tirupur, Tamil Nadu, India
**Tagline:** Quality Recycled Textile Manufacturing
**Description:** Your trusted partner for custom clothing solutions.

---

## 📋 Website Features

### ✅ Fully Responsive Design
- **Desktop:** Optimized for large screens
- **Tablet:** Perfect fit for iPad and similar devices
- **Mobile:** Touch-friendly interface with optimized navigation

### 🎨 Professional Design
- **Color Palette:** Forest Green (Primary), White, Light Grey, Charcoal (Accent)
- **Typography:** Poppins/Montserrat (Headings), Open Sans/Roboto (Body)
- **Modern Layout:** Clean, corporate, export-quality appearance

### 📄 Complete Page Structure

#### 1. **Home Page** (`index.html`)
- Hero section with compelling headline
- Why Choose SBM Apparels section
- Sustainability commitment section
- Product & Services showcase
- Industry recognition indicators
- Call-to-action buttons

#### 2. **About Us Page** (`about.html`)
- Company background and history
- Mission & Vision statements
- Core values (6 key values)
- Sustainable manufacturing practices
- Quality standards & certifications
- Competitive advantages

#### 3. **Contact Us Page** (`contact.html`)
- Complete contact information
- Functional inquiry form
- Google Maps embed
- WhatsApp integration
- FAQ section
- Business hours display

---

## 🚀 Project Structure

```
sbm-apparels/
│
├── index.html              # Home page
├── about.html              # About Us page
├── contact.html            # Contact Us page
│
├── css/
│   └── style.css           # Complete stylesheet (1000+ lines)
│
├── js/
│   └── script.js           # JavaScript functionality
│
├── images/                 # Image directory (for future assets)
│
└── README.md               # This file
```

---

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with variables and flexbox/grid
- **JavaScript (ES6)** - Interactivity and form validation
- **Bootstrap 5.3** - Responsive grid and components
- **Google Fonts** - Professional typography
- **Font Awesome 6.4** - High-quality icons
- **Google Maps API** - Location embedding

---

## 💡 Key Features Explained

### Navigation
- **Sticky Navigation Bar** - Always visible at top with smooth scrolling
- **Active Link Highlighting** - Current page indicator
- **Mobile Menu** - Hamburger menu on smaller screens

### Hero Section
- Full-width background image with overlay
- Compelling headline and subheading
- Dual call-to-action buttons

### Responsive Sections
- Feature cards with hover effects
- Product grid that adapts to screen size
- Trust indicators showing company credibility
- Smooth animations on scroll

### Contact Form
- HTML5 validation
- Field types: Text, Email, Phone, Select, Textarea
- Checkbox for terms acceptance
- Privacy policy notice
- Responsive on all devices

### SEO Optimization
- Meta descriptions for all pages
- Proper heading hierarchy
- Semantic HTML structure
- Mobile viewport configuration
- Keyword-rich content

---

## 📱 Responsive Breakpoints

- **Desktop:** 1200px and above
- **Tablet:** 768px - 1199px
- **Mobile:** Below 768px
- **Small Mobile:** Below 480px

---

## 🎯 Installation & Setup

### Option 1: Local Development

1. **Download Files**
   - Extract the project folder to your desired location

2. **Open in Browser**
   - Simply double-click `index.html` to open in your default browser
   - Or right-click and select "Open with" your preferred browser

3. **Development Server (Optional)**
   ```bash
   # If you have Python 3 installed:
   python -m http.server 8000

   # If you have Python 2 installed:
   python -m SimpleHTTPServer 8000

   # Then visit: http://localhost:8000
   ```

### Option 2: GoDaddy Hosting Setup

1. **Prepare Files**
   - Keep the folder structure intact
   - Ensure all files are in the same directory structure as provided

2. **Upload to GoDaddy**
   - Access your GoDaddy File Manager
   - Navigate to `public_html` folder
   - Upload all files maintaining the folder structure:
     ```
     public_html/
     ├── index.html
     ├── about.html
     ├── contact.html
     ├── css/style.css
     ├── js/script.js
     └── images/
     ```

3. **Set Default Page**
   - In GoDaddy cPanel, set `index.html` as your default page
   - Or simply ensure you're accessing with `www.yourdomain.com` (GoDaddy defaults to index.html)

4. **DNS Configuration**
   - Use GoDaddy's DNS settings
   - Point your domain to the hosting account
   - Wait 24-48 hours for propagation

---

## ⚙️ Configuration Guide

### Update Company Information

Edit these values in each HTML file:

**1. WhatsApp Contact**
```html
<!-- Change this number to your actual WhatsApp number -->
https://wa.me/919876543210?text=Hello%20SBM%20Apparels
```

**2. Email Address**
```html
<!-- Update contact email -->
<a href="mailto:info@sbmapparels.com">info@sbmapparels.com</a>
```

**3. Business Hours**
- Edit the hours section in `contact.html`
- Update timezone if needed

**4. Google Maps Location**
- Replace the embedded map URL with your actual location
- Get your location URL from: https://maps.app.goo.gl/

**5. Meta Information**
- Update `<meta name="description">` in each HTML file
- Customize keywords for SEO

---

## 📝 Content Customization

### Add/Remove Products
Edit the product grid in `index.html`:
```html
<div class="product-card">
    <div class="product-image">
        <i class="fas fa-shirt"></i>
    </div>
    <div class="product-content">
        <h4>Product Name</h4>
        <p>Product description here</p>
    </div>
</div>
```

### Update Statistics
Modify trust indicators in `index.html`:
```html
<div class="trust-indicator">
    <div class="trust-number">15+</div>
    <div class="trust-label">Years of Experience</div>
</div>
```

### Customize Colors
Edit CSS variables in `css/style.css`:
```css
:root {
  --primary-green: #2d5016;
  --secondary-green: #3d6b21;
  --accent-dark: #1f2937;
  --accent-navy: #1e3a8a;
  --light-grey: #f3f4f6;
  --white: #ffffff;
  --text-dark: #1f2937;
  --text-light: #6b7280;
}
```

---

## 🖼️ Image Optimization

### Current Setup
- Images use CDN URLs (Unsplash) by default
- No local image storage required initially

### Adding Local Images
1. Create an `images/` folder in your project
2. Add your images (JPG, PNG, WebP)
3. Update image paths in HTML:
   ```html
   <!-- Before (CDN) -->
   <img src="https://images.unsplash.com/..." alt="Description">

   <!-- After (Local) -->
   <img src="images/my-image.jpg" alt="Description">
   ```

### Recommended Image Sizes
- Hero Background: 1920x1080px (or larger)
- Section Images: 800x600px
- Product Images: 400x300px
- Thumbnail Icons: 60x60px

### Image Optimization Tips
- Use JPEG for photographs
- Use PNG for graphics/logos
- Compress using: TinyPNG or ImageOptim
- Target max file size: 100KB per image

---

## 🔍 SEO Best Practices

### Already Implemented
- ✅ Meta descriptions on all pages
- ✅ Proper heading hierarchy (H1, H2, H3)
- ✅ Semantic HTML5 tags
- ✅ Mobile-responsive design
- ✅ Fast loading times
- ✅ Structured content

### Additional SEO Improvements
1. **Submit Sitemap**
   - Create `sitemap.xml` in root folder
   - Submit to Google Search Console

2. **Google Analytics**
   - Add tracking code to each page:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

3. **SSL Certificate**
   - Enable HTTPS on GoDaddy (usually free)
   - Update all links to use `https://`

4. **Local SEO**
   - Add your business to Google My Business
   - Include location-specific keywords
   - Add structured data markup

---

## ✨ Performance Optimization

### Current Performance Features
- Responsive images
- Minimal CSS (no unnecessary bloat)
- Optimized JavaScript
- CDN-hosted libraries
- Lazy loading on scroll

### Further Optimizations
1. **Enable Gzip Compression** (GoDaddy)
   - Usually enabled by default
   - Check in cPanel

2. **Browser Caching**
   - Add to `.htaccess`:
   ```
   <IfModule mod_expires.c>
     ExpiresActive On
     ExpiresByType text/css "access plus 1 month"
     ExpiresByType text/javascript "access plus 1 month"
   </IfModule>
   ```

3. **Minify CSS/JavaScript** (Optional)
   - Use tools like UglifyJS or CSSNano
   - Reduces file sizes by 30-40%

---

## 📧 Form Handling

### Current Setup
The contact form uses **Netlify Forms** configuration (attribute: `method="POST" netlify`).

### For GoDaddy Hosting (Without Netlify)
Replace form method with:

**Option 1: FormSubmit.co (Free)**
```html
<form action="https://formsubmit.co/YOUR_EMAIL@gmail.com" method="POST">
    <!-- form fields -->
</form>
```

**Option 2: Email via PHP (If GoDaddy has PHP)**
Create `send_email.php`:
```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['fullname']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "info@sbmapparels.com";
    $subject = "New Inquiry from " . $name;
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    mail($to, $subject, $body);
    echo "Thank you for your message!";
}
?>
```

Then update form:
```html
<form action="send_email.php" method="POST">
```

---

## 🐛 Troubleshooting

### Links Not Working
- Check file paths are relative (e.g., `index.html`, not `/index.html`)
- Ensure all files are in the same directory structure

### Images Not Loading
- Verify image file paths match the folder structure
- Check image file names for typos
- Ensure images are in the correct format

### Form Not Submitting
- Verify form action is set correctly
- Check email configuration is active
- Test in different browsers

### Mobile Menu Not Working
- Ensure Bootstrap JS is loaded
- Check browser console for JavaScript errors
- Verify Bootstrap CSS is properly linked

### Styling Issues
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS file path in HTML
- Verify Google Fonts are loading

---

## 🌐 Browser Compatibility

### Supported Browsers
- ✅ Chrome/Edge (Latest 2 versions)
- ✅ Firefox (Latest 2 versions)
- ✅ Safari (Latest 2 versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ⚠️ Internet Explorer (Limited support)

### Testing Tools
- Google Chrome DevTools
- Firefox Developer Tools
- BrowserStack (for multi-device testing)

---

## 📱 Mobile-First Design Notes

- Navigation menu collapses to hamburger on tablets
- Touch-friendly buttons (minimum 44px height)
- Font sizes scale appropriately
- Images and layout adapt to screen size
- Full functionality maintained on all devices

---

## 🔐 Security Considerations

### For GoDaddy Hosting
1. **Enable HTTPS**
   - Use free SSL certificate (included with most plans)
   - Redirect HTTP to HTTPS

2. **Protect Admin Areas**
   - If using `.htaccess`, protect directories
   - Keep contact forms secure

3. **Validate Form Input**
   - The provided form includes HTML5 validation
   - Add server-side validation if using PHP

4. **Backup Regularly**
   - Use GoDaddy backup service
   - Download files monthly

---

## 📞 Support & Customization

### Common Customizations
1. Add team member profiles
2. Integrate with CRM system
3. Add blog section
4. Implement language switcher
5. Add testimonials carousel

### Further Enhancements
- Add certification badges
- Implement FAQ accordion
- Create product comparison
- Add video content
- Build quote calculator

---

## 📄 License & Usage

This website template is created for **SBM Apparels Pvt Limited**.

**Usage Rights:**
- ✅ Full customization allowed
- ✅ Modify colors, content, structure
- ✅ Use on GoDaddy or any hosting platform
- ✅ No attribution required for production use

---

## 📋 Deployment Checklist

Before going live on GoDaddy:

- [ ] Update all company contact information
- [ ] Add WhatsApp business number
- [ ] Update email addresses
- [ ] Verify all links work (internal and external)
- [ ] Test form submission
- [ ] Check mobile responsiveness
- [ ] Test on multiple browsers
- [ ] Enable HTTPS/SSL
- [ ] Set up Google Analytics
- [ ] Submit sitemap to Search Console
- [ ] Test load times
- [ ] Verify Google Maps embed
- [ ] Check image optimization
- [ ] Test all buttons and CTAs
- [ ] Review footer information

---

## 🎉 You're All Set!

Your professional website for SBM Apparels is ready to deploy. For any issues or customizations, refer to the relevant sections above.

**Questions?** Visit:
- GoDaddy Support: https://www.godaddy.com/help
- Bootstrap Documentation: https://getbootstrap.com/docs/5.3/
- Font Awesome Icons: https://fontawesome.com/icons

---

**Last Updated:** February 2026
**Version:** 1.0
**Status:** Production Ready
