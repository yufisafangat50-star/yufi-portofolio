# Portofolio Yufi Safangat

Website portofolio profesional untuk Data Analyst / Data Science Intern.

## Struktur

```
yufi-portfolio/
├── index.html          # Halaman utama (single-page)
├── css/
│   └── style.css       # Design system & styling
├── js/
│   └── main.js         # Interaksi (dark mode, navigasi, animasi)
├── assets/
│   └── img/            # Gambar (foto profil, visualisasi proyek)
└── README.md
```

## Menjalankan Secara Lokal

Buka `index.html` langsung di browser, atau gunakan server lokal:

```bash
# Menggunakan Python
python -m http.server 8000

# Menggunakan Node.js
npx serve .
```

Kemudian buka `http://localhost:8000` di browser.

## Deploy ke Vercel (Paling Direkomendasikan)

1. Buat repository baru di GitHub (misal: `yufi-portfolio`).
2. Inisialisasi Git dan push:

```bash
git init
git add .
git commit -m "feat: portfolio siap deploy"
git branch -M main
git remote add origin https://github.com/yufisafangat50-star/yufi-portfolio.git
git push -u origin main
```

3. Buka [vercel.com](https://vercel.com/) dan login dengan akun GitHub Anda.
4. Klik **Add New... → Project**, pilih repositori `yufi-portfolio`, lalu klik **Deploy** (Framework preset otomatis terdeteksi *Other*, tanpa perlu build command).
5. Website langsung live di subdomain Vercel gratis (misal: `https://yufisafangat.vercel.app/` atau `https://yufi-portfolio.vercel.app/`).

## Deploy ke GitHub Pages (Alternatif)

1. Buat repository baru di GitHub (misal: `yufi-portfolio` atau `yufisafangat50-star.github.io`).
2. Inisialisasi Git dan push:

```bash
cd yufi-portfolio
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/yufisafangat50-star/NAMA_REPO.git
git push -u origin main
```

3. Buka **Settings → Pages** di repository GitHub.
4. Pilih **Source: Deploy from a branch**, branch: `main`, folder: `/ (root)`.
5. Tunggu beberapa menit. Website akan tersedia di:
   - `https://yufisafangat50-star.github.io/NAMA_REPO/`
   - Atau `https://yufisafangat50-star.github.io/` jika nama repo adalah `yufisafangat50-star.github.io`

## Sebelum Publikasi

Pastikan hal berikut sudah dilengkapi:

- [x] Ganti placeholder foto profil dengan foto asli (`assets/img/yufi.jpg`)
- [ ] Tambahkan URL repository GitHub untuk setiap proyek (cari komentar `PLACEHOLDER` di `index.html`)
- [ ] Tambahkan `og:url` dan `og:image` di meta tag setelah mendapatkan URL publik
- [ ] Ganti favicon dengan favicon khusus (opsional)
- [ ] Periksa apakah URL Live Demo Streamlit masih aktif

## Teknologi

- HTML5, CSS3, JavaScript (ES5+)
- Google Fonts (Inter)
- Tanpa framework atau build step — langsung kompatibel dengan GitHub Pages
