import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ViewStyle } from 'react-native';

// Tipe data untuk properti visual dari setiap bentuk
type PropertiVisual = {
  ukuranDasar?: number;
  tinggi?: number;
  warna?: string;
  width?: number;
  height?: number;
  warnaLatar?: string;
  teks?: string;
};

// Tipe data untuk mendefinisikan setiap elemen di layar
type DefinisiRender = {
  id: string;
  renderer: keyof typeof RenderEngine;
  posisi: ViewStyle;
  properti: PropertiVisual;
};

// Data utama yang menggerakkan seluruh tampilan
const RENDER_LIST: DefinisiRender[] = [
  {
    id: 'item_segitiga',
    renderer: 'Segitiga',
    posisi: { position: 'absolute', top: 80, right: 45 },
    properti: { ukuranDasar: 100, tinggi: 85, warna: '#d35400' },
  },
  {
    id: 'item_persegipanjang',
    renderer: 'PersegiPanjang',
    posisi: { position: 'absolute', top: '50%', left: '50%' },
    properti: { width: 250, height: 70, warnaLatar: '#2980b9', teks: 'HAMDANI' },
  },
  {
    id: 'item_pil',
    renderer: 'Pil',
    posisi: { position: 'absolute', bottom: 80, alignSelf: 'center' },
    properti: { width: 320, height: 60, warnaLatar: '#27ae60', teks: '105841103722' },
  },
];

// Pabrik Komponen: Objek yang berisi komponen-komponen render
const RenderEngine = {
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
    <View style={[gaya.wadahTeks, {
      width: properti.width,
      height: properti.height,
      backgroundColor: properti.warnaLatar,
    }]}>
      <Text style={gaya.teksDiDalam}>{properti.teks}</Text>
    </View>
  ),

  Pil: ({ properti }: { properti: PropertiVisual }) => {
    const { width = 0, height = 0, warnaLatar = 'grey', teks = '' } = properti;
    const radius = height / 2;
    const lebarBagianTengah = width - height;

    return (
      <View style={{ width, height, flexDirection: 'row' }}>
        <View style={{ width: radius, height: height, backgroundColor: warnaLatar, borderTopLeftRadius: radius, borderBottomLeftRadius: radius }} />
        <View style={[gaya.wadahTeks, { width: lebarBagianTengah, height: height, backgroundColor: warnaLatar }]}>
          <Text style={gaya.teksDiDalam}>{teks}</Text>
        </View>
        <View style={{ width: radius, height: height, backgroundColor: warnaLatar, borderTopRightRadius: radius, borderBottomRightRadius: radius }} />
      </View>
    );
  },
};

// Komponen utama yang menyusun semuanya di layar
export default function LayarUtamaFinal() {
  return (
    <SafeAreaView style={gaya.wadahAplikasi}>
      {RENDER_LIST.map(item => {
        const Renderer = RenderEngine[item.renderer];
        if (!Renderer) return null;

        const gayaTransformasi = (item.renderer === 'PersegiPanjang')
          ? { transform: [{ translateX: -(item.properti.width ?? 0) / 2 }, { translateY: -(item.properti.height ?? 0) / 2 }] }
          : {};

        return (
          <View key={item.id} style={[item.posisi, gayaTransformasi]}>
            <Renderer properti={item.properti} />
          </View>
        );
      })}
    </SafeAreaView>
  );
}

const gaya = StyleSheet.create({
  wadahAplikasi: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  wadahTeks: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  teksDiDalam: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
