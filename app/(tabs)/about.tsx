import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface InfoPoinProps {
  icon: React.ComponentProps<typeof Ionicons>['name'];
  title: string;
  description: string;
}

const InfoPoin: React.FC<InfoPoinProps> = ({ icon, title, description }) => (
  <View style={styles.infoPoinContainer}>
    <Ionicons name={icon} size={24} color="#007AFF" style={styles.infoIcon} />
    <View style={styles.infoTextWrapper}>
      <Text style={styles.infoTitle}>{title}</Text>
      <Text style={styles.infoDescription}>{description}</Text>
    </View>
  </View>
);

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>About</Text>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.mainTitle}>Tentang Aplikasi Ini</Text>
        <Text style={styles.paragraph}>
          Aplikasi ini dibuat untuk memenuhi tugas Laboratorium Aplikasi Komputasi Bergerak. Aplikasi ini mendemonstrasikan penggunaan navigasi tab dasar menggunakan Expo Router.
        </Text>

        <View style={styles.separator} />

        <Text style={styles.sectionTitle}>Fungsi Halaman</Text>
        <InfoPoin
          icon="home-outline"
          title="Home"
          description="Menampilkan informasi dasar mengenai Universitas Muhammadiyah Makassar."
        />
        <InfoPoin
          icon="information-circle-outline"
          title="About"
          description="Halaman ini, memberikan penjelasan singkat tentang aplikasi dan fungsinya."
        />
        <InfoPoin
          icon="person-outline"
          title="Profil"
          description="Menyajikan data diri pengembang aplikasi, termasuk foto dan detail akademik."
        />
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
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
  },
  separator: {
    height: 1,
    backgroundColor: '#EAEAEA',
    marginVertical: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },
  infoPoinContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  infoIcon: {
    marginRight: 16,
    marginTop: 2,
  },
  infoTextWrapper: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
  infoDescription: {
    fontSize: 15,
    color: '#666',
    marginTop: 4,
    lineHeight: 22,
  },
});
