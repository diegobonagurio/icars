import React from 'react'

import { useTheme } from 'styled-components/native'

import { SvgUri } from 'react-native-svg'

import { Container, Brand, Information, Name, Year } from './styles'

interface Props {
  data: {
    brand: string
    name: string
    year: string
  }
}

export const CarInformation: React.FC<Props> = ({ data }) => {
  const { COLORS } = useTheme()

  return (
    <Container>
      <Brand>
        <SvgUri uri={data.brand} fill={COLORS.heading[200]} width={24} />
      </Brand>

      <Information>
        <Name>{data.name}</Name>
        <Year>{data.year}</Year>
      </Information>
    </Container>
  )
}
