import React from 'react'

import { StatusBar } from 'expo-status-bar'

import { useTheme } from 'styled-components/native'

import LogoSvg from '@assets/svgs/logo.svg'

import { Container } from './styles'

export const Splash: React.FC = () => {
  const { COLORS } = useTheme()

  return (
    <Container>
      <StatusBar style="light" translucent backgroundColor="transparent" />

      <LogoSvg width={150} height={150} fill={COLORS.background[100]} />
    </Container>
  )
}
