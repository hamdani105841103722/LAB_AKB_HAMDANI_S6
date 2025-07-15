import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

type SegitigaSamaSisiProps = {
  nama: string;
};

const SegitigaSamaSisi = ({ nama }: SegitigaSamaSisiProps) => {
  return (
    <View style={gaya.wadahSegitiga}>
      <View style={gaya.segitigaSamaSisi} />
    </View>
  );
};

type PersegiPanjangProps = {
  nama: string;
};

const PersegiPanjangKotak = ({ nama }: PersegiPanjangProps) => {
  return (
    <View style={gaya.wadahPersegiPanjangKotak}>
      <Text style={gaya.teksDiDalam}>{nama}</Text>
    </View>
  );
};

type BentukOvalProps = {
  nim: string;
};

const BentukOval = ({ nim }: BentukOvalProps) => {
  return (
    <View style={gaya.wadahOval}>
      <Text style={gaya.teksDiDalam}>{nim}</Text>
    </View>
  );
};

export default function TugasSatuScreen() {
  return (
    <SafeAreaView style={gaya.wadahUtama}>
      <SegitigaSamaSisi nama="Sama Sisi" />
      <PersegiPanjangKotak nama="HAMDANI" />
      <BentukOval nim="105841103722" />
    </SafeAreaView>
  );
}

const gaya = StyleSheet.create({
  wadahUtama: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  wadahSegitiga: {
    position: 'absolute',
    top: 50,
    right: 30,
    alignItems: 'center',
  },
  segitigaSamaSisi: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 60,
    borderRightWidth: 60,
    borderBottomWidth: 50,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#ffc107',
  },
  teksDiDalamSegitiga: {
    marginTop: 5,
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  wadahPersegiPanjangKotak: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -125 }, { translateY: -40 }],
    width: 250,
    height: 80,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wadahOval: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    width: 280,
    height: 60,
    backgroundColor: '#2ecc71',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  teksDiDalam: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});