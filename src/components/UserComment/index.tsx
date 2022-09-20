import React from 'react'

import { useTheme } from 'styled-components/native'

import AnonymousSvg from '@assets/svgs/anonymous.svg'

import { Container, Content, Name, NumberStars, Star, Message } from './styles'

interface Props {
  data: {
    content: string
    note: number
  }
}

const stars = [1, 2, 3, 4, 5]

export const UserComment: React.FC<Props> = ({ data }) => {
  const { COLORS } = useTheme()

  return (
    <Container>
      <AnonymousSvg />

      <Content>
        <Name>Usuário Anônimo</Name>

        <NumberStars>
          {stars.map(star => (
            <Star
              key={star}
              color={data.note >= star ? COLORS.star : COLORS.gray[200]}
            />
          ))}
        </NumberStars>

        <Message>{data.content}</Message>
      </Content>
    </Container>
  )
}
