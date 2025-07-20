import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TextStyle } from 'react-native';

// --- 1. STRUKTUR DATA-DRIVEN DENGAN TIPE YANG BENAR ---
// Mendefinisikan tipe data untuk setiap item
type DataMahasiswa = {
  id: string;
  nama: string;
  nim: string;
  style: TextStyle; 
};

// Menerapkan tipe DataMahasiswa ke array
const DATA_MAHASISWA: DataMahasiswa[] = [
  // --- 5 Nama dengan Font Statis ---
  { id: 's1', nama: 'A. Muh. Fardhan Saputra', nim: '105841103222', style: { fontFamily: 'Ubu-Tebal' } },
  { id: 's2', nama: 'Muhammad Faturrahman Iswan', nim: '105841103322', style: { fontFamily: 'Ubu-TebalMiring', fontSize: 20 } },
  { id: 's3', nama: 'Nurmisba', nim: '105841103422', style: { fontFamily: 'Ubu-Miring', color: '#333' } },
  { id: 's4', nama: 'Alvian Syah burhani', nim: '105841103522', style: { fontFamily: 'Ubu-Ringan', fontStyle: 'italic' } },
  { id: 's5', nama: 'Majeri', nim: '105841103622', style: { fontFamily: 'Ubu-RinganMiring' } },
  // --- 5 Nama dengan Font Variabel ---
  { id: 'v1', nama: 'Muliana', nim: '105841103822', style: { fontFamily: 'Garamond-Var', fontWeight: '300' } },
  { id: 'v2', nama: 'Yusri Ali', nim: '105841117222', style: { fontFamily: 'Garamond-Miring-Var', fontWeight: '400', fontSize: 20 } },
  { id: 'v3', nama: 'Arif Rahman', nim: '105841100921', style: { fontFamily: 'Roboto-Flex-Var', fontWeight: '500', color: '#333' } },
  { id: 'v4', nama: 'Siti Marwa', nim: '105841100122', style: { fontFamily: 'Schibsted-Miring-Var', fontWeight: '700' } },
  { id: 'v5', nama: 'Fajar Eka Alamsyah', nim: '105841100322', style: { fontFamily: 'Schibsted-Var', fontWeight: '900' } },
];

// --- 2. KOMPONEN ANAK YANG DAPAT DIGUNAKAN KEMBALI ---
// Props sekarang langsung menggunakan tipe DataMahasiswa
const ItemNama: React.FC<DataMahasiswa> = ({ nama, nim, style }) => (
  <View style={visual.wadahItem}>
    <Text style={[visual.teksItem, style]}>
      {nama}{'\n'}({nim})
    </Text>
  </View>
);

export default function HalamanProyekFont() {
  const dataStatis = DATA_MAHASISWA.slice(0, 5);
  const dataVariabel = DATA_MAHASISWA.slice(5, 10);

  return (
    <SafeAreaView style={visual.wadahAplikasi}>
      <ScrollView contentContainerStyle={visual.areaKonten}>
        <Text style={[visual.teksJudul, { fontFamily: 'Ubu-Tebal' }]}>
          Proyek Akhir - Hamdani
        </Text>
        <Text style={visual.teksSubJudul}>
          Stambuk Referensi: 105841103722
        </Text>
        
        <View style={visual.garisPemisah} />
        
        {dataStatis.map(item => <ItemNama key={item.id} {...item} />)}
        
        <View style={visual.garisPemisah} />
        
        {dataVariabel.map(item => <ItemNama key={item.id} {...item} />)}

      </ScrollView>
    </SafeAreaView>
  );
}

// --- 4. GAYA VISUAL DENGAN NAMA BARU ---
const visual = StyleSheet.create({
  wadahAplikasi: { 
    flex: 1, 
    backgroundColor: '#F5F5F5',
  },
  areaKonten: { 
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  teksJudul: { 
    fontSize: 26, 
    color: '#1A1A1A', 
    textAlign: 'center',
    marginBottom: 8,
  },
  teksSubJudul: { 
    fontSize: 15, 
    color: '#777', 
    textAlign: 'center', 
  },
  wadahItem: {
    marginBottom: 18,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1,
  },
  teksItem: {
    fontSize: 21,
    color: '#000',
    textAlign: 'center',
    lineHeight: 32,
  },
  garisPemisah: {
    height: 1,
    backgroundColor: '#D0D0D0',
    width: '90%',
    alignSelf: 'center',
    marginVertical: 25,
  }
});
