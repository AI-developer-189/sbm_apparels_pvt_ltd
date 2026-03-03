# 📦 SBM Apparels - GoDaddy Deployment Guide

## Complete Step-by-Step Instructions for Going Live

---

## 📋 Pre-Deployment Checklist

Before uploading to GoDaddy, verify:

- [ ] All pages tested locally (index.html, about.html, contact.html)
- [ ] All links work correctly
- [ ] Mobile responsiveness verified (test on phone/tablet)
- [ ] Images display properly
- [ ] Contact form works
- [ ] WhatsApp links functional
- [ ] CSS and JavaScript files accessible
- [ ] No console errors in browser developer tools
- [ ] All spelling and grammar reviewed

---

## 🔑 Prerequisites

You need:
1. **GoDaddy Account** with active domain and hosting plan
2. **FTP Client** (optional) OR web-based File Manager
3. **Admin Access** to GoDaddy hosting account
4. **Your domain name** (e.g., www.sbmapparels.com)

### Recommended FTP Clients:
- FileZilla (free, Windows/Mac/Linux)
- WinSCP (free, Windows)
- Transmit (Mac, paid)
- Cyberduck (free, Mac)

---

## 🚀 Deployment Method 1: Using GoDaddy Web File Manager (Easiest)

### Step 1: Access File Manager
```
1. Go to https://godaddy.com
2. Sign in with your account credentials
3. Click "My Products" (top right)
4. Find your domain
5. Click "Manage" next to your domain
6. Look for "Web Hosting" or "File Manager"
7. Click on it (or click "Launch" if available)
```

### Step 2: Navigate to public_html
```
1. In File Manager, you'll see folders
2. Find and double-click "public_html"
3. This is where your website files go
4. Any files here are publicly accessible
```

### Step 3: Upload Website Files
```
1. Click "Upload" button
2. Select all website files:
   ✓ index.html
   ✓ about.html
   ✓ contact.html
   ✓ .htaccess
   ✓ robots.txt
   ✓ sitemap.xml

3. Upload folders:
   ✓ css/ (with style.css)
   ✓ js/ (with script.js)
   ✓ images/
```

**Important:** Keep the folder structure! Don't upload into subfolders.

### Step 4: Verify Upload
```
1. Navigate back to public_html
2. You should see:
   - index.html
   - about.html
   - contact.html
   - css/ folder
   - js/ folder
   - images/ folder
   - .htaccess file
   - robots.txt file
   - sitemap.xml file

3. If the structure is wrong, delete and re-upload
```

### Step 5: Set Default Page (if needed)
```
1. Right-click on index.html
2. Look for "Set as Index" or "Default Page"
3. If option doesn't appear, GoDaddy defaults to index.html automatically
```

### Step 6: Test Your Site
```
1. Open your browser
2. Type: https://www.yourdomain.com
3. Your website should load!
4. Test all pages work
5. Test mobile view
```

---

## 🚀 Deployment Method 2: Using FTP Client (More Control)

### Step 1: Get FTP Credentials
```
1. Log in to GoDaddy
2. Go to "My Products" → Your Domain
3. Click "Manage"
4. Look for "Web Hosting" section
5. Click "Manage" or "Advanced"
6. Find "FTP Accounts" or "FTP Access"
7. Copy:
   - FTP Host/Server
   - FTP Username
   - FTP Password
   - FTP Port (usually 21)
```

### Step 2: Download & Install FTP Client
```
Option A: FileZilla (Recommended)
- Go to filezilla-project.org
- Download FileZilla Client
- Install it
- Launch application

Option B: WinSCP (Windows only)
- Go to winscp.net
- Download WinSCP
- Install it
- Launch application
```

### Step 3: Connect to Server
**In FileZilla:**
```
1. Top menu: File → Site Manager
2. Click "New Site"
3. Fill in:
   - Host: [Your FTP Host from Step 1]
   - Port: 21
   - Protocol: FTP
   - Username: [Your FTP Username]
   - Password: [Your FTP Password]
4. Click "Connect"
5. Wait for connection
```

**In WinSCP:**
```
1. Host name: [Your FTP Host]
2. Username: [Your FTP Username]
3. Password: [Your FTP Password]
4. Port: 21
5. Click "Login"
```

### Step 4: Navigate to public_html
```
1. On the right side (Remote Site), look for "public_html"
2. Double-click to open it
3. This folder should be mostly empty
```

