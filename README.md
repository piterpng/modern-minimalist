# 💍 Modern Minimalist — Undangan Pernikahan Digital

Template undangan pernikahan digital berbasis web dengan gaya **modern minimalist**. Dibangun hanya dengan HTML, CSS, dan JavaScript murni (tanpa framework dan tanpa proses build), sehingga mudah diubah, dijalankan, dan di-hosting di mana saja.

Seluruh isi undangan (nama mempelai, tanggal, lokasi, foto, rekening, dan lainnya) cukup diatur lewat **satu file**: `assets/js/config.js`.

---

## ✨ Fitur

| # | Fitur | Keterangan |
|---|-------|------------|
| 1 | **Cover / Hero** | Halaman pembuka dengan nama pasangan, tanggal, dan tombol *Open Invitation* |
| 2 | **Profil Mempelai** | Foto, nama lengkap, nama orang tua, deskripsi, dan tautan media sosial |
| 3 | **Jadwal Acara** | Kartu jadwal akad/ceremony dan resepsi, lengkap dengan tombol *Add to Calendar* |
| 4 | **Lokasi & Peta** | Slider Google Maps embed beserta tombol petunjuk arah |
| 5 | **Countdown** | Hitung mundur hari, jam, menit, dan detik menuju hari-H |
| 6 | **Live Streaming** | Informasi dan tombol tonton siaran langsung (misalnya YouTube Live) |
| 7 | **Love Story** | Timeline perjalanan cinta dalam bentuk slider |
| 8 | **Galeri Foto** | Galeri geser (slider) dengan *lightbox* untuk melihat foto lebih besar |
| 9 | **Video Dokumentasi** | Video YouTube yang di-embed |
| 10 | **Ucapan & Doa (Guest Book)** | Form nama, konfirmasi kehadiran, dan pesan; tersimpan ke Google Sheets |
| 11 | **Amplop Digital** | Info rekening bank dengan tombol salin nomor rekening, plus alamat pengiriman hadiah |
| 12 | **Quote / Doa** | Kutipan atau doa penutup |
| 13 | **Musik Latar** | Kontrol play/pause musik yang minimal |
| 14 | **Floating Navbar** | Menu navigasi mengambang di bagian bawah layar |

Tampilan sudah **responsif** (mobile-first, lalu menyesuaikan ke tablet dan desktop).

---

## 🧰 Teknologi

- **HTML5**, **CSS3**, **JavaScript (Vanilla)**
- **Google Fonts**: Cormorant Garamond (heading) dan Manrope (body), serta Material Symbols Outlined
- **Font Awesome 6.5.2** (via CDN)
- **Google Apps Script + Google Sheets** sebagai penyimpanan ucapan
- **Google Maps Embed**, **Google Calendar**, dan **YouTube Embed**

> Karena memakai beberapa CDN dan layanan Google, undangan memerlukan koneksi internet agar tampil sempurna.

---

## 📁 Struktur Project

```
modern-minimalist/
├── index.html              # Struktur halaman (terhubung ke config lewat atribut data-config)
├── user.md                 # Panduan penggunaan template untuk pengguna akhir
├── assets/
│   ├── audio/
│   │   └── wedding-backsound.mp3
│   ├── css/
│   │   └── style.css       # Seluruh styling dan layout responsif
│   ├── images/
│   │   ├── gallery/        # Foto galeri (gallery1 – gallery6)
│   │   └── ...             # Foto mempelai, love story, dan background
│   └── js/
│       ├── config.js       # ⭐ Satu-satunya file yang perlu Anda edit
│       └── script.js       # Logika interaktif (jangan diubah)
└── docs/
    ├── PRD_Wedding_Invitation_Modern_Minimalist.pdf
    └── Laporan Audit & Pengujian Web Undangan Pernikahan.pdf
```

---

## 🚀 Memulai

### Prasyarat

Tidak ada yang perlu di-install. Anda hanya membutuhkan:

- Browser modern (Chrome, Firefox, Safari, Edge)
- Text editor seperti VS Code atau Notepad

### Menjalankan secara lokal

```bash
# 1. Clone repository
git clone https://github.com/username/modern-minimalist.git
cd modern-minimalist

# 2. Buka langsung index.html di browser,
#    atau jalankan server lokal (opsional):
npx serve .
# atau
python -m http.server 8000
```

---

## ⚙️ Cara Mengubah Data Undangan

Buka **`assets/js/config.js`** lalu ubah *value* pada objek `WEDDING_CONFIG`.

> ⚠️ Ubah **nilainya saja**, jangan mengubah **nama propertinya**.
> ✅ `subtitle: "THE WEDDING INVITATION OF"` → boleh mengganti teks di dalam tanda kutip
> ❌ `judul: "..."` → jangan mengganti nama `subtitle`

Bagian-bagian yang bisa diatur:

