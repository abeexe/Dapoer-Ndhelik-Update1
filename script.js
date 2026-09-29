// ===== DATA MENU (per halaman buku) =====
const pages = [
    {
        kicker: "1",
        title: "Paket",
        subtitle: "Sajian lengkap untuk keluarga",
        items: [
            { nama: "Paket Bebek Goreng", deskripsi: "Nasi + Lodeh + Urap + Sambel + Lalapan + Es Teh / Es Jeruk", harga: 40000 },
            { nama: "Paket Bebek Panggang", deskripsi: "Nasi Putih/Tiwul + Urap + Lalapan + Sambel + Lodeh + Es Teh / Es Jeruk", harga: 42000 },
            { nama: "Paket Ayam Ingkung - Large", deskripsi: "6 Porsi Nasi + Urap + Lalapan + Sambel + Lodeh + 6 Es Teh/Es Jeruk", harga: 185000 },
            { nama: "Paket Ayam Ingkung - Medium", deskripsi: "4 Porsi Nasi + Urap + Lalapan + Sambel + Lodeh + 4 Es Teh/Es Jeruk", harga: 145000 },
            { nama: "Paket Ayam Ingkung - Small", deskripsi: "4 Porsi Nasi + Urap + Lalapan + Sambel + Lodeh + 4 Es Teh/Es Jeruk", harga: 130000 },
            { nama: "Paket Bebek Ingkung", deskripsi: "4 Porsi Nasi + Urap + Lalapan + Sambel + Lodeh + 4 Es Teh/Es Jeruk", harga: 150000 },
            { nama: "Paket Ayam Kampung 1/4 Sambel Tempong", deskripsi: "Nasi + Tempe + Tahu + Terong + Lalapan + Sambel Tempong", harga: 34000 },
            { nama: "Paket Ayam Kampung Goreng 1/4", deskripsi: "Nasi + Lodeh + Urap + Sambel + Lalapan + Es Teh/Es Jeruk", harga: 32000 },
            { nama: "Paket Ayam Kampung Panggang 1/4", deskripsi: "Nasi + Lodeh + Urap + Sambel + Lalapan + Es Teh/Es Jeruk", harga: 33000 },
            { nama: "Paket Ayam Ekonomis Goreng / Bakar", deskripsi: "Nasi + Urap + Sambel + Lalapan + Es Teh/Es Jeruk", harga: 24000 },
            { nama: "Paket Ayam Ekonomis Sambal Tempong", deskripsi: "Nasi + Tempe + Tahu + Terong + Lalapan + Sambel Tempong", harga: 24000 }
        ]
    },
    {
        kicker: "2",
        title: "Makanan",
        subtitle: "Hidangan utama dari dapur kami",
        items: [
            { nama: "Ayam Ingkung Utuh - Large", harga: 125000 },
            { nama: "Ayam Ingkung Utuh - Medium", harga: 100000 },
            { nama: "Ayam Ingkung Utuh - Small", harga: 85000 },
            { nama: "Ayam Kampung Sambal Tempong", harga: 25000 },
            { nama: "Ayam Kampung Panggang 1/4", harga: 23000 },
            { nama: "Ayam Kampung Goreng 1/4", harga: 22000 },
            { nama: "Ayam Kampung Bumbu Telur Asin", harga: 30000 },
            { nama: "Ayam Ekonomis Panggang", harga: 15000 },
            { nama: "Ayam Ekonomis Goreng", harga: 15000 },
            { nama: "Ayam Fillet Bumbu Telur Asin", harga: 25000 },
            { nama: "Bebek Ingkung", harga: 110000 },
            { nama: "Bebek Panggang 1/4", harga: 32000 },
            { nama: "Bebek Goreng 1/4", harga: 30000 },
            { nama: "Bebek Bumbu Telur Asin", harga: 38000 },
            { nama: "Iga Endulita", harga: 35000 },
            { nama: "Udang Goreng", harga: 15000 },
            { nama: "Udang Bakar", harga: 15000 },
            { nama: "Udang Asam Manis (2 Porsi)", harga: 60000 },
            { nama: "Ikan Benggol Sambal Tempong", harga: 20000 },
            { nama: "Nila Goreng", harga: 20000 },
            { nama: "Nila Bakar", harga: 23000 },
            { nama: "Lele Goreng", harga: 14000 },
            { nama: "Lele Bakar", harga: 17000 },
            { nama: "Telur Kriwul", harga: 6000 },
            { nama: "Mie Goreng Ndhe'lik Ori", deskripsi: "Mie + Sayur + Telur", harga: 15000 },
            { nama: "Mie Goreng Ndhe'lik Spesial", deskripsi: "Telur + Ayam + Sosis + Bakso", harga: 20000 },
            { nama: "Nasi Goreng Original", deskripsi: "Sayur + Telur", harga: 15000 },
            { nama: "Nasi Goreng Spesial", deskripsi: "Sayur + Telur + Ayam", harga: 18000 }
        ]
    },
    {
        kicker: "3",
        title: "Minuman",
        subtitle: "Kopi, jus, dan minuman segar",
        items: [
            { nama: "Kopi Hitam Cangkir Kecil", harga: 5000 },
            { nama: "Kopi Hitam Cangkir Besar", harga: 7000 },
            { nama: "Americano", harga: 10000 },
            { nama: "Neslo (Nescafe Milo)", harga: 10000 },
            { nama: "Kopi Susu", harga: 8000 },
            { nama: "Kopi Latte", harga: 12000 },
            { nama: "Kopi Cokot", harga: 7000 },
            { nama: "Kopi Gelas Cantel", harga: 8000 },
            { nama: "Es Kelapa Muda", harga: 17000 },
            { nama: "Es Teler Creamy", harga: 15000 },
            { nama: "Es Matcha", harga: 15000 },
            { nama: "Red Velvet", harga: 15000 },
            { nama: "Soda Gembira", harga: 12000 },
            { nama: "Chen Chu Nai Cha", harga: 10000 },
            { nama: "Naicha", harga: 7000 },
            { nama: "Es Cao", harga: 6000 },
            { nama: "Wedang Jahe", harga: 8000 },
            { nama: "Kujaseruk (Minuman Rempah)", harga: 6000 },
            { nama: "Kunyit Asam Ramuan Simbah", harga: 9000 },
            { nama: "Milo (Es/Hangat)", harga: 6000 },
            { nama: "Jeruk (Es/Hangat)", harga: 6000 },
            { nama: "Teh (Es/Hangat)", harga: 6000 },
            { nama: "Air Mineral", harga: 6000 },
            { nama: "Jus Tomat", harga: 12000 },
            { nama: "Jus Wortel", harga: 12000 },
            { nama: "Jus Nanas", harga: 12000 },
            { nama: "Jus Semangka", harga: 12000 },
            { nama: "Jus Hidrasi (Semangka + Nanas)", harga: 14000 },
            { nama: "Jus Glowing (Wortel + Tomat)", harga: 14000 },
            { nama: "Jus Imunitas (Wortel + Nanas)", harga: 14000 },
            { nama: "Jus Wortel + Timun + Nanas", harga: 15000 },
            { nama: "Jus Timun + Wortel + Tomat", harga: 15000 },
            { nama: "Jus Semangka + Nanas + Tomat", harga: 15000 }
        ]
    },
    {
        kicker: "4",
        title: "Snack",
        subtitle: "Camilan untuk teman ngobrol",
        items: [
            { nama: "Pisang Coklat", harga: 10000 },
            { nama: "Pisang Goreng", harga: 10000 },
            { nama: "Onion Ring", harga: 10000 },
            { nama: "Cireng Ori Sambel Rujak", harga: 10000 },
            { nama: "Tanping Original", harga: 10000 },
            { nama: "Tanping Abon", harga: 15000 },
            { nama: "Tanping Sosis", harga: 15000 },
            { nama: "Mix Platter", deskripsi: "Nugget, Tahu Crispy, Kentang, Sosis", harga: 15000 },
            { nama: "Sui Ciao (Isi 5)", harga: 15000 },
            { nama: "Sui Ciao (Isi 10)", harga: 25000 },
            { nama: "Kentang Goreng", harga: 10000 },
            { nama: "Tempe Mendoan", harga: 7000 },
            { nama: "Tahu Crispy", harga: 7000 },
            { nama: "Nugget", harga: 10000 },
            { nama: "Risol Mayo", harga: 12000 }
        ]
    }
];

