import styled from 'styled-components/native'

import Animated, { Layout } from 'react-native-reanimated'

import { rgba } from 'polished'

export const Container = styled.View``

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.medium};
  color: ${({ theme }) => theme.COLORS.heading[200]};

  margin-bottom: 8px;
`

export const Description = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.regular};
  color: ${({ theme }) => theme.COLORS.body};

  text-align: justify;
`

export const TouchableReading = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  width: 100%;
  height: 42px;

  justify-content: center;
  align-items: center;

  border-radius: 48px;

  margin-top: 12px;

  background-color: ${({ theme }) => rgba(theme.COLORS.brand[300], 0.2)};
`

export const Reading = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.medium};
  color: ${({ theme }) => theme.COLORS.brand[100]};
`
