# Repository Server-TST 

## Tugas Besar II3160 Teknologi Sistem Terintegrasi

Repositori ini berisi kode sumber untuk aplikasi backend yang dibangun menggunakan framework Express.js. Aplikasi ini digunakan sebagai rute authentication and authorization menggunakan JWT (JsonWebToken) yang akan mengenerate token setiap kali user login. Dibuat juga proxy atau perantara untuk service encryption **Lattice Based Cryptography** yang dibuat oleh **Wisyendra Lunarmalam - 1822095**. Service encryption tersebut digunakan untuk mengimplementasikan End-to-End Encryption pada service chat sebagai business logic utama dari service yang dibuat pada Tugas Besar II3160 Teknologi Sistem Terintegrasi.

**Richie Leonardo**
**18222071**

---

## Gambaran Struktur File

```
│   .dockerignore
│   .env
│   .gitignore
│   app.js
│   Dockerfile
│   package-lock.json
│   package.json
│   README.md
│
├───archive
│       server.js
│
├───database
│       db.js
│
├───model
│       user.js
│
├───routes
│       auth.js
│       encrypt.js
│       verifyToken.js
│
└───swagger
        authDocs.js
        encryptDocs.js
        swaggerConfig.js
```

### File dan Folder Utama

- **app.js**: Titik masuk utama aplikasi.
- **archive/server.js**: Versi arsip dari pengaturan server untuk referensi.
- **database/db.js**: Konfigurasi dan pengaturan koneksi database.
- **model/user.js**: Model user untuk menangani interaksi data dalam aplikasi.
- **routes/**: Berisi handler rute untuk `auth`, `encrypt`, dan verifikasi token.
- **swagger/**: Berisi konfigurasi dokumentasi API Swagger dan dokumen khusus rute.
- **Dockerfile**: Konfigurasi untuk mengontainerisasi aplikasi.

---

## Dokumentasi API

Aplikasi ini mencakup dokumentasi API lengkap yang dapat diakses di:
[https://raylaidchat.codebloop.my.id/api-docs/](https://raylaidchat.codebloop.my.id/api-docs/)

---

## Deployment dengan Docker

### Langkah-Langkah Deployment:

1. **Build Gambar Docker**
   ```bash
   docker build --no-cache -t <image_name> .
   ```
   Ganti `<image_name>` dengan nama yang diinginkan untuk gambar Docker Anda.

2. **Jalankan Kontainer Docker**
   ```bash
   docker run --name <container_name> -p 8071:8071 -e <environment_variable> <image_name>
   ```
   Ganti placeholder berikut dengan:
   - `<container_name>`: Nama yang diinginkan untuk kontainer.
   - `<environment_variable>`: Variabel lingkungan yang dibutuhkan aplikasi, seperti `NODE_ENV`, `PORT`, atau string koneksi database.
   - `<image_name>`: Nama gambar Docker yang dibuat pada langkah 1.

---

## Catatan Tambahan

- Pastikan file `.env` telah dikonfigurasi dengan benar dengan variabel lingkungan yang diperlukan sebelum membangun gambar Docker.
- Aplikasi mendengarkan pada port `8071` di dalam kontainer dan memetakannya ke port yang sama pada host.
- Dokumentasi Swagger menyediakan referensi API yang detail untuk integrasi dan pengujian.
