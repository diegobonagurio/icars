import React, { useState } from 'react'

import {
  Container,
  Title,
  Description,
  TouchableReading,
  Reading
} from './styles'

export const AboutCar: React.FC = () => {
  const [numberOfLines, setNumberOfLines] = useState(3)

  function handleReadMoreOrReadLess() {
    setNumberOfLines(numberOfLines > 0 ? 0 : 3)
  }

  return (
    <Container>
      <Title>Descrição</Title>

      <Description numberOfLines={numberOfLines}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque amet cum
        maxime similique dolorum possimus ex deserunt. Non nulla ad soluta at
        praesentium doloribus possimus alias et quisquam, minima laborum?
      </Description>

      <TouchableReading onPress={handleReadMoreOrReadLess}>
        <Reading>{numberOfLines > 0 ? 'Ler mais' : 'Ler menos'}</Reading>
      </TouchableReading>
    </Container>
  )
}
