import React from 'react'
import { View } from 'react-native'

import { useFonts } from 'expo-font'

import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { ThemeProvider } from 'styled-components/native'
import { theme } from '@global/theme'

import { Routes } from '@routes/.'

export const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    'SF_PRO-Regular': require('@assets/fonts/SFPRODISPLAYREGULAR.otf'),
    'SF_PRO-Medium': require('@assets/fonts/SFPRODISPLAYMEDIUM.otf')
  })

  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        {fontsLoaded ? <Routes /> : <View />}
      </GestureHandlerRootView>
    </ThemeProvider>
  )
}
