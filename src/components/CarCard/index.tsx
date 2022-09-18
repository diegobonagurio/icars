import React from 'react'
import {
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps
} from 'react-native'

import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing
} from 'react-native-reanimated'

import { ICarDTO } from '@dtos/CarDTO'

import TeslaSvg from '@assets/svgs/tesla.svg'
import TestImg from '@assets/svgs/test.png'

import {
  Container,
  Card,
  Thumbnail,
  Footer,
  Information,
  Name,
  Year,
  Details,
  TextDetails
} from './styles'

interface Props extends TouchableWithoutFeedbackProps {
  data: ICarDTO
}

const animationConfig = {
  duration: 200,
  easing: Easing.inOut(Easing.linear)
}

export const CarCard: React.FC<Props> = ({ data, ...rest }) => {
  const scale = useSharedValue(1)

  const scaleAnimationStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }]
    }
  })

  function handlePressIn() {
    scale.value = withTiming(0.95, animationConfig)
  }

  function handlePressOut() {
    scale.value = withTiming(1, animationConfig)
  }

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      {...rest}
    >
      <Container style={scaleAnimationStyle}>
        <Card>
          <TeslaSvg />

          <Thumbnail source={TestImg} resizeMode="cover" />

          <Footer>
            <Information>
              <Name>{data.name}</Name>
              <Year>{data.year}</Year>
            </Information>

            <Details>
              <TextDetails>Detalhes</TextDetails>
            </Details>
          </Footer>
        </Card>
      </Container>
    </TouchableWithoutFeedback>
  )
}
