import styled from 'styled-components/native'

import Animated from 'react-native-reanimated'

import { rgba } from 'polished'

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
  width: 100%;
  height: 154px;

  justify-content: flex-end;

  margin-bottom: 8px;
`

export const Card = styled.View`
  width: 100%;
  height: 115px;

  justify-content: space-between;

  border-radius: 16px;

  padding: 16px;

  background-color: ${({ theme }) => theme.COLORS.background[100]};
`

export const Thumbnail = styled.Image`
  width: 205px;
  height: 90px;

  position: absolute;
  top: -36px;
  right: 16px;
`

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Information = styled.View``

export const Name = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.medium};
  color: ${({ theme }) => theme.COLORS.heading[100]};

  margin-bottom: 2px;
`

export const Year = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONTS.medium};
  color: ${({ theme }) => theme.COLORS.gray[100]};
`

export const Details = styled.View`
  justify-content: center;
  align-items: center;

  padding: 10px 32px;

  border-radius: 48px;

  background-color: ${({ theme }) => theme.COLORS.brand[100]};
`

export const TextDetails = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.medium};
  color: ${({ theme }) => theme.COLORS.background[100]};
`
