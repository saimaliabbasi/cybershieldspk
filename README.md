<div align="center">

<img src="https://img.shields.io/badge/CyberShield-Pakistan-0C447C?style=for-the-badge&logo=shield&logoColor=white" alt="CyberShield Pakistan"/>

# 🛡 CyberShield Pakistan

### *Protecting Pakistan Online*

**A free, volunteer-led cyber safety awareness platform helping victims of cyberbullying, picture leaking, account hacking, blackmail, and online harassment in Pakistan understand their rights and find the right support.**

<br>

[![Website](https://img.shields.io/badge/🌐_Website-cybershieldspk.netlify.app-185FA5?style=flat-square)](https://cybershieldpk.netlify.app)
[![Email](https://img.shields.io/badge/📧_Email-cybershieldspk@gmail.com-185FA5?style=flat-square)](mailto:cybershieldpk@gmail.com)

[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Phase](https://img.shields.io/badge/Phase-1_Awareness-orange?style=flat-square)](#our-three-phases)

<br>

> ⚠️ **CyberShield is an independent volunteer-led initiative.**
> We are not a law enforcement agency, not a registered NGO, and not affiliated with any government body.
> We help connect cybercrime victims with appropriate authorities and support organizations.

</div>

---

## 🚨 Need urgent help right now?

Do not wait. Contact these official organizations immediately:

| Organization | Contact | Type |
|-------------|---------|------|
| 🏛 FIA Cyber Crime Wing | **0800-02345** | Free helpline — government law enforcement |
| ⚖️ Digital Rights Foundation | **0800-39393** | Free helpline — legal advice |
| 📡 PTA Complaint System | **complaints.pta.gov.pk** | Online portal — content removal |
| 💙 Rozan Pakistan | **info@rozan.org** | Email — counseling and emotional support |

---

## 📖 Table of contents

- [About CyberShield](#about-cybershield)
- [Our three phases](#our-three-phases)
- [What we cover](#what-we-cover)
- [Project structure](#project-structure)
- [Running locally](#running-locally)
- [Deploying to Netlify](#deploying-to-netlify)
- [How to make changes](#how-to-make-changes)
- [Design system](#design-system)
- [Contributing](#contributing)
- [Legal information](#legal-information)
- [Acknowledgements](#acknowledgements)

---

## 🇵🇰 About CyberShield

CyberShield Pakistan was started because of a simple and painful observation.

Millions of Pakistanis face cyberbullying, picture leaking, account hacking, blackmail, sextortion, impersonation, and online stalking every year. Most suffer in silence because they do not know their rights, do not know where to go, or are too afraid or ashamed to speak.

Reporting to authorities felt impossible. Finding legal help felt out of reach. And the shame that victims carried was something no one should ever have to carry alone.

**We started as a single volunteer in Rawalpindi with a Gmail account and a mission.**

We believe that every Pakistani victim of online abuse deserves a safe, simple, and confidential path to information, support, and justice — regardless of their income, education, or location.

### Our mission
> To ensure every Pakistani victim of online abuse has a safe, accessible, and confidential path to information, support, and justice — completely free.

### Our vision
> A Pakistan where no one suffers online harassment in silence because they did not know their rights or did not know where to turn.

---

## 🗺 Our three phases

```
Phase 1 — Awareness          Phase 2 — Partnerships       Phase 3 — Complaint system
      ✅ Active                    🔄 In progress                  ⏳ Coming soon
         │                              │                                │
Educate the public          Formal agreements with           Full secure complaint
about PECA 2016 and         FIA, PTA, Rozan, and            submission and case
cybercrime rights           Digital Rights Foundation        tracking system
```

**We are currently in Phase 1.**

We refuse to accept complaints we cannot properly support. Our full complaint system will launch only after we have confirmed support pathways for every victim who comes to us. That is our commitment.

---

## 🔴 What we cover

CyberShield provides awareness resources and guidance on six types of online abuse:

| Issue | Description | Pakistani law |
|-------|-------------|---------------|
| 💬 Cyberbullying | Repeated harassment, threats, or humiliation online | PECA 2016 Section 20 — up to 3 years jail |
| 📷 Picture and video leaking | Private images shared without consent | PECA 2016 Section 21A — up to 5 years jail |
| 🔓 Account hacking | Unauthorized access to social media or email | PECA 2016 Section 16 — up to 3 months jail |
| 👤 Impersonation | Fake accounts using your identity | PECA 2016 Section 22 — up to 3 years jail |
| ⚠️ Blackmail and sextortion | Threats to expose content for money or acts | PECA 2016 Section 24 — criminal offence |
| 👁 Online stalking | Persistent following, monitoring, or contact | PECA 2016 Section 21 — up to 1 year jail |

---

## 📁 Project structure

```
cybershield-pakistan/
│
├── 📄 index.html                   Home page — hero, trust signals, phase roadmap
├── 📄 about.html                   About us — story, mission, values, team, journey
├── 📄 awareness.html               Awareness and resources — article grid
├── 📄 contact.html                 Contact us — form, social links, emergency contacts
├── 📄 know-your-rights.html        Know your rights — PECA 2016, rights, steps
│
├── 📁 articles/                    In-depth awareness articles
│   ├── cyberbullying.html          What is cyberbullying and your rights
│   ├── picture-leaking.html        My pictures were leaked — what to do now
│   ├── hacking.html                My account was hacked — recovery guide
│   ├── blackmail.html              Blackmail and sextortion — do not pay
│   ├── peca-2016.html              PECA 2016 explained in simple language
│   ├── evidence.html               How to collect and preserve evidence
│   ├── impersonation.html          Impersonation and fake accounts
│   └── stalking.html               Online stalking — rights and action
│
├── 📁 css/
│   └── styles.css                  Complete design system — colors, layout, responsive
│
├── 📁 js/
│   └── main.js                     Mobile navigation toggle and contact form handler
│
├── 📁 .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md           Bug report template
│   │   ├── content_update.md       Content correction template
│   │   └── feature_request.md      Feature request template
│   └── workflows/
│       └── deploy.yml              Auto-deploy to Netlify on push to main
│
├── 🖼 favicon.svg                  Browser tab icon — CS shield
├── ⚙️ netlify.toml                 Netlify config — security headers, caching, 404
├── 📋 README.md                    This file
├── 📜 LICENSE                      MIT License
├── 🤝 CONTRIBUTING.md              How to contribute
└── 🔒 .gitignore                   Files Git should not track
```

---

## 💻 Running locally

### Option 1 — Open directly
Double-click `index.html`. Opens in your browser immediately. Good for reading content.

> Note: The contact form uses `mailto:` so it opens your email app. On some browsers file:// links have limitations.

### Option 2 — Python local server (recommended)
```bash
# Navigate to project folder
cd cybershield-pakistan

# Python 3
python -m http.server 8080

# Python 2
python -m SimpleHTTPServer 8080
```
Then open **http://localhost:8080** in your browser.

### Option 3 — Node.js
```bash
npx serve .
```
Then open the link it gives you.

---

## 🌐 Deploying to Netlify

This site is a plain static HTML website. No build step needed. No frameworks. No dependencies.

### Method 1 — Drag and drop (fastest, no Git needed)
1. Go to [netlify.com](https://netlify.com) and sign up free with Gmail
2. On your dashboard find the drag and drop box
3. Drag your entire project folder onto it
4. Netlify gives you a random URL like `amazing-panda-123.netlify.app`
5. Go to **Site settings → General → Change site name**
6. Type `cybershieldpk`
7. Your site is live at **cybershieldpk.netlify.app**

To update: drag and drop the folder again. Takes 30 seconds.

### Method 2 — Connect GitHub (recommended)
1. Push this repository to GitHub
2. Go to Netlify → **New site from Git**
3. Connect your GitHub account
4. Select `cybershield-pakistan` repository
5. Build settings: leave everything blank
6. Click **Deploy site**
7. Every push to `main` branch auto-deploys in under 30 seconds

### Setting up auto-deploy secrets
After connecting GitHub to Netlify, add these two secrets to your GitHub repository:

Go to **GitHub repo → Settings → Secrets and variables → Actions → New repository secret**

| Secret name | Where to find it |
|-------------|-----------------|
| `NETLIFY_AUTH_TOKEN` | Netlify → User settings → Personal access tokens → New token |
| `NETLIFY_SITE_ID` | Netlify → Your site → Site settings → General → Site ID |

After adding both secrets, every push to `main` automatically deploys.

---

## ✏️ How to make changes

### Change text on any page
Open the `.html` file in any text editor. Find the text. Change it. Save. Re-upload to Netlify.

No coding knowledge needed for text changes.

### Change colors
Open `css/styles.css`. At the very top find the `:root` block:

```css
:root {
  --navy: #0C447C;
  --blue: #185FA5;
  --light-blue: #E6F1FB;
  /* ... */
}
```

Change the hex values. The change applies across the entire website instantly.

### Add a new article
1. Copy any file from `articles/` folder
2. Rename it — for example `articles/online-scams.html`
3. Change the `<title>` tag and everything inside `<article class="article-content">`
4. Add a card for it in `awareness.html`

### Add your real social media links
Search any `.html` file for `href="#"` and replace `#` with your real profile URL.

### Add your WhatsApp number
Search all files for `92XXXXXXXXXX` and replace with your real Pakistan mobile number in international format. For example if your number is 0300-1234567 write it as `923001234567`.

### Update your team details on About page
Open `about.html`. Find the team section. Replace `SA` with your real initials and `Saim` with your name.

---

## 🎨 Design system

The entire website uses a custom CSS design system with no external dependencies. Everything loads from `css/styles.css`.

### Color palette

| Variable | Hex | Usage |
|----------|-----|-------|
| `--navy` | `#0C447C` | Headings, footer background, navigation |
| `--blue` | `#185FA5` | Buttons, links, primary actions |
| `--blue-medium` | `#2B7BC6` | Icons, hover states, badges |
| `--light-blue` | `#E6F1FB` | Hero background, section backgrounds |
| `--gray` | `#666666` | Body text, descriptions |
| `--gray-light` | `#F5F5F5` | Alternate section backgrounds |
| `--gray-border` | `#DDDDDD` | Card borders, dividers |
| `--red` | `#C62828` | Punishment text, urgent warnings |
| `--amber` | `#E65100` | Disclaimer box accents |
| `--green-dark` | `#2E7D32` | Vision section text |
| `--navy-dark` | `#083358` | Footer disclaimer bar |

### Typography
```
Font: 'Segoe UI', system-ui, -apple-system, sans-serif
```
Zero external font dependencies. Loads instantly on all internet connections including slow mobile data in Pakistan.

### Responsive breakpoints
| Breakpoint | Layout |
|-----------|--------|
| Above 900px | Full desktop grid layouts |
| 768px to 900px | Reduced column layouts |
| Below 768px | Single column, hamburger menu |

### Key CSS classes
| Class | Purpose |
|-------|---------|
| `.hero` | Full height hero section |
| `.section-inner` | Max-width content container |
| `.bg-navy` | Dark navy background section |
| `.bg-light-blue` | Light blue background section |
| `.cards-grid` | Two-column card grid |
| `.emergency-grid` | Emergency contact cards |
| `.law-card` | PECA law section cards |
| `.article-content` | Article page typography |
| `.page-disclaimer` | Top disclaimer bar |
| `.footer-disclaimer-bar` | Bottom disclaimer bar |

---

## 🤝 Contributing

We welcome contributions from developers, writers, lawyers, translators, and anyone who wants to help protect Pakistanis online.

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for full guidelines.

### What we need most right now

| Priority | Task | Skills needed |
|----------|------|--------------|
| 🔴 High | Urdu translation of home page | Urdu writing |
| 🔴 High | Urdu translation of Know your rights page | Urdu writing + legal |
| 🟡 Medium | WhatsApp floating button with real number | None — just update number |
| 🟡 Medium | Real social media links | None — just update URLs |
| 🟡 Medium | Stalking article expanded content | Writing |
| 🟢 Low | Dark mode support | CSS |
| 🟢 Low | Print stylesheet for rights page | CSS |
| 🟢 Low | Accessibility improvements | HTML |

### Quick contribution steps
```bash
# 1. Fork this repository on GitHub

# 2. Clone your fork
git clone https://github.com/YOUR-USERNAME/cybershield-pakistan.git

# 3. Create a branch
git checkout -b fix/your-change-description

# 4. Make your changes and test locally

# 5. Commit
git commit -m "Brief description of change"

# 6. Push and open a Pull Request
git push origin fix/your-change-description
```

---

## ⚖️ Legal information

### Disclaimer
CyberShield Pakistan is an **independent volunteer-led initiative**. We are not yet registered as an NGO and are not affiliated with any government body, law enforcement agency, or official authority. We operate on the basis of community service and direct all cases requiring official action to appropriate registered authorities.

**Submitting information to CyberShield does not constitute an official legal report.** For official crime reporting contact FIA Cyber Crime Wing on **0800-02345**.

### License
This project is licensed under the **MIT License** — see [LICENSE](LICENSE) for full details.

You are free to use, copy, modify, and distribute this code for any purpose. If you build a similar platform for another country or cause using this code, we would love to hear about it.

### Content accuracy
All legal information on this website refers to Pakistan's **Prevention of Electronic Crimes Act 2016 (PECA 2016)**. While we make every effort to ensure accuracy, this website does not constitute legal advice. For legal guidance contact Digital Rights Foundation on **0800-39393**.

---

## 📊 Project status

| Item | Status |
|------|--------|
| Home page | ✅ Complete |
| Know your rights page | ✅ Complete |
| Awareness and resources page | ✅ Complete |
| About us page | ✅ Complete |
| Contact page | ✅ Complete |
| 8 awareness articles | ✅ Complete |
| Mobile responsive design | ✅ Complete |
| Netlify configuration | ✅ Complete |
| GitHub Actions auto-deploy | ✅ Complete |
| Favicon | ✅ Complete |
| Urdu translation | ⏳ Needed |
| Real social media links | ⏳ Add after accounts created |
| WhatsApp number | ⏳ Add your number |
| Complaint system | ⏳ Phase 3 |
| Case tracking | ⏳ Phase 3 |
| Admin dashboard | ⏳ Phase 3 |

---

## 🙏 Acknowledgements

Built with care by the CyberShield Pakistan volunteer team in Rawalpindi, Pakistan.

Inspired by the courage of every victim who speaks up.

Grateful to the work of [Digital Rights Foundation](https://digitalrightsfoundation.pk), [Rozan Pakistan](https://rozan.org), FIA Cyber Crime Wing, and PTA for the real work they do protecting Pakistanis online every day.

Dedicated to a Pakistan where no one suffers online harassment in silence.

---

