import React from 'react'

import { StatusBar } from 'expo-status-bar'

import { CarInformation } from '@components/CarInformation'
import { CarSlide } from '@components/CarSlide'
import { AboutCar } from '@components/AboutCar'
import { AddComment } from '@components/AddComment'

import {
  Container,
  Header,
  Heading,
  TouchableGoback,
  Icon,
  Content,
  Footer
} from './styles'

export const Details: React.FC = () => {
  return (
    <Container>
      <StatusBar style="light" translucent backgroundColor="transparent" />

      <Header>
        <Heading>
          <TouchableGoback>
            <Icon name="arrow-left" />
          </TouchableGoback>

          <CarInformation />
        </Heading>

        <CarSlide />
      </Header>

      <Content>
        <AboutCar />
      </Content>

      <Footer />

      <AddComment />
    </Container>
  )
}
