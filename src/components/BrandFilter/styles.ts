import styled from 'styled-components/native'
import { ScrollView, ScrollViewProps } from 'react-native'

export const Container = styled.View`
  padding: 16px 0;
  margin-top: 16px;
`

export const Filters = styled(
  ScrollView as new (props: ScrollViewProps) => ScrollView
).attrs({
  contentContainerStyle: {
    paddingLeft: 24
  },
  showsHorizontalScrollIndicator: false,
  horizontal: true
})``
