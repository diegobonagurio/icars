import React, { useState } from 'react'
import { Alert } from 'react-native'

import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'

import { API } from '@services/api'

import { Button } from '@components/Form/Button'

import {
  Container,
  Header,
  Title,
  Question,
  PaletteAddNote,
  Stars,
  Star,
  GradeLevel,
  Input
} from './styles'

interface Props {
  carId: number
}

const stars = [1, 2, 3, 4, 5]

export const AddCarNote: React.FC<Props> = ({ carId }) => {
  const { COLORS } = useTheme()

  const navigation = useNavigation()

  const [selectedNote, setSelectedNote] = useState(0)
  const [comment, setComment] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  function handleAddNote(note: number) {
    setSelectedNote(note !== selectedNote ? note : 0)
  }

  async function handleSubmitCarReview() {
    try {
      if (!selectedNote) return

      setIsLoading(true)

      await API.post(`/vehicle/${carId}/rating`, {
        author: '', // Anonymous user
        content: comment,
        note: selectedNote
      })

      Alert.alert('Sucesso', 'Sua avaliação foi enviada com sucesso.', [
        {
          text: 'OK',
          onPress: navigation.goBack
        }
      ])
    } catch (error) {
      Alert.alert(
        'Não foi possível enviar sua avaliação',
        error.response.data.message
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Container>
      <Header>
        <Title>Avaliar</Title>
        <Question>Deseja adicionar um comentário?</Question>
      </Header>

      <PaletteAddNote>
        <Stars>
          {stars.map(star => (
            <Star
              key={star}
              color={selectedNote >= star ? COLORS.star : COLORS.gray[200]}
              onPress={() => handleAddNote(star)}
            />
          ))}
        </Stars>

        {selectedNote > 0 && (
          <GradeLevel>
            (
            {selectedNote <= 2
              ? 'Péssimo'
              : selectedNote <= 4
              ? 'Razoável'
              : 'Excelente'}
            )
          </GradeLevel>
        )}
      </PaletteAddNote>

      <Input
        placeholder="Seu comentário..."
        onChangeText={setComment}
        value={comment}
      />

      <Button onPress={handleSubmitCarReview} loading={isLoading}>
        Enviar avaliação
      </Button>
    </Container>
  )
}
