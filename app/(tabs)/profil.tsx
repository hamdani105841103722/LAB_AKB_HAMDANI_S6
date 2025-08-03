import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const dataDiri = {
  nama: 'HAMDANI',
  nim: '105841103722',
  kelas: 'IF 22 A',
  jurusan: 'Informatika',
  fakultas: 'Fakultas Teknik',
  foto: require('../../assets/images/profil.png'),
};

type InfoBarisProps = {
  label: string;
  value: string;
};

const InfoBaris = ({ label, value }: InfoBarisProps) => (
  <View style={styles.infoBaris}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

export default function ProfilScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Profil</Text>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={dataDiri.foto} style={styles.fotoProfil} />
        <Text style={styles.nama}>{dataDiri.nama}</Text>
        <Text style={styles.jurusan}>{dataDiri.jurusan}</Text>

        <View style={styles.kartuInfo}>
          <InfoBaris label="NIM" value={dataDiri.nim} />
          <InfoBaris label="Kelas" value={dataDiri.kelas} />
          <InfoBaris label="Fakultas" value={dataDiri.fakultas} />
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
    alignItems: 'center',
    padding: 24,
  },
  fotoProfil: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: '#FFFFFF',
    marginBottom: 16,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  nama: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222',
  },
  jurusan: {
    fontSize: 18,
    color: '#666',
    marginBottom: 24,
  },
  kartuInfo: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  infoBaris: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  label: {
    fontSize: 16,
    color: '#555',
  },
  value: {
    fontSize: 16,
    color: '#111',
    fontWeight: '600',
  },
});
