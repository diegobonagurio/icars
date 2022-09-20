import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { Container, Title } from './styles'

export const Button: React.FC<TouchableOpacityProps> = ({
  children,
  ...rest
}) => {
  return (
    <Container activeOpacity={0.9} {...rest}>
      <Title>{children}</Title>
    </Container>
  )
}
