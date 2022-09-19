import React from 'react'

import { useTheme } from 'styled-components/native'

import { UserComment } from '@components/UserComment'

import {
  Container,
  Title,
  RatingsPalette,
  StarPalette,
  Star,
  NumberRatings,
  TotalRatings
} from './styles'

const stars = [1, 2, 3, 4, 5]

export const UserReviews: React.FC = () => {
  const { COLORS } = useTheme()

  const numberStars = 4

  return (
    <Container>
      <Title>Avaliações de usuários</Title>

      <RatingsPalette>
        <StarPalette>
          {stars.map(star => (
            <Star
              key={star}
              color={numberStars >= star ? COLORS.star : COLORS.gray[200]}
            />
          ))}

          <NumberRatings>4.5 de 5</NumberRatings>
        </StarPalette>

        <TotalRatings>47 avaliações no total</TotalRatings>
      </RatingsPalette>

      <UserComment />

      <UserComment />
    </Container>
  )
}
