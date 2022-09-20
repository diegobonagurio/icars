import React, { useState, useEffect } from 'react'
import {
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps
} from 'react-native'

import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  FadeIn
} from 'react-native-reanimated'

import { API } from '@services/api'
import { ICarDTO } from '@dtos/CarDTO'

import {
  Container,
  Card,
  Brand,
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
  const [carBrand, setCarBrand] = useState('')

  const scale = useSharedValue(1)

  const entering = FadeIn.delay(data.id * 100)
    .duration(180)
    .easing(Easing.inOut(Easing.ease))

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

  useEffect(() => {
    async function loadCarBrand() {
      const { data: response } = await API.get('/categories')

      const brandLogo = response.data.find(
        (brand: ICarDTO) => brand.id === data.categoryId
      ).logo

      setCarBrand(brandLogo)
    }

    loadCarBrand()
  }, [])

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      {...rest}
    >
      <Container entering={entering} style={scaleAnimationStyle}>
        <Card>
          <Brand uri={carBrand} />

          <Thumbnail
            source={{ uri: data.vehicleImages[0].url }}
            resizeMode="cover"
          />

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
