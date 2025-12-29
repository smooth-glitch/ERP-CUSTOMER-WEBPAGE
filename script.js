
// Animate counter numbers
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 200;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            counter.textContent = Math.floor(current);

            if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
            }
        }, 10);
    });
}

// Countdown timer
function updateCountdown() {
    const eventDate = new Date('2026-11-14T09:00:00');
    const now = new Date();
    const diff = eventDate - now;

    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
}

// Create neural network animation
function createNeuralNetwork() {
    const container = document.getElementById('neuralNetwork');
    const nodes = 20;

    for (let i = 0; i < nodes; i++) {
        const node = document.createElement('div');
        node.className = 'node';
        node.style.left = Math.random() * 100 + '%';
        node.style.top = Math.random() * 100 + '%';
        node.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(node);

        // Create connections
        if (i > 0 && Math.random() > 0.5) {
            const connection = document.createElement('div');
            connection.className = 'connection';
            connection.style.left = Math.random() * 100 + '%';
            connection.style.top = Math.random() * 100 + '%';
            connection.style.width = Math.random() * 200 + 50 + 'px';
            connection.style.animationDelay = Math.random() * 3 + 's';
            container.appendChild(connection);
        }
    }
}

// Create floating particles
function createParticles() {
    const container = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (10 + Math.random() * 4) + 's';
        container.appendChild(particle);
    }
}

// Schedule tab functionality
function showSchedule(day, event) {
    // Hide all schedule content
    document.querySelectorAll('.schedule-content').forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all tabs
    document.querySelectorAll('.tab-btn').forEach(tab => {
        tab.classList.remove('active');
    });

    // Show selected day and activate tab
    document.getElementById(day).classList.add('active');
    event.target.classList.add('active');
}

// Mobile menu toggle
function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileNav = document.getElementById('mobileNav');

    mobileMenu.classList.toggle('active');
    mobileNav.classList.toggle('active');

    // Prevent body scroll when menu is open
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : 'auto';
}

function closeMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileNav = document.getElementById('mobileNav');

    mobileMenu.classList.remove('active');
    mobileNav.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Timeline item toggle
function toggleTimelineItem(item) {
    item.classList.toggle('expanded');
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Update active menu items on scroll
function updateActiveMenuItem() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Update desktop menu
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });

            // Update mobile menu
            document.querySelectorAll('.mobile-nav a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(10, 10, 15, 0.95)';
        header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
    } else {
        header.style.background = 'rgba(10, 10, 15, 0.9)';
        header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
    }

    // Update active menu item
    updateActiveMenuItem();
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Initialize scroll animations
function initScrollAnimations() {
    // Add animation classes to elements
    document.querySelectorAll('.section h2').forEach(heading => {
        heading.classList.add('animate-on-scroll');
    });

    document.querySelectorAll('.timeline-item').forEach((item, index) => {
        item.style.setProperty('--stagger', index + 1);
        item.classList.add('stagger-animation');
    });

    // Observe all animation elements
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Add hexagonal decorations dynamically
function addHexDecorations() {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        if (index > 0) { // Skip hero section
            const hexCount = 2 + Math.floor(Math.random() * 3);
            for (let i = 0; i < hexCount; i++) {
                const hex = document.createElement('div');
                hex.className = 'hex-decoration';
                hex.style.top = Math.random() * 80 + 10 + '%';
                hex.style.left = Math.random() * 80 + 10 + '%';
                hex.style.animationDelay = Math.random() * 6 + 's';
                section.style.position = 'relative';
                section.appendChild(hex);
            }
        }
    });
}

// Handle contact form submission
function handleContactSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value;

    // Simulate form submission (in a real scenario, this would send to a server)
    if (name && email && subject && message) {
        // Show success message
        alert('Thank you for your message! We\'ll get back to you soon.');

        // Clear the form
        document.getElementById('contactName').value = '';
        document.getElementById('contactEmail').value = '';
        document.getElementById('contactSubject').value = '';
        document.getElementById('contactMessage').value = '';
    }
}

// Handle email submission
function handleEmailSubmit(event) {
    event.preventDefault();

    const emailInput = document.getElementById('emailInput');
    const formMessage = document.getElementById('formMessage');
    const email = emailInput.value;

    // Simulate form submission (in a real scenario, this would send to a server)
    if (email) {
        // Show success message
        formMessage.textContent = 'Thank you for signing up! We\'ll keep you updated on Chain Summit.';
        formMessage.className = 'form-message success';
        formMessage.style.display = 'block';

        // Clear the input
        emailInput.value = '';

        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    } else {
        // Show error message
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.className = 'form-message error';
        formMessage.style.display = 'block';

        // Hide message after 3 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 3000);
    }
}

// Initialize everything when page loads
window.addEventListener('load', () => {
    animateCounters();
    initAnalyticsCharts();
    createNeuralNetwork();
    createParticles();
    updateCountdown();
    initScrollAnimations();
    addHexDecorations();

    // Update countdown every second
    setInterval(updateCountdown, 1000);
});

