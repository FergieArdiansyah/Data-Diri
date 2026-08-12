document.addEventListener('DOMContentLoaded', () => {

    // 1. SET MINIMUM TANGGAL PREFERENSI KEPADA HARI INI
    const dateInput = document.getElementById('tgl_preferensi');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }

    // 2. REAL-TIME CHARACTER COUNTER UNTUK TEXTAREA
    const textarea = document.getElementById('pesan_proyek');
    const charCounter = document.getElementById('charCounter');

    if (textarea && charCounter) {
        textarea.addEventListener('input', () => {
            const currentLength = textarea.value.length;
            charCounter.textContent = `${currentLength} / 500`;
            
            if (currentLength >= 480) {
                charCounter.style.color = '#ef4444'; // Merah jika mendekati limit
            } else {
                charCounter.style.color = 'var(--text-muted)';
            }
        });
    }

    // 3. QUICK SEARCH (HERO BAR) INTEGRASI KE FORM KONTAK
    const heroSearchBtn = document.getElementById('btn-hero-search');
    const heroServiceSelect = document.getElementById('hero-service-select');
    const formServiceSelect = document.getElementById('jenis_layanan');

    if (heroSearchBtn && heroServiceSelect && formServiceSelect) {
        heroSearchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedVal = heroServiceSelect.value;
            formServiceSelect.value = selectedVal;

            // Scroll halus ke section kontak
            document.getElementById('kontak').scrollIntoView({ behavior: 'smooth' });
            
            // Highlight dropdown secara visual
            formServiceSelect.focus();
        });
    }

    // 4. KLIK KATEGORI & PAKET HARGA OTOMATIS PILIH DI FORM
    const categoryCards = document.querySelectorAll('.category-card');
    const packageBtns = document.querySelectorAll('.btn-select-package');

    function preselectAndScroll(serviceValue) {
        if (formServiceSelect) {
            formServiceSelect.value = serviceValue;
            document.getElementById('kontak').scrollIntoView({ behavior: 'smooth' });
        }
    }

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

    // 5. VALIDASI & SUBMIT FORM KONTAK
    const contactForm = document.getElementById('contactForm');
    const toast = document.getElementById('toast');

    function showToast(message, isError = false) {
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

            // Validasi Nomor Telepon (Angka saja, 10-13 digit)
            const phoneInput = document.getElementById('no_telepon');
            const phoneRegex = /^[0-9]{10,13}$/;
            if (!phoneRegex.test(phoneInput.value)) {
                showToast('Nomor telepon harus berupa 10 - 13 digit angka!', true);
                return;
            }

            // Simulasi Sukses Kirim
            showToast('Pesan Anda berhasil terkirim! Tim kami akan segera menghubungi Anda.');
            contactForm.reset();
            if (charCounter) charCounter.textContent = '0 / 500';
        });
    }

    // 6. RESET BUTTON HANDLER
    const btnReset = document.getElementById('btnReset');
    if (btnReset) {
        btnReset.addEventListener('click', () => {
            if (charCounter) charCounter.textContent = '0 / 500';
            showToast('Formulir berhasil di-reset.', false);
        });
    }
});