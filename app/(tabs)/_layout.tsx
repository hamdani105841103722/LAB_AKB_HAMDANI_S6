import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#007AFF', // Warna biru cerah untuk tab aktif
        tabBarInactiveTintColor: '#8E8E93', // Warna abu-abu untuk tab tidak aktif
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 0.5,
          borderTopColor: '#C7C7CC',
        },
        headerShown: false, // Kita akan buat header kustom di setiap halaman
      })}
    >
      <Tabs.Screen
        name="index" // Merujuk ke file index.tsx
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="about" // Merujuk ke file about.tsx
        options={{
          title: 'About',
          tabBarIcon: ({ color, size }) => <Ionicons name="information-circle" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profil" // Merujuk ke file profil.tsx
        options={{
          title: 'Profil',
          tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
