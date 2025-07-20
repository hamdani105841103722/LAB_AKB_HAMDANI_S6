import React, { useMemo } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TextStyle } from 'react-native';

// --- DATA MASTER (Ganti dengan daftar nama kelas Anda yang sebenarnya) ---
const DAFTAR_NAMA_KELAS = [
  { nama: "Siti Marwa", nim: "105841100122" }, { nama: "Fajar Eka Alamsyah", nim: "105841100322" },
  { nama: "Arif Rahman", nim: "105841100921" }, { nama: "Mahfud", nim: "105841101022" },
  { nama: "Muh. Yusran", nim: "105841101122" }, { nama: "Andi Alif", nim: "105841101222" },
  { nama: "Fikram", nim: "105841101322" }, { nama: "Irfan", nim: "105841101422" },
  { nama: "Rahmat Hidayat", nim: "105841101522" }, { nama: "Andi Muh. Fadli", nim: "105841101622" },
  { nama: "Muh. Fadhil", nim: "105841101722" }, { nama: "Fadlan", nim: "105841101822" },
  { nama: "Muh. Ikram", nim: "105841101922" }, { nama: "Andi Baso", nim: "105841102022" },
  { nama: "Muh. Alif", nim: "105841102122" }, { nama: "Ali sulton s palilati", nim: "105841102222" },
  { nama: "Ahmad Fathir", nim: "105841102922" }, { nama: "A. Muh. Fardhan Saputra", nim: "105841103222" },
  { nama: "Muh. Faturrachman Iswan", nim: "105841103322" }, { nama: "Nurmisba", nim: "105841103422" },
  { nama: "Alvian Syah Burhani", nim: "105841103522" }, { nama: "Majeri", nim: "105841103622" }, // <- Urutan ke-22
  { nama: "Muliana", nim: "105841103822" }, { nama: "Yusri Ali", nim: "105841117222" },
  { nama: "Nur muhammad ashman", nim: "105841103122" }, 
  // ... Tambahkan sisa daftar nama hingga total yang benar (misal: 130)
];

// --- FONT YANG AKAN DIGUNAKAN ---
const DAFTAR_FONT = {
  statis: ['Ubu-Tebal', 'Ubu-TebalMiring', 'Ubu-Miring', 'Ubu-Ringan', 'Ubu-RinganMiring'],
  variabel: ['Garamond-Var', 'Garamond-Miring-Var', 'Roboto-Flex-Var', 'Schibsted-Var', 'Schibsted-Miring-Var'],
};

// --- ALGORITMA PENGURUTAN (FITUR YANG HILANG) ---
const hitungUrutanTampilan = (nomorUrut: number, daftarLengkap: typeof DAFTAR_NAMA_KELAS) => {
  const totalMahasiswa = daftarLengkap.length;
  const indexAwal = nomorUrut - 1;
  const hasil = [];

  // 1. Ambil 5 nama SEBELUM (mundur)
  for (let i = 5; i > 0; i--) {
    const index = (indexAwal - i + totalMahasiswa) % totalMahasiswa;
    hasil.push({ ...daftarLengkap[index], jenis: 'statis' });
  }

  // 2. Ambil 5 nama SETELAH (maju)
  for (let i = 1; i <= 5; i++) {
    const index = (indexAwal + i) % totalMahasiswa;
    hasil.push({ ...daftarLengkap[index], jenis: 'variabel' });
  }

  // 3. Beri gaya font yang unik untuk setiap nama
  return hasil.map((item, i) => {
    let style: TextStyle = {};
    if (item.jenis === 'statis') {
      style.fontFamily = DAFTAR_FONT.statis[i];
    } else {
      style.fontFamily = DAFTAR_FONT.variabel[i - 5];
      style.fontWeight = `${(i - 4) * 100 + 200}` as any; // Contoh: 300, 400, ... 700
    }
    return { ...item, id: `mhs-${i}`, style };
  });
};

// --- KOMPONEN TAMPILAN ---
const ItemTampil = ({ nama, nim, style }: { nama: string, nim: string, style: TextStyle }) => (
  <View style={visual.wadahItem}>
    <Text style={[visual.teksItem, style]}>
      {nama}{'\n'}({nim})
    </Text>
  </View>
);

export default function HalamanUtamaFont() {
  const nomorUrutAnda = 22;
  const daftarTampilan = useMemo(() => hitungUrutanTampilan(nomorUrutAnda, DAFTAR_NAMA_KELAS), []);

  return (
    <SafeAreaView style={visual.wadahAplikasi}>
      <ScrollView contentContainerStyle={visual.areaKonten}>
        <Text style={[visual.teksJudul, { fontFamily: 'Ubu-Tebal' }]}>
          Proyek Akhir - Hamdani
        </Text>
        <Text style={visual.teksSubJudul}>
          Referensi Stambuk: 105841103722 (Urutan ke-{nomorUrutAnda})
        </Text>
        
        <View style={visual.garisPemisah} />
        
        {daftarTampilan.map(item => <ItemTampil key={item.id} {...item} />)}

      </ScrollView>
    </SafeAreaView>
  );
}

const visual = StyleSheet.create({
  wadahAplikasi: { flex: 1, backgroundColor: '#F5F5F5' },
  areaKonten: { paddingHorizontal: 20, paddingVertical: 30 },
  teksJudul: { fontSize: 26, color: '#1A1A1A', textAlign: 'center', marginBottom: 8 },
  teksSubJudul: { fontSize: 15, color: '#777', textAlign: 'center' },
  wadahItem: {
    marginBottom: 18, padding: 12, borderWidth: 1, borderColor: '#E0E0E0',
    borderRadius: 8, backgroundColor: '#FFFFFF', shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.18,
    shadowRadius: 1.00, elevation: 1,
  },
  teksItem: { fontSize: 21, color: '#000', textAlign: 'center', lineHeight: 32 },
  garisPemisah: {
    height: 1, backgroundColor: '#D0D0D0', width: '90%',
    alignSelf: 'center', marginVertical: 25,
  }
});
