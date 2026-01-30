# Nexus AI — AI Consulting Landing Page

A modern, high-converting landing page for an AI consulting agency. Built with Next.js 16, Tailwind CSS v4, and Framer Motion.

![Nexus AI](public/assets/logo.svg)

---

## 🚀 About

**Nexus AI** helps businesses transform with intelligent AI solutions — from custom AI agents and machine learning models to end-to-end process automation. This landing site showcases our capabilities and drives leads.

### Services We Offer
- **AI Agents** — Autonomous agents for customer service and operations
- **Machine Learning** — Custom ML models for predictive analytics
- **Data Analytics** — AI-driven visualization and business intelligence
- **Full-Stack AI Development** — LLM-powered applications
- **Process Automation** — Workflow automation at scale
- **AI Governance** — Ethical, secure, and compliant AI

---

## ✨ Features

- **Dark theme** with green accent palette
- **Glassmorphism** cards and subtle grid patterns
- **Smooth animations** via Framer Motion
- **Responsive design** — mobile-first
- **SEO-ready** with Next.js metadata API
- **Optimized fonts** via `next/font` (Geist)

---

## 🛠 Tech Stack

| Layer        | Technology                        |
|--------------|-----------------------------------|
| Framework    | Next.js 16 (App Router)           |
| Styling      | Tailwind CSS v4                   |
| Animations   | Framer Motion                     |
| Icons        | Lucide React                      |
| Fonts        | Geist (via next/font)             |
| Email        | Resend                            |

---

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your Resend API key

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Available Scripts

| Command         | Description                  |
|-----------------|------------------------------|
| `npm run dev`   | Start dev server             |
| `npm run build` | Production build             |
| `npm run start` | Run production server        |
| `npm run lint`  | Lint with ESLint             |

---

## 🗂 Project Structure

```
app/
├── api/
│   └── contact/
│       └── route.ts  # Contact form API endpoint
├── globals.css       # Theme tokens, base styles
├── layout.tsx        # Root layout + fonts
├── page.tsx          # Landing page (composes sections)
├── icon.svg          # Favicon (auto-detected by Next.js)
└── logo.svg          # Brand logo

components/
├── Navbar.tsx        # Navigation bar with logo
├── Hero.tsx          # Hero section with CTA
├── LogoCloud.tsx     # Trusted-by logos
├── Services.tsx      # Service offerings grid
├── Industries.tsx    # Industries we serve
├── Features.tsx      # Why choose us
├── Process.tsx       # Our process steps
├── Testimonials.tsx  # Client testimonials
├── FAQ.tsx           # Frequently asked questions
├── Contact.tsx       # Contact form / CTA
└── Footer.tsx        # Footer with links

public/assets/
└── logo.svg          # Logo asset
```

---

## 📧 Contact Form (Email)

The contact form sends submissions directly to your email via [Resend](https://resend.com).

### Setup

1. **Get a free API key** at [resend.com/api-keys](https://resend.com/api-keys)

2. **Create `.env.local`** in project root:
   ```bash
   RESEND_API_KEY=re_your_api_key_here
   EMAIL_TO=your-email@example.com
   ```

3. **Restart dev server** — form submissions will now email you!

### Configuration

| Variable         | Description                                      |
|------------------|--------------------------------------------------|
| `RESEND_API_KEY` | Your Resend API key                              |
| `EMAIL_TO`       | Email address to receive submissions             |
| `EMAIL_FROM`     | Sender address (default: `onboarding@resend.dev`)|

### Custom Domain (Optional)

To send from your own domain (e.g., `contact@nexusai.com`):
1. Add and verify your domain in [Resend dashboard](https://resend.com/domains)
2. Update `EMAIL_FROM` in `.env.local`

---

## 🎨 Theming

Colors are defined as CSS variables in `app/globals.css`:

| Variable              | Value       | Usage                |
|-----------------------|-------------|----------------------|
| `--background`        | `#050505`   | Page background      |
| `--foreground`        | `#ecf39e`   | Primary text         |
| `--primary`           | `#4f772d`   | Buttons, accents     |
| `--secondary`         | `#31572c`   | Secondary elements   |
| `--accent`            | `#90a955`   | Highlights           |
| `--muted-foreground`  | `#90a955`   | Subtle text          |

To customize, edit the `:root` block in `globals.css`.

---

## 🖼 Branding

- **Navbar logo**: Edit `components/Navbar.tsx` — adjust `Image` size or swap the SVG
- **Favicon**: Replace `app/icon.svg` (Next.js auto-detects `icon.svg` or `icon.png`)
- **Footer**: Text-only brand in `components/Footer.tsx`

---

## 🚢 Deployment

```bash
npm run build
npm run start
```

### Deploy to Vercel (recommended)
```bash
npx vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deployments.

### Environment Variables

Set these in your deployment platform (Vercel, Netlify, etc.):

| Variable         | Required | Description                    |
|------------------|----------|--------------------------------|
| `RESEND_API_KEY` | Yes      | Resend API key for emails      |
| `EMAIL_TO`       | Yes      | Your email to receive contacts |
| `EMAIL_FROM`     | No       | Custom sender address          |

---

## 📄 License

MIT — use freely for your own projects.

---

**Built with ❤️ by the Nexus AI team**
