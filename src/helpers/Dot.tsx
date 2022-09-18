import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'

import { useTheme } from 'styled-components/native'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolateColor,
  withTiming,
  Easing
} from 'react-native-reanimated'

import { rgba } from 'polished'

interface Props {
  activated?: boolean
}

export const Dot: React.FC<Props> = ({ activated }) => {
  const { COLORS } = useTheme()

  const active = useSharedValue(0)

  const disabledColor = rgba(COLORS.background[200], 0.2)

  const activeAnimationStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        active.value,
        [0, 1],
        [disabledColor, COLORS.brand[100]]
      )
    }
  })

  useEffect(() => {
    active.value = withTiming(activated ? 1 : 0, {
      duration: 200,
      easing: Easing.inOut(Easing.ease)
    })
  }, [activated])

  return <Animated.View style={[activeAnimationStyle, styles.container]} />
}

const styles = StyleSheet.create({
  container: {
    width: 6,
    height: 6,

    borderRadius: 3,

    marginHorizontal: 2
  }
})
