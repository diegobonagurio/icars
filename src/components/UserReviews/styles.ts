import styled from 'styled-components/native'

import { Entypo } from '@expo/vector-icons'

export const Container = styled.View`
  margin-top: 16px;
`

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.medium};
  color: ${({ theme }) => theme.COLORS.heading[100]};
`

export const RatingsPalette = styled.View`
  justify-content: center;
  align-items: center;

  margin: 12px 0 24px;
`

export const StarPalette = styled.View`
  flex-direction: row;
  align-items: center;

  padding: 8px 12px;

  border-radius: 36px;

  margin-bottom: 8px;

  background-color: ${({ theme }) => theme.COLORS.background[300]};
`

export const Star = styled(Entypo).attrs({
  name: 'star'
})`
  font-size: 24px;
  margin-right: 8px;
`

export const NumberRatings = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.FONTS.medium};
  color: ${({ theme }) => theme.COLORS.heading[100]};
`

export const TotalRatings = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONTS.medium};
  color: ${({ theme }) => theme.COLORS.gray[100]};
`
