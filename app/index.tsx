import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';

const SUMBER_DATA_GAMBAR = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  utama: `https://picsum.photos/seed/utama${i}/200`,
  alternatif: `https://picsum.photos/seed/alternatif${i}/200`,
}));

type SumberGambar = {
  id: number;
  utama: string;
  alternatif: string;
};

const SelGridInteraktif = ({ sumber }: { sumber: SumberGambar }) => {
  const [pakaiGambarAlternatif, setPakaiGambarAlternatif] = useState(false);
  const [skala, setSkala] = useState(1);

  const handleTekanSel = () => {
    setPakaiGambarAlternatif(prev => !prev);
    
    const skalaBaru = skala * 1.2;
    setSkala(Math.min(skalaBaru, 2));
  };

  const gambarAktif = pakaiGambarAlternatif ? sumber.alternatif : sumber.utama;

  return (
    <TouchableOpacity onPress={handleTekanSel} style={gaya.wadahSel}>
      <Image
        source={{ uri: gambarAktif }}
        style={[
          gaya.gambarDiDalamSel,
          { transform: [{ scale: skala }] }
        ]}
      />
    </TouchableOpacity>
  );
};

export default function LayarGridGambar() {
  return (
    <SafeAreaView style={gaya.layarPenuh}>
      <View style={gaya.kontainerGrid}>
        {SUMBER_DATA_GAMBAR.map(item => (
          <SelGridInteraktif key={item.id} sumber={item} />
        ))}
      </View>
    </SafeAreaView>
  );
}

const lebarLayar = Dimensions.get('window').width;
const ukuranSel = lebarLayar / 7;

const gaya = StyleSheet.create({
  layarPenuh: {
    flex: 1,
    backgroundColor: '#1c1c1e',
  },
  kontainerGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  wadahSel: {
    width: ukuranSel,
    height: ukuranSel,
    padding: 2,
  },
  gambarDiDalamSel: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
});