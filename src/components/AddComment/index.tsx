import React from 'react'

import {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler
} from 'react-native-reanimated'

import { Container, Icon } from './styles'

export const AddComment: React.FC = () => {
  const positionX = useSharedValue(0)
  const positionY = useSharedValue(0)

  return (
    <Container>
      <Icon />
    </Container>
  )
}
