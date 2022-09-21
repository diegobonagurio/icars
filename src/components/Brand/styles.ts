import styled from 'styled-components/native'

import Animated from 'react-native-reanimated'

import { rgba } from 'polished'

interface AllProps {
  activated?: boolean
}

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
  width: 64px;
  height: 64px;

  justify-content: center;
  align-items: center;

  border-radius: 16px;

  margin-right: 16px;
`

export const All = styled.Text<AllProps>`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.medium};
  color: ${({ activated, theme }) =>
    activated ? theme.COLORS.background[100] : theme.COLORS.heading[200]};
`
