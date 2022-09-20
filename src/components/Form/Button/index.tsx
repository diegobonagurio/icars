import React from 'react'
import { TouchableOpacityProps, ActivityIndicator } from 'react-native'

import { useTheme } from 'styled-components/native'

import { Container, Title } from './styles'

interface Props extends TouchableOpacityProps {
  loading?: boolean
}

export const Button: React.FC<Props> = ({ children, loading, ...rest }) => {
  const { COLORS } = useTheme()

  return (
    <Container activeOpacity={0.9} disabled={loading} {...rest}>
      {loading ? (
        <ActivityIndicator color={COLORS.background[100]} size="small" />
      ) : (
        <Title>{children}</Title>
      )}
    </Container>
  )
}
