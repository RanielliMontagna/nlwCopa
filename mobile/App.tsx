import React from 'react';
import { Box, NativeBaseProvider, StatusBar } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { THEME } from './src/styles/theme';
import { Loading } from './src/components/Loading';
import { AuthContextProvider } from './src/context/AuthContext';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  return (
    <Box flex={1} bgColor="gray.900">
      <NativeBaseProvider theme={THEME}>
        <AuthContextProvider>
          <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
          {!fontsLoaded ? <Loading /> : <Routes />}
        </AuthContextProvider>
      </NativeBaseProvider>
    </Box>
  );
}
