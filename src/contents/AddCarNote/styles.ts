import styled from 'styled-components/native'
import { Platform } from 'react-native'

import { Entypo } from '@expo/vector-icons'

import { getBottomSpace } from 'react-native-iphone-x-helper'
import { rgba } from 'polished'

export const Container = styled.View`
  flex: 1;
  padding: 32px 24px ${Platform.OS === 'ios' ? getBottomSpace() : 32}px;
`

export const Header = styled.View``

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.FONTS.medium};
  color: ${({ theme }) => theme.COLORS.heading[100]};

  margin-bottom: 4px;
`

export const Question = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.regular};
  color: ${({ theme }) => theme.COLORS.body};
`

export const PaletteAddNote = styled.View`
  justify-content: center;
  align-items: center;

  margin: 24px 0;
`

export const Stars = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Star = styled(Entypo).attrs({
  name: 'star'
})`
  font-size: 34px;
  margin-right: 8px;
`

export const GradeLevel = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.regular};
  color: ${({ theme }) => theme.COLORS.gray[100]};

  margin-top: 16px;
`

export const Input = styled.TextInput.attrs(({ theme }) => {
  return {
    selectionColor: theme.COLORS.brand[300],
    placeholderTextColor: theme.COLORS.gray[500],
    multiline: true,
    maxLength: 255
  }
})`
  width: 100%;

  padding: 16px;

  border-radius: 14px;

  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.regular};
  color: ${({ theme }) => theme.COLORS.body};

  background-color: ${rgba('black', 0.03)};
`