const NOMOR_WA = "6285602808948";

let currentPage = 0;
let isFlipping = false;

function formatRupiah(angka) {
    return "Rp " + angka.toLocaleString("id-ID");
}

function renderPage(index) {
    const content = document.getElementById("pageContent");
    const pageNum = document.getElementById("pageNumber");
    const indicator = document.getElementById("pageIndicator");
    const prevBtn = document.getElementById("prevPage");
    const nextBtn = document.getElementById("nextPage");
    if (!content) return;

    const page = pages[index];

    content.innerHTML = `
        <div class="page-header">
            <div class="page-header-inner">
                <span class="page-kicker">${page.kicker}</span>
                <h3 class="page-title">${page.title}</h3>
                <p class="page-subtitle">${page.subtitle}</p>
            </div>
        </div>
        <div class="menu-list">
            ${page.items.map((item, i) => `
                <div class="menu-item" style="animation-delay: ${i * 0.02}s">
                    <div class="menu-item-row">
                        <span class="menu-item-name">${item.nama}</span>
                        <span class="menu-item-dots"></span>
                        <span class="menu-item-price">${formatRupiah(item.harga)}</span>
                    </div>
                    ${item.deskripsi ? `<p class="menu-item-desc">${item.deskripsi}</p>` : ''}
                    <a href="https://wa.me/${NOMOR_WA}?text=${encodeURIComponent('Halo Dapoer Ndhelik, saya mau pesan ' + item.nama)}"
                       class="menu-item-order" target="_blank" rel="noopener">Pesan</a>
                </div>
            `).join("")}
        </div>
    `;

    pageNum.textContent = index + 1;
    indicator.textContent = `Halaman ${index + 1} / ${pages.length}`;

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === pages.length - 1;
}

