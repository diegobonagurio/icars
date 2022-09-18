import React, { useEffect } from 'react'
import {
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps
} from 'react-native'

import { useTheme } from 'styled-components/native'
import {
  useSharedValue,
  useAnimatedStyle,
  interpolateColor,
  withTiming,
  Easing
} from 'react-native-reanimated'

import { Container, All } from './styles'

interface Props extends TouchableWithoutFeedbackProps {
  name: string
  activated?: boolean
  all?: boolean
}

export const Brand: React.FC<Props> = ({ name, activated, all, ...rest }) => {
  const { COLORS } = useTheme()

  const active = useSharedValue(0)

  const activeAnimationStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        active.value,
        [0, 1],
        [COLORS.background[100], COLORS.brand[100]]
      )
    }
  })

  useEffect(() => {
    active.value = withTiming(activated ? 1 : 0, {
      duration: 200,
      easing: Easing.inOut(Easing.ease)
    })
  }, [activated])

  return (
    <TouchableWithoutFeedback {...rest}>
      <Container style={activeAnimationStyle}>
        {all && <All activated={activated}>{name}</All>}
      </Container>
    </TouchableWithoutFeedback>
  )
}