// Your report data
const acqRows = [
    { acqId: 'acq0004', date: '10/12/2025', assetId: 'a0009', asset: 'Staff Desktop PCs (5 Nos)', amount: 275000, vendor: 'Global IT Distributors', funding: 'Bank' },
    { acqId: 'acq0005', date: '10/12/2025', assetId: 'a0010', asset: 'Core Network Switch & Router', amount: 90000, vendor: 'NetConnect Solutions', funding: 'Cash' },
    { acqId: 'acq0006', date: '10/12/2025', assetId: 'a0011', asset: 'Library Delivery Scooter', amount: 85000, vendor: 'City Motors', funding: 'Cash' },
    { acqId: 'acq0003', date: '05/12/2024', assetId: 'a0008', asset: 'Reference Section Steel Bookshelves', amount: 120000, vendor: 'Metro Furnitures', funding: 'Bank' },
    { acqId: 'acq0007', date: '01/12/2024', assetId: 'a0012', asset: 'Indoor CCTV Camera Set (12 Nos)', amount: 60000, vendor: 'SecureVision Systems', funding: 'Bank' },
    { acqId: 'acq0002', date: '20/09/2024', assetId: 'a0007', asset: 'Issue Counter Wooden Desk', amount: 45000, vendor: 'Metro Furnitures', funding: 'Cash' }
];

