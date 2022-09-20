import React, { useState } from 'react'

import { useTheme } from 'styled-components/native'

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

const stars = [1, 2, 3, 4, 5]

export const AddCarNote: React.FC = () => {
  const { COLORS } = useTheme()

  const [selectedNote, setSelectedNote] = useState(0)

  function handleAddNote(note: number) {
    setSelectedNote(note !== selectedNote ? note : 0)
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

      <Input placeholder="Seu comentário..." />

      <Button>Continuar</Button>
    </Container>
  )
}
