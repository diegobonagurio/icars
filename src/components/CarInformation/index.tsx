import React from 'react'

import { useTheme } from 'styled-components/native'

import { SvgUri } from 'react-native-svg'

import { Container, Brand, Information, Name, Year } from './styles'

export const CarInformation: React.FC = () => {
  const { COLORS } = useTheme()

  return (
    <Container>
      <Brand>
        <SvgUri
          uri="https://cdn.discordapp.com/attachments/788845721797394485/1021146536639483924/tesla.svg"
          fill={COLORS.heading[200]}
          width={24}
        />
      </Brand>

      <Information>
        <Name>Tesla Model X</Name>
        <Year>2018</Year>
      </Information>
    </Container>
  )
}
