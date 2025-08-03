import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Home</Text>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          // PERBAIKAN: Menggunakan require untuk memuat gambar dari path lokal
          source={require('../../assets/images/logo_unismuh.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.universityName}>Universitas Muhammadiyah Makassar</Text>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Tentang Kampus</Text>
          <Text style={styles.cardText}>
            Berpusat di Makassar, Unismuh merupakan kampus ternama yang memadukan keunggulan ilmu pengetahuan dengan integritas Islami untuk membentuk para profesional masa depan. Unismuh Makassar adalah pusat pendidikan swasta unggulan di kawasan timur Indonesia yang mengintegrasikan tradisi intelektual yang kuat dengan prinsip-prinsip luhur keislaman.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Lokasi</Text>
          <Text style={styles.cardText}>
            jl. Sultan Alauddin No. 259, Gunung. Sari, Kec. Rappocini, Kota Makassar, Sulawesi Selatan.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F9F9FB' },
  headerContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#111',
  },
  container: {
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },
  universityName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 18,
    width: '100%',
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
  },
});
