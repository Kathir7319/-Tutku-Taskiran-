# Tutku Taskiran Pet Grooming — Official Website

> **Gentle, Cage-Free 1-on-1 Care in Cary, NC**  
> Direct Line: (919) 825-3459 • By Appointment Only • Cary, North Carolina

A modern, mobile-responsive multi-page React application built for **Tutku Taskiran Pet Grooming**, designed to showcase cage-free 1-on-1 pet care, provide transparent breed pricing, display real transformations and reviews, and automate appointment requests with upfront rabies vaccination record collection.

---

## 🌟 Highlights & Features

- **Multi-Page Architecture (`react-router-dom`)**:
  - **Home (`/`)**: Hero section, trust badges, philosophy highlights, pricing preview, happy pups showcase, local reviews, and FAQ accordion.
  - **Our Approach (`/approach`)**: In-depth look at the 4 Pillars of cage-free grooming, fear-free handling, hypoallergenic products, and side-by-side comparison with commercial salons.
  - **Breed Pricing (`/pricing`)**: Transparent breakdown across Small Pups, Medium Pups, Large Pups, and Doodle/Curly Coat Specials with an interactive starting rate calculator.
  - **Happy Pups Gallery (`/gallery`)**: Filterable photo gallery (Doodles, Small, Medium, Large) featuring real cuts and testimonials from Cary & Wake County pet parents.
  - **FAQ (`/faq`)**: Searchable accordion answering questions about NC rabies certificate requirements, appointment timelines, nervous dog care, and studio location.
  - **Appointment & Rabies Upload Portal (`/book`)**: Comprehensive 8-field intake form with drag-and-drop rabies certificate uploader (PDF/JPG/PNG up to 10MB) and instant SMS confirmation preview.
- **Mobile-Responsive & Boutique Design**: Soft sage (`#5B7E6D`) and warm cream (`#FAF7EE`) palette, Playfair Display serif headings, Plus Jakarta Sans body copy, and a full mobile navigation drawer.
- **Vercel & Git Ready**: Configured with `vercel.json` SPA routing rewrites, `.gitignore`, and optimized production builds.

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open your browser to `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
Production assets are generated in the `dist/` directory.

---

## 📦 How to Push to Git (GitHub / GitLab)

### Step 1: Initialize Git and Create Initial Commit
Run the following in the project root:
```bash
git init
git add .
git commit -m "Initial commit: Tutku Taskiran Pet Grooming multi-page website"
```

### Step 2: Create a New Repository on GitHub
1. Go to [github.com/new](https://github.com/new).
2. Enter a repository name, e.g., `tutku-taskiran-pet-grooming`.
3. Choose **Public** or **Private**.
4. **Do NOT** initialize with a README, .gitignore, or license (these already exist in this project).
5. Click **Create repository**.

### Step 3: Link Remote and Push
Copy and run the commands shown by GitHub:
```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/tutku-taskiran-pet-grooming.git
git push -u origin main
```

---

## ⚡ How to Deploy on Vercel

### Option A: Deploy via GitHub (Recommended — Automatic CI/CD)
1. Go to [vercel.com](https://vercel.com) and sign in (with GitHub).
2. Click **Add New...** → **Project**.
3. Import your `tutku-taskiran-pet-grooming` repository.
4. Vercel automatically detects **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Your site will be live on a `*.vercel.app` URL within seconds! Every `git push` to `main` will automatically trigger a new deployment.

### Option B: Deploy via Vercel CLI
If you prefer deploying directly from the command line:
```bash
# Install Vercel CLI globally (if not already installed)
npm install -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

> **Note on Client-Side Routing:** The included `vercel.json` ensures all route paths (like `/pricing`, `/approach`, `/book`) correctly route to `index.html` without returning 404 errors.

---

## 📂 Project Structure

```
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.jsx      # Responsive header with mobile drawer & call button
│   │   ├── Footer.jsx      # SEO metadata, hours, location & links
│   │   └── TrustBadges.jsx # 3-column cage-free trust cards
│   ├── data/
│   │   └── groomingData.js # Single source of truth for pricing, reviews, FAQ, pillars
│   ├── pages/
│   │   ├── HomePage.jsx    # Complete showcase & above-the-fold hero
│   │   ├── ApproachPage.jsx# 4 Pillars & salon comparison
│   │   ├── PricingPage.jsx # Transparent pricing cards & interactive estimator
│   │   ├── GalleryPage.jsx # Filterable pup gallery & Cary reviews
│   │   ├── FaqPage.jsx     # Searchable FAQ accordion & NC rabies guidelines
│   │   └── BookingPage.jsx # Intake form & Rabies certificate file uploader
│   ├── App.jsx             # React Router setup & ScrollToTop
│   ├── index.css           # Tailwind directives & custom boutique styles
│   └── main.jsx            # Application entry point
├── index.html              # HTML shell with Google Fonts & SEO meta tags
├── tailwind.config.js      # Custom cream, sage, and clay color tokens
├── vite.config.js          # Vite configuration
├── vercel.json             # Vercel SPA rewrite routing rule
└── package.json            # Scripts & dependencies
```

---

## 🐾 Business Details

- **Business Name**: Tutku Taskiran Pet Grooming
- **Location**: Cary, North Carolina (Serving Cary, Apex, Morrisville & Wake County)
- **Phone**: (919) 825-3459
- **Model**: 100% Cage-Free, 1-on-1 Boutique Private Studio
- **Hours**: By Appointment Only • Monday – Saturday
