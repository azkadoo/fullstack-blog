# Fullstack Blog Application

Assignment 3 - Basic Fullstack App

## Cara Menjalankan Project

### Prerequisites
- Node.js
- PNPM

### Langkah Instalasi
1. Clone repository ini
2. Jalankan `pnpm install` di root folder untuk menginstall semua dependencies (Workspace)

### Menjalankan Backend
1. Masuk ke folder `be` -> `cd be`
2. Jalankan `pnpm install` untuk menginstall semua dependencies
3. Duplikat `.env.example` menjadi `.env` (jika ada)
4. Jalankan migrasi database: `pnpm prisma migrate dev`
5. Jalankan server: `pnpm run dev`

### Menjalankan Frontend
1. Masuk ke folder `fe` -> `cd fe`
2. Jalankan `pnpm install` untuk menginstall semua dependencies
3. Jalankan server local: `pnpm run dev`