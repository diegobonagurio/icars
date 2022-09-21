import React, { useState } from 'react'

import {
  Container,
  Title,
  Description,
  TouchableReading,
  Reading
} from './styles'

interface Props {
  description: string
}

export const AboutCar: React.FC<Props> = ({ description }) => {
  const [numberOfLines, setNumberOfLines] = useState(3)

  function handleReadMoreOrReadLess() {
    setNumberOfLines(numberOfLines > 0 ? 0 : 3)
  }

  return (
    <Container>
      <Title>Descrição</Title>

      <Description numberOfLines={numberOfLines}>{description}</Description>

      <TouchableReading onPress={handleReadMoreOrReadLess}>
        <Reading>{numberOfLines > 0 ? 'Ler mais' : 'Ler menos'}</Reading>
      </TouchableReading>
    </Container>
  )
}