function initAnalyticsCharts() {
    if (typeof Chart === 'undefined') return; // you already load Chart.js in index.html [file:21]

    // ---------- URL helpers ----------
    function openAcqHist(filters = {}) {
        const base = (typeof buildIViewUrl === 'function')
            ? buildIViewUrl('acqhist')
            : 'iview.aspx?ivname=acqhist';

        const params = new URLSearchParams();
        if (filters.funding && filters.funding !== 'all') params.set('funding', filters.funding);
        if (filters.vendor && filters.vendor !== 'all') params.set('vendor', filters.vendor);
        if (filters.range && filters.range !== 'all') params.set('range', filters.range);

        const url = params.toString()
            ? (base + (base.includes('?') ? '&' : '?') + params.toString())
            : base;

        if (typeof openPopupUrl === 'function') openPopupUrl(url, 'modal-xl');
        else window.location.href = url;
    }

    // ---------- data helpers ----------
    function parseDDMMYYYY(s) {
        // "10/12/2025" -> Date
        const [dd, mm, yyyy] = String(s || '').split('/');
        return new Date(Number(yyyy), Number(mm) - 1, Number(dd));
    }

    function sumByKey(rows, key) {
        const m = new Map();
        rows.forEach(r => {
            const k = String(r[key] ?? '');
            const v = Number(r.amount ?? 0);
            m.set(k, (m.get(k) || 0) + (Number.isFinite(v) ? v : 0));
        });
        return [...m.entries()];
    }

    function uniqByKey(rows, key) {
        return [...new Set(rows.map(r => String(r[key] ?? '')).filter(Boolean))].sort();
    }

    // ---------- filter state ----------
    const ui = {
        range: document.getElementById('filterRange'),
        funding: document.getElementById('filterFunding'),
        vendor: document.getElementById('filterVendor'),
        reset: document.getElementById('filterReset'),
        kpiTotal: document.getElementById('kpiTotalSpend'),
        kpiCount: document.getElementById('kpiTxnCount'),
        kpiTopVendor: document.getElementById('kpiTopVendor'),
        kpiTopFunding: document.getElementById('kpiTopFunding'),
        kpiOpen: document.getElementById('kpiOpenAcqHist'),
        pieEl: document.getElementById('erpPieChart'),
        barEl: document.getElementById('erpBarChart')
    };

    const filter = {
        range: ui.range?.value || 'all',
        funding: ui.funding?.value || 'all',
        vendor: ui.vendor?.value || 'all'
    };

    function filterRows(rows) {
        const now = new Date();

        return rows.filter(r => {
            const d = parseDDMMYYYY(r.date);
            let okRange = true;

            if (filter.range === 'year') okRange = d.getFullYear() === now.getFullYear();
            if (filter.range === 'month') okRange = d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth();

            const okFunding = (filter.funding === 'all' || r.funding === filter.funding);
            const okVendor = (filter.vendor === 'all' || r.vendor === filter.vendor);

            return okRange && okFunding && okVendor;
        });
    }

    function formatINR(n) {
        return Number(n || 0).toLocaleString('en-IN');
    }

    function updateKPIs(rows) {
        const total = rows.reduce((s, r) => s + (Number(r.amount) || 0), 0);
        const count = rows.length;

        const topVendorAgg = sumByKey(rows, 'vendor').sort((a, b) => b[1] - a[1]);
        const topFundingAgg = sumByKey(rows, 'funding').sort((a, b) => b[1] - a[1]);

        if (ui.kpiTotal) ui.kpiTotal.textContent = formatINR(total);
        if (ui.kpiCount) ui.kpiCount.textContent = formatINR(count);
        if (ui.kpiTopVendor) ui.kpiTopVendor.textContent = topVendorAgg[0]?.[0] || '-';
        if (ui.kpiTopFunding) ui.kpiTopFunding.textContent = topFundingAgg[0]?.[0] || '-';
    }

    // ---------- populate dropdowns ----------
    function populateFilterOptions() {
        // Funding dropdown
        if (ui.funding) {
            const values = uniqByKey(acqRows, 'funding');
            ui.funding.querySelectorAll('option:not([value="all"])').forEach(o => o.remove());
            values.forEach(v => {
                const opt = document.createElement('option');
                opt.value = v;
                opt.textContent = v;
                ui.funding.appendChild(opt);
            });
        }

        // Vendor dropdown
        if (ui.vendor) {
            const values = uniqByKey(acqRows, 'vendor');
            ui.vendor.querySelectorAll('option:not([value="all"])').forEach(o => o.remove());
            values.forEach(v => {
                const opt = document.createElement('option');
                opt.value = v;
                opt.textContent = v;
                ui.vendor.appendChild(opt);
            });
        }
    }

    // ---------- (re)render charts ----------
    function renderCharts(rows) {
        // destroy if already created
        try { window.erpPieChartInstance?.destroy?.(); } catch (e) { }
        try { window.erpBarChartInstance?.destroy?.(); } catch (e) { }

        // PIE: funding
        if (ui.pieEl) {
            const fundingAgg = sumByKey(rows, 'funding').sort((a, b) => b[1] - a[1]);
            const labels = fundingAgg.map(x => x[0]);
            const values = fundingAgg.map(x => x[1]);

            window.erpPieChartInstance = new Chart(ui.pieEl, {
                type: 'pie',
                data: {
                    labels,
                    datasets: [{
                        data: values,
                        backgroundColor: ['#00ffff', '#ff00ff', '#7c3aed', '#22c55e', '#f59e0b', '#ef4444'],
                        borderColor: 'rgba(255,255,255,0.12)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    onClick: (evt, elements, chart) => {
                        if (!elements?.length) return;
                        const idx = elements[0].index;
                        const funding = chart.data.labels[idx];
                        openAcqHist({ ...filter, funding });
                    },
                    plugins: {
                        legend: { position: 'bottom', labels: { color: 'rgba(255,255,255,0.75)' } },
                        tooltip: {
                            callbacks: {
                                label: (ctx) => `${ctx.label}: ${formatINR(ctx.parsed)}`
                            }
                        }
                    }
                }
            });

            ui.pieEl.style.cursor = 'pointer';
        }

        // BAR: vendor
        if (ui.barEl) {
            const vendorAgg = sumByKey(rows, 'vendor').sort((a, b) => b[1] - a[1]);
            const labels = vendorAgg.map(x => x[0]);
            const values = vendorAgg.map(x => x[1]);

            window.erpBarChartInstance = new Chart(ui.barEl, {
                type: 'bar',
                data: {
                    labels,
                    datasets: [{
                        label: 'Acquisition Amount',
                        data: values,
                        backgroundColor: 'rgba(0,255,255,0.35)',
                        borderColor: '#00ffff',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    onClick: (evt, elements, chart) => {
                        if (!elements?.length) return;
                        const idx = elements[0].index;
                        const vendor = chart.data.labels[idx];
                        openAcqHist({ ...filter, vendor });
                    },
                    scales: {
                        x: { ticks: { color: 'rgba(255,255,255,0.7)' }, grid: { color: 'rgba(255,255,255,0.06)' } },
                        y: {
                            ticks: { color: 'rgba(255,255,255,0.7)', callback: (v) => formatINR(v) },
                            grid: { color: 'rgba(255,255,255,0.06)' }
                        }
                    },
                    plugins: {
                        legend: { position: 'bottom', labels: { color: 'rgba(255,255,255,0.75)' } },
                        tooltip: {
                            callbacks: {
                                label: (ctx) => `${ctx.dataset.label}: ${formatINR(ctx.parsed.y)}`
                            }
                        }
                    }
                }
            });

            ui.barEl.style.cursor = 'pointer';
        }
    }

    function renderAll() {
        const rows = filterRows(acqRows);
        updateKPIs(rows);
        renderCharts(rows);
    }

    // ---------- wire events ----------
    populateFilterOptions();

    ui.range?.addEventListener('change', () => { filter.range = ui.range.value; renderAll(); });
    ui.funding?.addEventListener('change', () => { filter.funding = ui.funding.value; renderAll(); });
    ui.vendor?.addEventListener('change', () => { filter.vendor = ui.vendor.value; renderAll(); });

    ui.reset?.addEventListener('click', () => {
        filter.range = 'all';
        filter.funding = 'all';
        filter.vendor = 'all';
        if (ui.range) ui.range.value = 'all';
        if (ui.funding) ui.funding.value = 'all';
        if (ui.vendor) ui.vendor.value = 'all';
        renderAll();
    });

    ui.kpiOpen?.addEventListener('click', () => openAcqHist({ ...filter }));

    // first render
    renderAll();
}
