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
import { IVehicleImages } from '@dtos/carDTO'

interface Props {
  carPhotographs: IVehicleImages[]
}
interface IChangePhotography {
  viewableItems: ViewToken[]
  changed: ViewToken[]
}

const viewabilityConfig = {
  itemVisiblePercentThreshold: 10
}

export const CarSlide: React.FC<Props> = ({ carPhotographs }) => {
  const [photographyIndex, setPhotographyIndex] = useState(0)

  const indexChanged = useRef((info: IChangePhotography) => {
    const index = info.viewableItems[0].index!
    setPhotographyIndex(index)
  })

  return (
    <Container>
      <ListPhotographs
        data={carPhotographs}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item }) => (
          <Content>
            <Photography source={{ uri: item.url }} resizeMode="cover" />
          </Content>
        )}
        onViewableItemsChanged={indexChanged.current}
        viewabilityConfig={viewabilityConfig}
      />

      <Dots>
        {carPhotographs.map((_, index) => (
          <Dot key={index} activated={index === photographyIndex} />
        ))}
      </Dots>
    </Container>
  )
}
