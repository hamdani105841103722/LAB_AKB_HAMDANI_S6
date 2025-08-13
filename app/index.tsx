import React from 'react';
import { SafeAreaView, FlatList, View, Text, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { DATA_MAHASISWA, Mahasiswa } from '../util/mahasiswa';

// Komponen untuk merender satu item dalam daftar
const ItemMahasiswa = ({ item }: { item: Mahasiswa }) => (
  <Link href={{ pathname: "/(mahasiswa)/[nim]", params: { nim: item.nim } }} asChild>
    <Pressable style={styles.itemContainer}>
      <View style={styles.itemContent}>
        <Ionicons name="person-circle-outline" size={28} color="#007AFF" />
        <Text style={styles.itemText}>{item.nama}</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#C7C7CC" />
    </Pressable>
  </Link>
);

export default function DaftarMahasiswaLayar() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={DATA_MAHASISWA}
        renderItem={({ item }) => <ItemMahasiswa item={item} />}
        keyExtractor={(item) => item.nim}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F9F9FB',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 17,
    marginLeft: 16,
    color: '#111',
  },
  separator: {
    height: 1,
    backgroundColor: '#EFEFEF',
    marginLeft: 64, // Agar garis pemisah sejajar dengan teks
  },
});
