import React, { useState, useEffect } from 'react'
import { ActivityIndicator } from 'react-native'

import { useTheme } from 'styled-components/native'

import { API } from '@services/api'
import { IRatingDTO } from '@dtos/ratingDTO'

import { UserComment } from '@components/UserComment'

import {
  Container,
  Title,
  RatingsPalette,
  StarPalette,
  Star,
  NumberRatings,
  TotalRatings,
  LoadReviews,
  MessageWithoutEvaluation
} from './styles'

interface Props {
  carId?: number
}

const stars = [1, 2, 3, 4, 5]

export const UserReviews: React.FC<Props> = ({ carId }) => {
  const { COLORS } = useTheme()

  const [rating, setRating] = useState<IRatingDTO>()

  const [isLoading, setIsLoading] = useState(true)

  async function loadUserReviews() {
    try {
      const { data } = await API.get(`/vehicle/${carId}/rating?page=1&limit=5`)
      setRating(data)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadUserReviews()
  }, [])

  return (
    <Container>
      <Title>Avaliações de usuários</Title>

      {isLoading ? (
        <LoadReviews>
          <ActivityIndicator color={COLORS.brand[100]} size="small" />
        </LoadReviews>
      ) : rating?.average ? (
        <>
          <RatingsPalette>
            <StarPalette>
              {stars.map(star => (
                <Star
                  key={star}
                  color={
                    rating.average! >= star ? COLORS.star : COLORS.gray[200]
                  }
                />
              ))}

              <NumberRatings>{rating.average.toFixed(1)}</NumberRatings>
            </StarPalette>

            <TotalRatings>
              {rating.total}{' '}
              {rating.total <= 1 ? 'avaliação no total' : 'avaliações no total'}
            </TotalRatings>
          </RatingsPalette>

          {rating.data.map(comment => (
            <UserComment
              key={comment.id}
              data={{ content: comment.content, note: comment.note }}
            />
          ))}
        </>
      ) : (
        <MessageWithoutEvaluation>
          Esse veículo não possuí nenhuma avaliação.
        </MessageWithoutEvaluation>
      )}
    </Container>
  )
}
