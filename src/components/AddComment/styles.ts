import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

import { Feather } from '@expo/vector-icons'

import Animated from 'react-native-reanimated'

import { rgba } from 'polished'

const { width } = Dimensions.get('window')

export const Container = styled(Animated.View).attrs({
  shadowColor: rgba('black', 0.05),
  shadowOffset: {
    width: 0,
    height: 9
  },
  shadowOpacity: 0.1,
  shadowRadius: 10,

  elevation: 1
})`
  width: 60px;
  height: 60px;

  justify-content: center;
  align-items: center;

  border-radius: 30px;

  position: absolute;
  right: ${width / 2 - 32}px;
  bottom: 36px;

  background-color: ${({ theme }) => theme.COLORS.brand[100]};
`

export const Icon = styled(Feather).attrs({
  name: 'message-square'
})`
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.background[100]};
`
