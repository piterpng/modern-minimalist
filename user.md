# 💍 Panduan Penggunaan Template Undangan Digital

Dokumen ini berisi informasi penting mengenai petunjuk penggunaan template, aturan mengenai berkas/bagian mana yang *
*boleh diubah**, serta berkas yang **tidak boleh diubah** agar fungsionalitas dan tampilan undangan tetap berjalan
dengan baik.

---

## ⚡ Ringkasan Penting

Untuk mengubah sebagian besar isi data undangan (nama pasangan, tanggal, lokasi, foto, tautan, dll.), **Anda HANYA perlu
mengedit satu berkas**, yaitu:
👉 `assets/js/config.js`

Sebagian besar elemen pada `index.html` dan `script.js` sudah terhubung secara otomatis ke berkas konfigurasi tersebut.

---

## ✅ Boleh Diubah (Area Aman Modifikasi)

### 1. File Konfigurasi Data (`assets/js/config.js`)

File ini adalah tempat utama untuk menyesuaikan isi undangan. Anda bebas mengubah nilai di dalam objek `WEDDING_CONFIG`:

- **Header**: Subtitle, Title, Description (Untuk setiap content terdapat Header).
- **Hero / Cover**: Judul, nama pasangan, tanggal, kalimat sambutan, dan gambar latar (`backgroundImage`).
- **Profile**: Nama mempelai (pria & wanita), nama orang tua, deskripsi singkat, foto profile, dan tautan sosial media.
- **Schedule (Jadwal Acara)**: Tanggal, jam pelaksanaan, nama lokasi, dan tautan Google Calendar.
- **Maps / Location**: Nama venue, alamat lengkap, URL Google Maps, serta URL embed Google Maps (`mapEmbedUrl`).
- **Countdown**: Tanggal target hitung mundur (`targetDate`).
- **Live Stream**: Tanggal, jam, deskripsi, dan URL live streaming (misal: YouTube Live).
- **Love Story**: Tahun, judul, deskripsi, dan foto momen perjalanan cinta.
- **Gallery**: Jalur (*path*) dan deskripsi alt gambar galeri foto.
- **Video Documentation**: Tautan embed video YouTube documentation (`youtubeEmbedUrl`).
- **Wishes (Ucapan & Doa)**: Tautan Google Apps Script (`SCRIPT_URL`) untuk menyimpan ucapan ke Google Sheets.
- **Gift (Amplop Digital)**: Nama bank, nomor rekening, nama pemilik rekening, serta alamat pengiriman hadiah.
- **Quote & Music**: Teks doa/kutipan dan lokasi berkas musik latar (`source`).

### 2. File Aset Media (`assets/`)

Anda boleh mengganti atau menambah file media berikut dengan syarat **mempertahankan format dan resolusi yang disarankan
**:

- `assets/images/`: Foto mempelai, foto story, dan galeri.
- `assets/audio/`: File musik latar (`wedding-backsound.mp3`).

### 3. Modifikasi Terbatas pada `index.html`

- **Navigasi Navbar (`#floatingNavbar`)**: Anda boleh mengubah urutan menu, atribut `href`, label menu (`nav-label`),
  atau ikon Google Material Symbol.

---

## ⛔ TIDAK Boleh Diubah (Kecuali Paham Pemrograman)

### 1. Struktur Atribut Data pada `index.html`

Jangan menghapus atau mengubah nama atribut khusus berikut pada tag HTML:

- **`data-config="..."`**: Menghubungkan teks HTML dengan file `config.js`.
- **`data-config-src="..."`**: Menghubungkan sumber gambar/audio/iframe.
- **`data-config-href="..."`**: Menghubungkan tautan tombol/social media.
- **`data-config-placeholder="..."`**: Menghubungkan placeholder input form.
- **`id` dan `class` bawaan**: Jangan mengubah atau menghapus `id` (seperti `#musicToggle`, `#openInvitation`, `#days`,
  `#hours`, dll.) karena digunakan oleh logika JavaScript dan CSS.

### 2. Logika Program (`assets/js/script.js`)

File ini mengatur mekanisme interaktif halaman. **Jangan diubah** kecuali ingin menambah fungsionalitas baru:

- Fungsi Buka Undangan (`openInvitation`).
- Control Pemutar Musik (`playMusic` / `pauseMusic`).
- Logika Hitung Mundur (`setInterval` Countdown).
- Slider Maps, Love Story, dan Galeri Foto.
- Fitur Lightbox Pop-up Foto.
- Pengiriman Form Ucapan ke Google Sheets via `fetch()`.
- Fitur Salin Nomor Rekening (`copyNumberBtn`).

### 3. Styling & Tata Letak (`assets/css/style.css` / `style2.css`)

- Hindari menghapus variabel dasar pada `:root` jika tidak melakukan *redesign* total.
- Mengubah class CSS secara sembarangan dapat merusak tampilan responsif pada perangkat *mobile* dan *tablet*.

---

## 🚀 Petunjuk Penggunaan Singkat

1. **Ganti Foto & Musik**: Masukkan file foto dan audio baru Anda ke dalam folder `assets/images/` dan `assets/audio/`.
2. **Edit Data Undangan**: Buka `assets/js/config.js` menggunakan editor teks (VS Code, Notepad, dll.), lalu sesuaikan
   data teks, tanggal, serta nama file foto.
3. **Uji Coba**: Buka file `index.html` di browser untuk memastikan seluruh data, tombol, slider, dan pemutar musik
   berfungsi dengan baik.
4. **Publish**: Unggah seluruh struktur folder ke layanan web hosting pilihan Anda (Vercel, Netlify, GitHub Pages,
   dll.).