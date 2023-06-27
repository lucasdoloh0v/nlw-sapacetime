import { styled } from 'nativewind'
import { ImageBackground } from 'react-native'
import { SplashScreen, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import * as SecureStore from 'expo-secure-store'
import { useEffect, useState } from 'react'

import {
  useFonts,
  Roboto_400Regular as Roboto400Regular,
  Roboto_700Bold as Roboto700Bold,
} from '@expo-google-fonts/roboto'
import { BaiJamjuree_700Bold as BaiJamjuree700Bold } from '@expo-google-fonts/bai-jamjuree'

import blurBg from '../src/assets/bg-blur.png'
import Stripes from '../src/assets/stripes.svg'

const StyledStripes = styled(Stripes)

function Layout() {
  const [isAuthenticated, setIsAuthenticated] = useState<null | boolean>(null)

  const [hasLoadedFonts] = useFonts({
    Roboto400Regular,
    Roboto700Bold,
    BaiJamjuree700Bold,
  })

  useEffect(() => {
    SecureStore.getItemAsync('token').then((token) => {
      setIsAuthenticated(!!token)
    })
  }, [])

  if (!hasLoadedFonts) return <SplashScreen />

  return (
    <ImageBackground
      source={blurBg}
      className="relative flex-1  bg-gray-900"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StatusBar style="light" translucent />
      <StyledStripes className="absolute left-2 h-screen" />

      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: 'transparent' },
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name="index" redirect={isAuthenticated} />
        <Stack.Screen name="memories" />
        <Stack.Screen name="new" />
      </Stack>
    </ImageBackground>
  )
}

export default Layout
