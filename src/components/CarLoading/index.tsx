import React from 'react'

import Lottie from 'lottie-react-native'

import carLoading from '@utils/car-loading.json'

import { Container } from './styles'

export const CarLoading: React.FC = () => {
  return (
    <Container>
      <Lottie
        style={{ width: 250 }}
        source={carLoading}
        resizeMode="cover"
        autoPlay
        loop
      />
    </Container>
  )
}
