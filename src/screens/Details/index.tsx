import React, { useState, useEffect } from 'react'

import { StatusBar } from 'expo-status-bar'

import { useNavigation, useRoute } from '@react-navigation/native'

import { API } from '@services/api'
import { ICarDTO } from '@dtos/carDTO'

import { CarInformation } from '@components/CarInformation'
import { CarSlide } from '@components/CarSlide'
import { AboutCar } from '@components/AboutCar'
import { UserReviews } from '@components/UserReviews'
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

interface IRouteParams {
  car: ICarDTO
}

export const Details: React.FC = () => {
  const navigation = useNavigation()

  const [carBrand, setCarBrand] = useState('')

  const route = useRoute()
  const { car } = route.params as IRouteParams

  useEffect(() => {
    async function loadCarBrand() {
      const { data: response } = await API.get('/categories')

      const brandLogo = response.data.find(
        (brand: ICarDTO) => brand.id === car.categoryId
      ).logo

      setCarBrand(brandLogo)
    }

    loadCarBrand()
  }, [])

  return (
    <Container>
      <StatusBar style="light" translucent backgroundColor="transparent" />

      <Header>
        <Heading>
          <TouchableGoback onPress={navigation.goBack}>
            <Icon name="arrow-left" />
          </TouchableGoback>

          <CarInformation
            data={{
              brand: carBrand,
              name: car.name,
              year: car.year
            }}
          />
        </Heading>

        <CarSlide carPhotographs={car.vehicleImages} />
      </Header>

      <Content>
        <AboutCar description={car.description} />
        <UserReviews carId={car.id} />
      </Content>

      <Footer />

      <AddComment />
    </Container>
  )
}
