import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ViewStyle } from 'react-native';

type PropertiBentuk = {
  ukuranDasar?: number;
  tinggi?: number;
  warna?: string;
  width?: number;
  height?: number;
  warnaLatar?: string;
  teks?: string;
};

type DefinisiElemen = {
  id: string;
  tipe: 'segitiga' | 'persegiPanjang' | 'pil';
  posisi: ViewStyle;
  properti: PropertiBentuk;
};

const DATA_ELEMEN: DefinisiElemen[] = [
  {
    id: 'visual_segitiga',
    tipe: 'segitiga',
    posisi: { position: 'absolute', top: 70, right: 50 },
    properti: { ukuranDasar: 110, tinggi: 90, warna: '#e67e22' },
  },
  {
    id: 'visual_persegipanjang',
    tipe: 'persegiPanjang',
    posisi: { position: 'absolute', top: '50%', left: '50%' },
    properti: { width: 270, height: 80, warnaLatar: '#3498db', teks: 'HAMDANI' },
  },
  {
    id: 'visual_pil',
    tipe: 'pil',
    posisi: { position: 'absolute', bottom: 70, alignSelf: 'center' },
    properti: { width: 300, height: 70, warnaLatar: '#1abc9c', teks: '105841103722' },
  },
];

const PabrikBentuk = {
  buatSegitiga: (properti: PropertiBentuk) => {
    const { ukuranDasar = 0, tinggi = 0, warna = 'grey' } = properti;
    return (
      <View style={{
        width: 0, height: 0, backgroundColor: 'transparent', borderStyle: 'solid',
        borderLeftWidth: ukuranDasar / 2,
        borderRightWidth: ukuranDasar / 2,
        borderBottomWidth: tinggi,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: warna,
      }} />
    );
  },

  buatPersegiPanjang: (properti: PropertiBentuk) => {
    const { width = 0, height = 0, warnaLatar = 'grey', teks = '' } = properti;
    return (
      <View style={[gaya.wadahTeks, { width, height, backgroundColor: warnaLatar }]}>
        <Text style={gaya.teksDiDalam}>{teks}</Text>
      </View>
    );
  },

  buatPil: (properti: PropertiBentuk) => {
    const { width = 0, height = 0, warnaLatar = 'grey', teks = '' } = properti;
    const radius = height / 2;
    const lebarTengah = width - height;
    return (
      <View style={{ width, height, flexDirection: 'row' }}>
        <View style={{ width: radius, height: height, backgroundColor: warnaLatar, borderTopLeftRadius: radius, borderBottomLeftRadius: radius }} />
        <View style={[gaya.wadahTeks, { width: lebarTengah, height: height, backgroundColor: warnaLatar }]}>
          <Text style={gaya.teksDiDalam}>{teks}</Text>
        </View>
        <View style={{ width: radius, height: height, backgroundColor: warnaLatar, borderTopRightRadius: radius, borderBottomRightRadius: radius }} />
      </View>
    );
  },
};

interface ElemenVisualProps {
  definisi: DefinisiElemen;
}

const ElemenVisual: React.FC<ElemenVisualProps> = ({ definisi }) => {
  let elemenRender;
  const { tipe, properti, posisi } = definisi;

  switch (tipe) {
    case 'segitiga':
      elemenRender = PabrikBentuk.buatSegitiga(properti);
      break;
    case 'persegiPanjang':
      elemenRender = PabrikBentuk.buatPersegiPanjang(properti);
      break;
    case 'pil':
      elemenRender = PabrikBentuk.buatPil(properti);
      break;
    default:
      elemenRender = null;
  }

  const gayaTransform = (tipe === 'persegiPanjang')
    ? { transform: [{ translateX: -(properti.width ?? 0) / 2 }, { translateY: -(properti.height ?? 0) / 2 }] }
    : {};

  return <View style={[posisi, gayaTransform]}>{elemenRender}</View>;
};

export default function LayarGeometrisUnik() {
  return (
    <SafeAreaView style={gaya.wadahUtama}>
      {DATA_ELEMEN.map(item => (
        <ElemenVisual key={item.id} definisi={item} />
      ))}
    </SafeAreaView>
  );
}

const gaya = StyleSheet.create({
  wadahUtama: {
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