### Step 5: Upload Files
```
1. On left side (Local Site):
   - Navigate to where you saved the website files
   - Select all files and folders:
     * index.html
     * about.html
     * contact.html
     * css/ folder
     * js/ folder
     * images/ folder
     * .htaccess
     * robots.txt
     * sitemap.xml

2. Right-click and select "Upload"
   OR drag them to the right side

3. Files will upload to public_html
4. This might take 1-2 minutes
5. Wait for all files to complete
```

### Step 6: Verify File Permissions (Important!)
```
1. Right-click on .htaccess
2. Select "File Attributes" or "Permissions"
3. Set to: 644 or rw-r--r--
4. Right-click on index.html
5. Set to: 644 or rw-r--r--
6. Apply to all .html files and folders
```

### Step 7: Disconnect
```
1. In FileZilla: File → Disconnect
2. In WinSCP: Session → Close
```

---

## ✅ Post-Upload Verification

### Immediate Checks (1-5 minutes)
```
1. Open browser
2. Type: https://www.yourdomain.com
3. Wait for page to load (might take 10-30 seconds first time)
4. If error, wait 2-5 more minutes and try again
5. Refresh page (Ctrl+R or Cmd+R)
```

### Functional Tests
```
✓ Home page loads
✓ About page accessible via navigation
✓ Contact page accessible via navigation
✓ All links work (no 404 errors)
✓ Contact form displays
✓ WhatsApp button clickable
✓ Google Maps shows location
✓ Mobile menu works on phone
✓ Images load correctly
✓ Styling looks correct (colors, fonts)
✓ No console errors (F12 → Console tab)
```

### Mobile Testing
```
1. Open your phone browser
2. Visit https://www.yourdomain.com
3. Tap hamburger menu (≡)
4. Menu should expand
5. Test all navigation
6. Verify buttons are clickable
7. Check text is readable
8. Scroll and verify layout
```

### Desktop Testing
```
1. Test on Chrome
2. Test on Firefox
3. Test on Safari
4. Test on Edge
5. Check responsiveness (Resize browser window)
6. Use Chrome DevTools: F12 → Device Toggle (Ctrl+Shift+M)
```

---

## 🔒 Security & SSL Configuration

### Enable HTTPS (Very Important!)

**On GoDaddy (Automatic):**
```
1. Most GoDaddy plans include free SSL
2. Go to your domain management
3. Look for "SSL Certificates"
4. You should see "Secure" status
5. If not, click "Get SSL Certificate"
6. Select "Free SSL"
7. Complete setup (usually automatic)
```

**Verify HTTPS is Active:**
```
1. Visit your website
2. Look at address bar
3. You should see 🔒 padlock icon
4. URL should start with https://
5. If you see ⚠️ warning, SSL might have issues
```

**Force HTTPS (Optional but Recommended):**
```
In .htaccess, uncomment this section:
```
```
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```
```
This redirects all HTTP traffic to HTTPS
```

---

## 🌐 DNS Configuration (If Needed)

If your domain doesn't automatically point to GoDaddy:

```
1. Log in to GoDaddy
2. Go to "My Products" → Your Domain
3. Click "Manage"
4. Look for "DNS" or "Nameservers"
5. You should see GoDaddy nameservers:
   - ns01.domaincontrol.com
   - ns02.domaincontrol.com

If different nameservers are listed:
1. Contact your domain registrar
2. Update nameservers to GoDaddy's
3. Wait 24-48 hours for propagation
```

---

## 📊 Analytics & Monitoring

### Set Up Google Analytics
```
1. Go to https://analytics.google.com
2. Sign in with Google account
3. Click "Start measuring"
4. Enter your website URL
5. Copy the Tracking ID
6. In your HTML files, add before </head>:
```

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

### Submit to Google Search Console
```
1. Go to https://search.google.com/search-console
2. Click "URL prefix"
3. Enter: https://www.yourdomain.com
4. Follow verification steps
5. Submit your sitemap.xml
6. Monitor search performance
```

### Submit Sitemap to Bing
```
1. Go to https://www.bing.com/webmasters
2. Add your website
3. Submit sitemap.xml
```

---

## 🆘 Troubleshooting

### Issue: "Site Can't Be Reached" or "Connection Refused"
```
Solutions:
1. Wait 5-10 minutes (DNS propagation)
2. Clear browser cache (Ctrl+Shift+Delete)
3. Try incognito/private browser
4. Check if files actually uploaded
5. Verify public_html folder has files
6. Check file permissions (should be 644)
```

