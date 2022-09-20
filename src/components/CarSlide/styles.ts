import styled from 'styled-components/native'
import { FlatList, FlatListProps, Dimensions } from 'react-native'

import { IVehicleImages } from '@dtos/carDTO'

const { width } = Dimensions.get('window')

export const Container = styled.View``

export const ListPhotographs = styled(
  FlatList as new (
    props: FlatListProps<IVehicleImages>
  ) => FlatList<IVehicleImages>
).attrs({
  showsHorizontalScrollIndicator: false,
  horizontal: true,
  pagingEnabled: true,
  bounces: false
})``

export const Content = styled.View`
  width: ${width}px;

  justify-content: center;
  align-items: center;
`

export const Photography = styled.Image`
  width: 280px;
  height: 124px;
`

export const Dots = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 16px;
`
