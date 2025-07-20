import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function TataLetakAkar() {
  const [fontSiap, erorFont] = useFonts({
    // --- Font Statis dengan Kunci Baru ---
    'Ubu-Tebal': require('../assets/fonts/statis/Ubuntu-Bold.ttf'),
    'Ubu-TebalMiring': require('../assets/fonts/statis/Ubuntu-BoldItalic.ttf'),
    'Ubu-Miring': require('../assets/fonts/statis/Ubuntu-Italic.ttf'),
    'Ubu-Ringan': require('../assets/fonts/statis/Ubuntu-Light.ttf'),
    'Ubu-RinganMiring': require('../assets/fonts/statis/Ubuntu-LightItalic.ttf'),
    
    // --- Font Variabel dengan Kunci Baru ---
    'Garamond-Var': require('../assets/fonts/variabel/EBGaramond-VariableFont_wght.ttf'),
    'Garamond-Miring-Var': require('../assets/fonts/variabel/EBGaramond-Italic-VariableFont_wght.ttf'),
    'Roboto-Flex-Var': require('../assets/fonts/variabel/RobotoFlex-VariableFont_GRAD,XOPQ,XTRA,YOPQ,YTAS,YTDE,YTFI,YTLC,YTUC,opsz,slnt,wdth,wght.ttf'),
    'Schibsted-Var': require('../assets/fonts/variabel/SchibstedGrotesk-VariableFont_wght.ttf'),
    'Schibsted-Miring-Var': require('../assets/fonts/variabel/SchibstedGrotesk-Italic-VariableFont_wght.ttf'),
  });

  useEffect(() => {
    if (fontSiap || erorFont) {
      SplashScreen.hideAsync();
    }
  }, [fontSiap, erorFont]);

  if (erorFont) {
    console.error('Gagal memuat aset font:', erorFont);
  }

  if (!fontSiap && !erorFont) {
    return null;
  }
  
  return <Stack screenOptions={{ headerShown: false }} />;
}