### Issue: Page Shows Directory Listing Instead of Website
```
Solution:
1. Check index.html is in public_html
2. Right-click index.html
3. Set as Default Page or Index
4. Refresh browser
```

### Issue: Styling Not Applied (Page Looks Broken)
```
Solutions:
1. Check css/ folder uploaded correctly
2. Check css/style.css exists
3. Check permissions on CSS file (644)
4. Hard refresh: Ctrl+Shift+R
5. Clear browser cache completely
6. Try different browser
```

### Issue: Links Show "404 Not Found"
```
Solutions:
1. Check .html files exist in public_html
2. Check file names exact (case-sensitive)
3. Check links use correct file names
4. Don't use absolute paths like /index.html
5. Use relative paths like index.html or ./index.html
```

### Issue: Contact Form Not Working
```
Solutions:
1. Check form in contact.html
2. If using Netlify forms:
   - Set up Netlify account
   - Connect your domain
3. If using FormSubmit:
   - Update email in form action
   - Check email inbox (might go to spam)
4. Test by submitting from different browser
```

### Issue: WhatsApp Link Not Working
```
Solution:
1. Check phone number format
2. Should start with 91 (India code)
3. Example: 919876543210
4. Test by clicking link
5. Should open WhatsApp or web version
```

### Issue: Maps Not Loading
```
Solutions:
1. Check Google Maps embed URL
2. Verify iframe width/height settings
3. Try different map location
4. Check if ad blocker is blocking maps
5. Test in different browser
```

---

## 📧 Email Configuration (Optional)

If you want to receive emails through your domain:

```
1. Go to GoDaddy → Your Domain
2. Click "Manage"
3. Look for "Email Accounts" or "Email"
4. Create email address (e.g., info@yourdomain.com)
5. Set up email forwarding or
6. Configure email client to access mailbox
```

---

## 📱 Mobile App Testing

Test your website on:
- iPhone Safari
- Android Chrome
- Android Firefox
- Tablet browsers

Use tools like:
- BrowserStack: https://www.browserstack.com
- LambdaTest: https://www.lambdatest.com

---

## 🔄 Updating Your Website

After going live, if you need to update content:

### Using Web File Manager:
```
1. Log in to GoDaddy
2. Go to File Manager
3. Navigate to public_html
4. Find file to edit
5. Right-click → Edit or Edit with Code Editor
6. Make changes
7. Save
8. Wait 5 seconds for changes to appear online
```

### Using FTP:
```
1. Connect with FTP client
2. Download file to your computer
3. Edit locally
4. Upload back to server
5. Wait 5 seconds for changes
6. Refresh website in browser
```

---

## 🎉 Congratulations!

Your website is now live! Here's what to do next:

1. **Share Your Website**
   - Tell clients about it
   - Share on social media
   - Update business cards with URL

2. **Monitor Performance**
   - Check Google Analytics
   - Monitor loading speed
   - Track visitor behavior

3. **Keep Content Fresh**
   - Update products as needed
   - Add testimonials
   - Share company news

4. **Backup Regularly**
   - Download website files monthly
   - Keep local copy on your computer
   - Use GoDaddy backup if available

5. **Promote Your Site**
   - Get backlinks from industry sites
   - List on Google My Business
   - Consider SEO optimization

---

## 📞 Getting Help

### GoDaddy Support:
- **Phone:** 1-800-283-0109 (US)
- **Chat:** support.godaddy.com
- **Email:** Through account

### Technical Issues:
- Check browser console (F12)
- Look for error messages
- Try incognito/private mode
- Contact your hosting provider

---

## ✨ Final Checklist

- [ ] Files uploaded to public_html
- [ ] Website loads at www.yourdomain.com
- [ ] All pages accessible
- [ ] Mobile responsive
- [ ] HTTPS/SSL enabled (🔒)
- [ ] Contact form working
- [ ] WhatsApp link working
- [ ] Google Maps loading
- [ ] No 404 errors
- [ ] Styling correct
- [ ] Images displaying
- [ ] Tested on multiple browsers
- [ ] Tested on mobile/tablet
- [ ] Google Analytics set up
- [ ] Sitemap submitted to Google Search Console
- [ ] Business listed on Google My Business

---

**Your website is ready for the world! 🚀**

For detailed information on any aspect, refer to the main README.md file.
