import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

import Animated, { FadeOut, Easing } from 'react-native-reanimated'

const { width, height } = Dimensions.get('window')

export const Container = styled(Animated.View).attrs({
  exiting: FadeOut.easing(Easing.inOut(Easing.ease))
})`
  width: ${width}px;
  height: ${height}px;

  justify-content: center;
  align-items: center;

  position: absolute;

  background-color: ${({ theme }) => theme.COLORS.brand[100]};
`
