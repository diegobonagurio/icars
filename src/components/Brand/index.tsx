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

import { SvgUri } from 'react-native-svg'

import { Container, All } from './styles'

interface Props extends TouchableWithoutFeedbackProps {
  logo?: string
  activated?: boolean
  all?: boolean
}

export const Brand: React.FC<Props> = ({ logo, activated, all, ...rest }) => {
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
        {all ? (
          <All activated={activated}>Tudo</All>
        ) : (
          <SvgUri
            uri={logo!}
            fill={activated ? COLORS.background[100] : COLORS.heading[100]}
          />
        )}
      </Container>
    </TouchableWithoutFeedback>
  )
}
