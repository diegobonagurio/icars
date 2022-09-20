import styled from 'styled-components/native'

import Animated, { FadeOut, Easing } from 'react-native-reanimated'

export const Container = styled(Animated.View).attrs({
  exiting: FadeOut.easing(Easing.inOut(Easing.ease))
})`
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;

  position: absolute;

  background-color: ${({ theme }) => theme.COLORS.brand[100]};
`