function flipTo(index, direction) {
    if (isFlipping) return;
    if (index < 0 || index >= pages.length) return;
    isFlipping = true;

    const bookPage = document.getElementById("bookPage");
    bookPage.classList.add(direction === "next" ? "flip-next" : "flip-prev");

    setTimeout(() => {
        currentPage = index;
        renderPage(currentPage);
    }, 250);

    setTimeout(() => {
        bookPage.classList.remove("flip-next", "flip-prev");
        isFlipping = false;
    }, 700);
}

function nextPage() { flipTo(currentPage + 1, "next"); }
function prevPage() { flipTo(currentPage - 1, "prev"); }

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 40);
});

// ===== HAMBURGER =====
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        const href = this.getAttribute("href");
        if (href === "#") return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
    renderPage(0);

    const prevBtn = document.getElementById("prevPage");
    const nextBtn = document.getElementById("nextPage");

    if (prevBtn) prevBtn.addEventListener("click", prevPage);
    if (nextBtn) nextBtn.addEventListener("click", nextPage);

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") nextPage();
        if (e.key === "ArrowLeft") prevPage();
    });

    // Swipe support untuk mobile
    let touchStartX = 0;
    const bookPage = document.getElementById("bookPage");
    if (bookPage) {
        bookPage.addEventListener("touchstart", (e) => {
            touchStartX = e.touches[0].clientX;
        }, { passive: true });

        bookPage.addEventListener("touchend", (e) => {
            const diff = touchStartX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 60) {
                if (diff > 0) nextPage();
                else prevPage();
            }
        }, { passive: true });
    }
});