| Bagian di `config.js` | Isi yang bisa diubah |
|-----------------------|----------------------|
| `hero` | Nama pasangan, tanggal, kalimat sambutan, teks tombol, gambar latar |
| `profile` | Data mempelai pria & wanita: nama, orang tua, deskripsi, foto, media sosial |
| `schedule` | Daftar acara: kategori, judul, tanggal, jam mulai/selesai, lokasi, link Google Calendar |
| `maps` | Nama venue, alamat, `mapEmbedUrl`, dan `googleMapsUrl` |
| `countdown` | `targetDate` (format ISO, contoh `2026-12-14T10:00:00+07:00`) |
| `livestream` | Tanggal, jam, deskripsi, URL siaran langsung, gambar latar |
| `loveStory` | Tahun, judul, deskripsi, dan foto tiap momen |
| `gallery` | Path gambar dan teks `alt` |
| `video` | `youtubeEmbedUrl` |
| `wishes` | Teks form, opsi kehadiran, dan `SCRIPT_URL` Google Apps Script |
| `gift` | Nama bank, nomor rekening, nama pemilik, alamat pengiriman hadiah |
| `quote` | Teks kutipan/doa dan sumbernya |
| `music` | Lokasi file musik (`source`) dan `autoplay` |

### Mengganti foto & musik

1. Letakkan foto baru di `assets/images/` (foto galeri di `assets/images/gallery/`).
2. Letakkan musik baru di `assets/audio/`.
3. Sesuaikan nama file/path-nya di `config.js`.

Usahakan format dan resolusi gambar mirip dengan aset bawaan agar tata letak tetap rapi. Sebaiknya kompres gambar besar terlebih dahulu supaya undangan cepat dimuat di ponsel.

### Mengatur tautan Google Calendar & Maps

- **Google Calendar**: ubah parameter `text`, `dates` (format `YYYYMMDDTHHMMSS`), `details`, dan `location` pada `calendarUrl`.
- **Google Maps**: salin URL *Embed a map* dari Google Maps ke `mapEmbedUrl`, dan tautan *Share* ke `googleMapsUrl`.

---

## 💌 Mengaktifkan Fitur Ucapan (Google Sheets)

Form ucapan mengirim data ke **Google Apps Script** yang menyimpannya ke Google Sheets.

1. Buat Google Sheet baru untuk menampung ucapan.
2. Buat Google Apps Script (dari menu **Extensions → Apps Script**) yang:
   - menerima `POST` dengan parameter `nama`, `kehadiran`, dan `pesan`, lalu menyimpannya ke sheet; dan
   - menerima `GET` yang mengembalikan daftar ucapan untuk ditampilkan di bagian *Recent Wishes*.
3. **Deploy** sebagai *Web app* (akses: *Anyone*), lalu salin URL `/exec`.
4. Tempel URL tersebut ke `wishes.form.SCRIPT_URL` di `config.js`.

> ⚠️ `SCRIPT_URL` bawaan di template ini hanyalah contoh. **Ganti dengan URL milik Anda sendiri**, supaya ucapan tamu masuk ke Google Sheet Anda.

---

## 🔒 Panduan Modifikasi

**✅ Aman diubah**

- Seluruh nilai di `assets/js/config.js`
- File media di `assets/images/` dan `assets/audio/`
- Urutan menu, `href`, label, dan ikon pada navbar (`#floatingNavbar`) di `index.html`

**⛔ Jangan diubah (kecuali paham pemrograman)**

- Atribut `data-config`, `data-config-src`, `data-config-href`, `data-config-placeholder`, serta `id` dan `class` bawaan di `index.html`
- Logika di `assets/js/script.js` (buka undangan, musik, countdown, slider, lightbox, kirim ucapan, salin rekening)
- Variabel `:root` dan class di `assets/css/style.css`, karena dapat merusak tampilan responsif

Panduan lengkap ada di [`user.md`](./user.md).

---

## 🌐 Deployment

Karena berupa situs statis, cukup unggah seluruh folder project ke layanan hosting statis, misalnya:

- [GitHub Pages](https://pages.github.com/)
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- Hosting biasa (cPanel/FTP)

Setelah online, bagikan tautan undangan ke para tamu.

---

## ✅ Checklist Sebelum Dibagikan

- [ ] Nama, tanggal, dan jam acara sudah benar
- [ ] `targetDate` countdown sesuai jam acara dan zona waktu
- [ ] Link Google Maps dan Google Calendar sudah dites
- [ ] Link live streaming dan video YouTube bisa dibuka
- [ ] `SCRIPT_URL` sudah diganti dan ucapan berhasil masuk ke Google Sheets
- [ ] Nomor rekening dan nama pemilik rekening sudah benar
- [ ] Foto dan musik sudah diganti, serta tampil baik di ponsel
- [ ] Tombol *Open Invitation* memutar musik dan slider/galeri berfungsi

---

## 📚 Dokumentasi Tambahan

Folder `docs/` berisi:

- **PRD** (*Product Requirement Document*): kebutuhan produk, prinsip desain, dan spesifikasi fitur
- **Laporan Audit & Pengujian**: audit struktur kode, skenario UAT, dan temuan bug beserta rekomendasi perbaikan

---

## 📄 Lisensi

Tentukan lisensi sesuai kebutuhan Anda (misalnya MIT) dan tambahkan file `LICENSE` pada root project.

---

<p align="center">Dibuat dengan ❤️ untuk hari yang paling berbahagia.</p>
