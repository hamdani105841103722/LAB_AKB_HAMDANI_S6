import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image, Dimensions, ViewStyle } from 'react-native';

// ========================================================================
// BAGIAN KODE TUGAS 1 (Bentuk Geometris)
// ========================================================================

type PropertiVisual = {
  ukuranDasar?: number;
  tinggi?: number;
  warna?: string;
  width?: number;
  height?: number;
  warnaLatar?: string;
  teks?: string;
};

const PabrikBentuk = {
  Segitiga: ({ properti }: { properti: PropertiVisual }) => (
    <View style={{
      width: 0, height: 0, backgroundColor: 'transparent', borderStyle: 'solid',
      borderLeftWidth: (properti.ukuranDasar ?? 0) / 2,
      borderRightWidth: (properti.ukuranDasar ?? 0) / 2,
      borderBottomWidth: properti.tinggi,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: properti.warna,
    }} />
  ),
  PersegiPanjang: ({ properti }: { properti: PropertiVisual }) => (
    <View style={[gayaTugas1.wadahTeks, {
      width: properti.width, height: properti.height, backgroundColor: properti.warnaLatar,
    }]}>
      <Text style={gayaTugas1.teksDiDalam}>{properti.teks}</Text>
    </View>
  ),
  Pil: ({ properti }: { properti: PropertiVisual }) => {
    const { width = 0, height = 0, warnaLatar = 'grey', teks = '' } = properti;
    const radius = height / 2;
    const lebarTengah = width - height;
    return (
      <View style={{ width, height, flexDirection: 'row' }}>
        <View style={{ width: radius, height, backgroundColor: warnaLatar, borderTopLeftRadius: radius, borderBottomLeftRadius: radius }} />
        <View style={[gayaTugas1.wadahTeks, { width: lebarTengah, height, backgroundColor: warnaLatar }]}>
          <Text style={gayaTugas1.teksDiDalam}>{teks}</Text>
        </View>
        <View style={{ width: radius, height, backgroundColor: warnaLatar, borderTopRightRadius: radius, borderBottomRightRadius: radius }} />
      </View>
    );
  },
};

const HalamanTugasSatu = () => {
  const RENDER_LIST = [
    { id: 'item_s', renderer: 'Segitiga' as keyof typeof PabrikBentuk, p: { top: 80, right: 45 } as ViewStyle, prop: { ukuranDasar: 100, tinggi: 85, warna: '#d35400' } },
    { id: 'item_p', renderer: 'PersegiPanjang' as keyof typeof PabrikBentuk, p: { top: '50%', left: '50%' } as ViewStyle, prop: { width: 250, height: 70, warnaLatar: '#2980b9', teks: 'HAMDANI' } },
    { id: 'item_pil', renderer: 'Pil' as keyof typeof PabrikBentuk, p: { bottom: 80, alignSelf: 'center' } as ViewStyle, prop: { width: 320, height: 60, warnaLatar: '#27ae60', teks: '105841103722' } },
  ];
  return (
    <View style={{ flex: 1 }}>
      {RENDER_LIST.map(item => {
        const Renderer = PabrikBentuk[item.renderer];
        const transform = item.renderer === 'PersegiPanjang' ? { transform: [{ translateX: -(item.prop.width ?? 0) / 2 }, { translateY: -(item.prop.height ?? 0) / 2 }] } : {};
        return <View key={item.id} style={[{ position: 'absolute', ...item.p }, transform]}><Renderer properti={item.prop} /></View>;
      })}
    </View>
  );
};

// ========================================================================
// BAGIAN KODE TUGAS 2 (Grid Gambar)
// ========================================================================

type SumberGambar = {
  id: string;
  utama: string;
  alternatif: string;
};

const SUMBER_GAMBAR: SumberGambar[] = Array.from({ length: 9 }, (_, i) => ({
  id: `g-${i}`,
  utama: `https://picsum.photos/seed/main${i}/200`,
  alternatif: `https://picsum.photos/seed/alt${i}/200`,
}));

