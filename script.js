document.addEventListener('DOMContentLoaded', () => {

    // 1. MOBILE HAMBURGER MENU TOGGLE
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('nav a');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            hamburgerBtn.classList.toggle('active');
            navMenu.classList.toggle('open');
        });

        // Tutup menu saat salah satu link diklik
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburgerBtn.classList.remove('active');
                navMenu.classList.remove('open');
            });
        });

        // Tutup menu jika mengklik di luar header
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                hamburgerBtn.classList.remove('active');
                navMenu.classList.remove('open');
            }
        });
    }

    // 2. SET MINIMUM TANGGAL PREFERENSI KEPADA HARI INI
    const dateInput = document.getElementById('tgl_preferensi');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }

    // 3. REAL-TIME CHARACTER COUNTER UNTUK TEXTAREA
    const textarea = document.getElementById('pesan_proyek');
    const charCounter = document.getElementById('charCounter');

    if (textarea && charCounter) {
        textarea.addEventListener('input', () => {
            const currentLength = textarea.value.length;
            charCounter.textContent = `${currentLength} / 500`;

            if (currentLength >= 480) {
                charCounter.style.color = '#ef4444';
            } else {
                charCounter.style.color = 'var(--text-muted)';
            }
        });
    }

    // 4. QUICK SEARCH & SCROLL HELPER
    const heroSearchBtn = document.getElementById('btn-hero-search');
    const heroServiceSelect = document.getElementById('hero-service-select');
    const formServiceSelect = document.getElementById('jenis_layanan');

    function preselectAndScroll(serviceValue) {
        if (formServiceSelect) {
            formServiceSelect.value = serviceValue;
            const target = document.getElementById('kontak');
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                formServiceSelect.focus();
            }
        }
    }

    if (heroSearchBtn && heroServiceSelect) {
        heroSearchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            preselectAndScroll(heroServiceSelect.value);
        });
    }

    // 5. KLIK KATEGORI & PAKET HARGA
    const categoryCards = document.querySelectorAll('.category-card');
    const packageBtns = document.querySelectorAll('.btn-select-package');

    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const service = card.getAttribute('data-service');
            if (service) preselectAndScroll(service);
        });
    });

    packageBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const service = btn.getAttribute('data-service');
            if (service) preselectAndScroll(service);
        });
    });

    // 6. VALIDASI & SUBMIT FORM KONTAK
    const contactForm = document.getElementById('contactForm');
    const toast = document.getElementById('toast');

    function showToast(message, isError = false) {
        if (!toast) return;
        toast.textContent = message;
        toast.style.backgroundColor = isError ? '#ef4444' : '#10b981';
        toast.style.display = 'block';

        setTimeout(() => {
            toast.style.display = 'none';
        }, 4000);
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Checkbox Minimal 1 Pilihan
            const checkboxes = document.querySelectorAll('input[name="preferensi_kontak[]"]:checked');
            if (checkboxes.length === 0) {
                showToast('Pilih minimal satu preferensi kontak lanjutan!', true);
                return;
            }

            // Validasi Nomor Telepon
            const phoneInput = document.getElementById('no_telepon');
            const phoneRegex = /^[0-9]{10,13}$/;
            if (phoneInput && !phoneRegex.test(phoneInput.value)) {
                showToast('Nomor telepon harus berupa 10 - 13 digit angka!', true);
                return;
            }

            showToast('Pesan Anda berhasil terkirim! Tim kami akan segera menghubungi Anda.');
            contactForm.reset();
            if (charCounter) charCounter.textContent = '0 / 500';
        });
    }

    // 7. RESET BUTTON HANDLER
    const btnReset = document.getElementById('btnReset');
    if (btnReset) {
        btnReset.addEventListener('click', () => {
            if (charCounter) charCounter.textContent = '0 / 500';
            showToast('Formulir berhasil di-reset.', false);
        });
    }
});