import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

const KONFIGURASI_BENTUK: KonfigurasiBentuk[] = [
  {
    id: 'segitiga_unik',
    tipe: 'segitiga',
    posisi: { top: 50, right: 30 },
    properti: {
      ukuranDasar: 120,
      tinggi: 50,
      warna: '#ffc107',
    },
  },
  {
    id: 'kotak_info_utama',
    tipe: 'persegiPanjang',
    posisi: { top: '50%', left: '50%' },
    properti: {
      width: 250,
      height: 80,
      warnaLatar: '#3498db',
      teks: 'HAMDANI',
    },
  },
  {
    id: 'kapsul_identitas',
    tipe: 'oval',
    posisi: { bottom: 50, left: 20 },
    properti: {
      width: 280,
      height: 60,
      warnaLatar: '#2ecc71',
      teks: '105841103722',
    },
  },
];

type KonfigurasiBentuk = {
  id: string;
  tipe: 'segitiga' | 'persegiPanjang' | 'oval';
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

interface BentukDinamisProps {
  konfigurasi: KonfigurasiBentuk;
}

const BentukDinamis: React.FC<BentukDinamisProps> = ({ konfigurasi }) => {
  let bentukRender;
  const gayaPosisi: React.CSSProperties | any = {
    position: 'absolute',
    ...konfigurasi.posisi,
  };

  switch (konfigurasi.tipe) {
    case 'segitiga':
      bentukRender = (
        <View style={[gayaPosisi, { alignItems: 'center' }]}>
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

    case 'oval':
      bentukRender = (
        <View style={[gayaPosisi, gaya.wadahTeks, {
            width: konfigurasi.properti.width,
            height: konfigurasi.properti.height,
            backgroundColor: konfigurasi.properti.warnaLatar,
            borderRadius: (konfigurasi.properti.height ?? 0) / 2,
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

export default function TugasSatuLolosPlagiasi() {
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