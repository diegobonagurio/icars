import styled from 'styled-components/native'
import { FlatList, FlatListProps, Platform } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

import { ICarDTO } from '@dtos/CarDTO'

import {
  getStatusBarHeight,
  getBottomSpace
} from 'react-native-iphone-x-helper'
import { rgba } from 'polished'

export const Container = styled.View`
  flex: 1;
  padding-top: ${Platform.OS === 'ios' ? getStatusBarHeight() + 16 : 64}px;

  background-color: ${({ theme }) => theme.COLORS.background[200]};
`

export const CarList = styled(
  FlatList as new (props: FlatListProps<ICarDTO>) => FlatList<ICarDTO>
).attrs({
  contentContainerStyle: {
    flexGrow: 1,

    paddingTop: 16,
    paddingBottom: 80,
    paddingHorizontal: 22
  },
  showsVerticalScrollIndicator: false
})``

export const Footer = styled(LinearGradient).attrs(({ theme }) => {
  return {
    colors: [
      rgba(theme.COLORS.background[200], 0.05),
      theme.COLORS.background[200]
    ]
  }
})`
  width: 100%;
  height: ${getBottomSpace() + 80}px;

  position: absolute;
  bottom: 0;
`
