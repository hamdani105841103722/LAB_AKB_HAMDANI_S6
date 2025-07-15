import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ViewStyle } from 'react-native';

type KonfigurasiBentuk = {
  id: string;
  tipe: 'segitiga' | 'persegiPanjang' | 'pil';
  posisi: { [key: string]: number | string };
  properti: {
    ukuranDasar?: number;
    tinggi?: number;
    warna?: string;
    width?: number;
    height?: number;
    warnaLatar?: string;
    teks?: string;
  };
};

const KONFIGURASI_BENTUK: KonfigurasiBentuk[] = [
  {
    id: 'bentuk_segitiga',
    tipe: 'segitiga',
    posisi: { top: 60, right: 40 },
    properti: {
      ukuranDasar: 100,
      tinggi: 80,
      warna: '#f39c12',
    },
  },
  {
    id: 'bentuk_persegi_panjang',
    tipe: 'persegiPanjang',
    posisi: { top: '50%', left: '50%' },
    properti: {
      width: 260,
      height: 75,
      warnaLatar: '#3498db',
      teks: 'HAMDANI',
    },
  },
  {
    id: 'bentuk_pil',
    tipe: 'pil',
    posisi: { bottom: 60, left: 30 },
    properti: {
      width: 290,
      height: 65,
      warnaLatar: '#2ecc71',
      teks: '105841103722',
    },
  },
];

interface BentukDinamisProps {
  konfigurasi: KonfigurasiBentuk;
}

const BentukDinamis: React.FC<BentukDinamisProps> = ({ konfigurasi }) => {
  let bentukRender;
  const gayaPosisi: ViewStyle = {
    position: 'absolute',
    ...konfigurasi.posisi,
  };

  switch (konfigurasi.tipe) {
    case 'segitiga':
      bentukRender = (
        <View style={gayaPosisi}>
          <View style={{
            width: 0, height: 0, backgroundColor: 'transparent', borderStyle: 'solid',
            borderLeftWidth: (konfigurasi.properti.ukuranDasar ?? 0) / 2,
            borderRightWidth: (konfigurasi.properti.ukuranDasar ?? 0) / 2,
            borderBottomWidth: konfigurasi.properti.tinggi,
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: konfigurasi.properti.warna,
          }} />
        </View>
      );
      break;

    case 'persegiPanjang':
      const width = konfigurasi.properti.width ?? 0;
      const height = konfigurasi.properti.height ?? 0;
      const gayaTransform = { transform: [{ translateX: -width / 2 }, { translateY: -height / 2 }] };
      bentukRender = (
        <View style={[gayaPosisi, gayaTransform, gaya.wadahTeks, {
            width: width,
            height: height,
            backgroundColor: konfigurasi.properti.warnaLatar,
          }]}>
          <Text style={gaya.teksDiDalam}>{konfigurasi.properti.teks}</Text>
        </View>
      );
      break;

     case 'pil':
      const tinggiPil = konfigurasi.properti.height ?? 0;
      const radiusPenuh = tinggiPil / 2;

      bentukRender = (
        <View style={[gayaPosisi, gaya.wadahTeks, {
            width: konfigurasi.properti.width,
            height: tinggiPil,
            backgroundColor: konfigurasi.properti.warnaLatar,
            borderRadius: radiusPenuh,
          }]}>
          <Text style={gaya.teksDiDalam}>{konfigurasi.properti.teks}</Text>
        </View>
      );
      break;
    
    default:
      bentukRender = null;
  }

  return bentukRender;
};

export default function LayarGeometrisKustom() {
  return (
    <SafeAreaView style={gaya.wadahUtama}>
      {KONFIGURASI_BENTUK.map(konfig => (
        <BentukDinamis key={konfig.id} konfigurasi={konfig} />
      ))}
    </SafeAreaView>
  );
}

const gaya = StyleSheet.create({
  wadahUtama: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  wadahTeks: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  teksDiDalam: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});