const SelGrid = ({ sumber }: { sumber: SumberGambar }) => {
  const [isAlt, setIsAlt] = useState(false);
  const [skala, setSkala] = useState(1);
  const handleTekan = () => { setIsAlt(p => !p); setSkala(s => Math.min(s * 1.2, 2)); };
  const uri = isAlt ? sumber.alternatif : sumber.utama;
  return (
    <TouchableOpacity onPress={handleTekan} style={gayaTugas2.wadahSel}>
      <Image source={{ uri }} style={[gayaTugas2.gambar, { transform: [{ scale: skala }] }]} />
    </TouchableOpacity>
  );
};

const HalamanTugasDua = () => (
  <View style={gayaTugas2.kontainerGrid}>
    {SUMBER_GAMBAR.map(item => <SelGrid key={item.id} sumber={item} />)}
  </View>
);

// ========================================================================
// MANAJER UTAMA APLIKASI (MENU & NAVIGASI INTERNAL)
// ========================================================================
export default function AplikasiTugas() {
  const [halamanAktif, setHalamanAktif] = useState('menu'); // 'menu', 'tugas1', 'tugas2'

  const renderKonten = () => {
    switch (halamanAktif) {
      case 'tugas1':
        return <HalamanTugasSatu />;
      case 'tugas2':
        return <HalamanTugasDua />;
      default: // Menu
        return (
          <View style={gayaMenu.areaTombol}>
            <Text style={gayaMenu.judul}>Daftar Tugas</Text>
            <TouchableOpacity style={gayaMenu.tombol} onPress={() => setHalamanAktif('tugas1')}>
              <Text style={gayaMenu.teksTombol}>Tugas 1: Bentuk Geometris</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[gayaMenu.tombol, { backgroundColor: '#27ae60' }]} onPress={() => setHalamanAktif('tugas2')}>
              <Text style={gayaMenu.teksTombol}>Tugas 2: Grid Interaktif</Text>
            </TouchableOpacity>
          </View>
        );
    }
  };

  return (
    <SafeAreaView style={gayaMenu.wadahAplikasi}>
      {halamanAktif !== 'menu' && (
        <TouchableOpacity style={gayaMenu.tombolKembali} onPress={() => setHalamanAktif('menu')}>
          <Text style={gayaMenu.teksTombolKembali}>{'< Kembali'}</Text>
        </TouchableOpacity>
      )}
      {renderKonten()}
    </SafeAreaView>
  );
}

// ========================================================================
// STYLESHEETS (Dipisahkan per tugas agar rapi)
// ========================================================================
const gayaMenu = StyleSheet.create({
  wadahAplikasi: { flex: 1, backgroundColor: '#ecf0f1', justifyContent: 'center' },
  judul: { fontSize: 28, fontWeight: 'bold', color: '#2c3e50', marginBottom: 40, textAlign: 'center' },
  areaTombol: { paddingHorizontal: 20 },
  tombol: { backgroundColor: '#3498db', padding: 15, borderRadius: 10, alignItems: 'center', marginBottom: 20, elevation: 2 },
  teksTombol: { color: 'white', fontSize: 18, fontWeight: '600' },
  tombolKembali: { position: 'absolute', top: 60, left: 20, zIndex: 10, padding: 8 },
  teksTombolKembali: { color: '#3498db', fontSize: 16, fontWeight: 'bold' },
});

const gayaTugas1 = StyleSheet.create({
  wadahTeks: { justifyContent: 'center', alignItems: 'center', overflow: 'hidden' },
  teksDiDalam: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});

const lebarPerangkat = Dimensions.get('window').width;
const ukuranSel = lebarPerangkat / 7;
const gayaTugas2 = StyleSheet.create({
  kontainerGrid: { flexDirection: 'row', flexWrap: 'wrap' },
  wadahSel: { width: ukuranSel, height: ukuranSel, padding: 2 },
  gambar: { width: '100%', height: '100%', borderRadius: 8 },
});
