import styled from 'styled-components/native'

import { Entypo } from '@expo/vector-icons'

export const Container = styled.View`
  flex-direction: row;
  align-items: flex-start;

  border-color: ${({ theme }) => theme.COLORS.gray[300]};
  border-bottom-width: 1px;

  padding-bottom: 16px;

  margin-bottom: 16px;
`

export const Content = styled.View`
  flex: 1;
  margin-left: 16px;
`

export const Name = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.medium};
  color: ${({ theme }) => theme.COLORS.heading[100]};

  margin-bottom: 2px;
`

export const NumberStars = styled.View`
  flex-direction: row;
  align-items: center;

  margin-bottom: 4px;
`

export const Star = styled(Entypo).attrs({
  name: 'star'
})`
  font-size: 14px;
  margin-right: 2px;
`

export const Message = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.regular};
  color: ${({ theme }) => theme.COLORS.body};
`
