import { Stack } from 'expo-router';

/**
 * Konfigurasi layout utama menggunakan Stack Navigator.
 * Ini memungkinkan navigasi berbasis tumpukan antar halaman.
 */
export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerTintColor: '#111',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShadowVisible: true,
      }}
    >
      {/* Opsi untuk halaman utama (daftar) */}
      <Stack.Screen 
        name="index" 
        options={{ title: 'Daftar Mahasiswa' }} 
      />
      {/* Opsi untuk halaman detail (akan diatur di file detail) */}
      <Stack.Screen 
        name="mahasiswa/[nim]" 
        options={{ title: 'Detail Mahasiswa' }} 
      />
    </Stack>
  );
}
