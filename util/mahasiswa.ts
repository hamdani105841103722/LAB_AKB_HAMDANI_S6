// Tipe data untuk memastikan setiap objek mahasiswa memiliki struktur yang sama
export type Mahasiswa = {
  nim: string;
  nama: string;
  fotoUrl: string;
};

// Array yang berisi semua data mahasiswa
export const DATA_MAHASISWA: Mahasiswa[] = [
  {
    nim: '105841100122',
    nama: 'Siti Marwa',
    fotoUrl: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841100122_.jpg?1755062416',
  },
  {
    nim: '105841100322',
    nama: 'Fajar Eka Alamsyah',
    fotoUrl: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841100322_.jpg?1755062416',
  },
  {
    nim: '105841102222',
    nama: 'Ali Sulton S. Palilati',
    fotoUrl: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841102222_.jpg?1755062416',
  },
  {
    nim: '105841103222',
    nama: 'A. Muh. Fardhan Saputra',
    fotoUrl: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841103222_.jpg?1755062416',
  },
  {
    nim: '105841103322',
    nama: 'Muhammad Faturrahman Iswan',
    fotoUrl: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841103322_.jpg?1755062416',
  },
  {
    nim: '105841103622',
    nama: 'Majeri',
    fotoUrl: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841103622_.jpg?1755062416',
  },
  {
    nim: '105841103722',
    nama: 'HAMDANI',
    fotoUrl: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841103722_.jpg?1755062416',
  },
  {
    nim: '105841103822',
    nama: 'Muliana',
    fotoUrl: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841103822_.jpg?1755062416',
  },
];
