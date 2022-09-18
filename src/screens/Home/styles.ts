import styled from 'styled-components/native'
import { FlatList, FlatListProps } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

import { ICarDTO } from '@dtos/CarDTO'

import { rgba } from 'polished'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.background[200]};
`

export const Content = styled.View`
  flex: 1;
  padding-top: 16px;
`

export const CarList = styled(
  FlatList as new (props: FlatListProps<ICarDTO>) => FlatList<ICarDTO>
).attrs({
  contentContainerStyle: {
    flexGrow: 1,

    paddingHorizontal: 22,
    paddingTop: 16
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
  height: 80px;

  position: absolute;
  bottom: 0;
`
