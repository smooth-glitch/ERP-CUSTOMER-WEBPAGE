# 🧩 Axpert ERP Customer Portal (Frontend)

A modern, responsive **ERP customer/workspace portal** built with **HTML**, **CSS**, and **Vanilla JavaScript**, designed to launch Axpert ERP modules, reports, and dashboards from one place.

---

## ✨ Highlights

- ⚡ One-page ERP workspace for **Sales / Purchase / Assets / Finance**
- 🧭 Quick Links to open key **TStructs** and **IViews**
- 📊 Analytics dashboard with **Chart.js** (filters + KPI cards + drilldowns)
- 📩 **Support & Updates**: Subscribe + Support Request forms (EmailJS-ready)
- 📱 Fully responsive UI with animations, tabs, smooth scrolling, and mobile navigation

---

## 🧱 Tech Stack

<p align="center">
  <!-- Core -->
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000" alt="JavaScript"/>

  <!-- UI -->
  <img src="https://img.shields.io/badge/Bootstrap%205-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap 5"/>
  <img src="https://img.shields.io/badge/Bootstrap%20Icons-000000?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap Icons"/>

  <!-- Charts -->
  <img src="https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white" alt="Chart.js"/>

  <!-- Storage -->
  <img src="https://img.shields.io/badge/LocalStorage-334155?style=for-the-badge" alt="LocalStorage"/>

  <!-- Hosting & Tools -->
  <img src="https://img.shields.io/badge/GitHub-121011?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
  <img src="https://img.shields.io/badge/Git-F05033?style=for-the-badge&logo=git&logoColor=white" alt="Git"/>
  <img src="https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white" alt="GitHub Pages"/>
  <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Netlify"/>
</p>

---

## 🚀 Getting Started

### ✅ Run locally (recommended)
1. Clone the repo:

2. Start a local server (any static server works):
- VS Code extension: **Live Server**
- or:
  ```
  python -m http.server 5500
  ```

3. Open in browser:
- Live Server: open `http://127.0.0.1:5500`
- Python: open `http://127.0.0.1:5500/index.html`

---

## 🔗 Axpert Integration (How links work)

This portal uses **data-attributes** to open ERP screens:

### 🧾 TStruct (Forms)
<a href="javascript:void(0)" data-eot="transid=sinv,recordid=0">Sales Invoice</a>

Generates a URL similar to:
tstruct.aspx?transid=<TRANSID>&recordid=<ID>&act=opendummy&load=false

### 📄 IView (Reports)
<a href="javascript:void(0)" data-ivname="mpur" data-size="modal-xl">Monthly Purchase Summary</a>

Generates:
iview.aspx?ivname=<IVNAME>

### 🪟 Popup handling
If `window.parent.createPopup` is available (inside Axpert shell), the portal opens screens in a popup.
Otherwise, it falls back to regular navigation.

---

## 📊 Analytics Dashboard

The **Analytics** section includes:
- 🧰 Filters: Range (All / Year / Month), Funding, Vendor
- 🧮 KPI cards: Total Spend, Transactions, Top Vendor, Top Funding
- 🥧 Pie chart: Funding split
- 📊 Bar chart: Vendor spend

### 🖱️ Drilldowns
Clicking chart segments/bars opens **Acquisition History** with filters (vendor/funding/range) passed via query params.

> Note: Current analytics uses a demo dataset inside `script.js`. Replace it with API data to go production-ready.

---

## ✉️ EmailJS Setup (Optional)

This page supports EmailJS via CDN for:
- ✅ Subscribe form (updates/downtime/rollouts)
- ✅ Support request form (bug/enhancement/access)

### 🔧 Configure
In `index.html`, replace these values with your EmailJS credentials:
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const TEMPLATE_SUBSCRIBE = "YOUR_SUBSCRIBE_TEMPLATE_ID";
const TEMPLATE_SUPPORT = "YOUR_SUPPORT_TEMPLATE_ID";

> Security note: These values are visible in the browser. Use EmailJS domain restrictions and keep templates locked down.

---

## 🛠️ Customization

- 🧩 Update Quick Links:
  - Edit `data-eot` (TStruct `transid`)
  - Edit `data-ivname` (IView names)
  - Edit `data-chartid` (Chart IDs)

- 🏷️ Branding:
  - Update logo text, footer credits, and theme colors in `styles.css`

- 📈 Analytics:
  - Replace the demo acquisition rows in `script.js` with real API data

---

## 📌 Roadmap (Ideas)

- 🔐 Add login/session gating (Axpert SSO or token-based)
- 🧾 Replace hardcoded data with API calls
- 📤 Export analytics + tables to CSV/PDF
- 🧠 Add searchable global command palette for Quick Links

---

## 🙌 Author

Designed & developed by **Arjun**.
