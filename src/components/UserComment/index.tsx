import React from 'react'

import { useTheme } from 'styled-components/native'

import AnonymousSvg from '@assets/svgs/anonymous.svg'

import { Container, Content, Name, NumberStars, Star, Message } from './styles'

const stars = [1, 2, 3, 4, 5]

export const UserComment: React.FC = () => {
  const { COLORS } = useTheme()

  return (
    <Container>
      <AnonymousSvg />

      <Content>
        <Name>Usuário Anônimo</Name>

        <NumberStars>
          {stars.map(star => (
            <Star key={star} color={COLORS.star} />
          ))}
        </NumberStars>

        <Message>
          Carro bastante futurista e confortável recomendo bastante!
        </Message>
      </Content>
    </Container>
  )
}
