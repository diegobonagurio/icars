import React, { useState, useRef } from 'react'
import { ViewToken } from 'react-native'

import { Dot } from '@helpers/Dot'

import {
  Container,
  ListPhotographs,
  Content,
  Photography,
  Dots
} from './styles'

import CarAImg from '@assets/Chevrolet/1.png'
import CarBImg from '@assets/Chevrolet/2.png'
import CarCImg from '@assets/Chevrolet/3.png'
import CarDImg from '@assets/Chevrolet/4.png'

const data = [CarAImg, CarBImg, CarCImg, CarDImg]

interface IChangePhotography {
  viewableItems: ViewToken[]
  changed: ViewToken[]
}

const viewabilityConfig = {
  itemVisiblePercentThreshold: 10
}

export const CarSlide: React.FC = () => {
  const [photographyIndex, setPhotographyIndex] = useState(0)

  const indexChanged = useRef((info: IChangePhotography) => {
    const index = info.viewableItems[0].index!
    setPhotographyIndex(index)
  })

  return (
    <Container>
      <ListPhotographs
        data={data}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item }) => (
          <Content>
            <Photography source={item} resizeMode="cover" />
          </Content>
        )}
        onViewableItemsChanged={indexChanged.current}
        viewabilityConfig={viewabilityConfig}
      />

      <Dots>
        {data.map((_, index) => (
          <Dot key={index} activated={index === photographyIndex} />
        ))}
      </Dots>
    </Container>
  )
}
