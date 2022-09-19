import styled from 'styled-components/native'
import { Platform } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

import Animated from 'react-native-reanimated'

import {
  getStatusBarHeight,
  getBottomSpace
} from 'react-native-iphone-x-helper'
import { rgba } from 'polished'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.background[200]};
`

export const Header = styled(Animated.View)`
  width: 100%;
  min-height: 264px;

  padding: ${Platform.OS === 'ios' ? getStatusBarHeight() + 10 : 42}px 0 24px;

  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;

  background-color: ${({ theme }) => theme.COLORS.heading[200]};
`

export const Heading = styled.View`
  padding: 0 24px;
  margin-bottom: 16px;
`

export const TouchableGoback = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  width: 50px;
  height: 50px;

  justify-content: center;

  margin-bottom: 16px;
`

export const Icon = styled(Feather)`
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.background[100]};
`

export const Content = styled(Animated.ScrollView).attrs({
  contentContainerStyle: {
    flexGrow: 1,

    paddingTop: 24,
    paddingBottom: getBottomSpace() + 10,
    paddingHorizontal: 24
  },
  showsVerticalScrollIndicator: false
})``

export const Footer = styled(LinearGradient).attrs(({ theme }) => {
  return {
    colors: [
      rgba(theme.COLORS.background[200], 0.05),
      theme.COLORS.background[200]
    ]
  }
})`
  width: 100%;
  height: ${Platform.OS === 'ios' ? getBottomSpace() + 80 : 80}px;

  position: absolute;
  bottom: 0;
`
