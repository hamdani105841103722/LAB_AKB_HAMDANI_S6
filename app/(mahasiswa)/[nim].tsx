import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { DATA_MAHASISWA } from '../../util/mahasiswa';

export default function DetailMahasiswaLayar() {
  // Mengambil parameter 'nim' dari URL
  const { nim } = useLocalSearchParams();

  // Mencari data mahasiswa yang sesuai berdasarkan nim
  const mahasiswa = DATA_MAHASISWA.find(m => m.nim === nim);

  // Jika mahasiswa tidak ditemukan, tampilkan pesan error
  if (!mahasiswa) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.errorText}>Data mahasiswa tidak ditemukan.</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Mengatur judul header secara dinamis menjadi nama mahasiswa */}
      <Stack.Screen options={{ title: mahasiswa.nama }} />
      <View style={styles.container}>
        <Image source={{ uri: mahasiswa.fotoUrl }} style={styles.profileImage} />
        <Text style={styles.nama}>{mahasiswa.nama}</Text>
        <Text style={styles.nim}>{mahasiswa.nim}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F9F9FB',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 24,
    borderWidth: 4,
    borderColor: '#FFFFFF',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  nama: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111',
    textAlign: 'center',
  },
  nim: {
    fontSize: 20,
    color: '#666',
    marginTop: 8,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});
