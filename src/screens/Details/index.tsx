import React, { useState, useEffect, useRef } from 'react'

import { StatusBar } from 'expo-status-bar'

import { useNavigation, useRoute } from '@react-navigation/native'

import { Modalize } from 'react-native-modalize'

import { API } from '@services/api'
import { ICarDTO } from '@dtos/carDTO'

import { CarInformation } from '@components/CarInformation'
import { CarSlide } from '@components/CarSlide'
import { AboutCar } from '@components/AboutCar'
import { UserReviews } from '@components/UserReviews'
import { BottomSheet } from '@components/BottomSheet'

import { AddCarNote } from '@contents/AddCarNote'

import {
  Container,
  Header,
  Heading,
  TouchableGoback,
  Icon,
  Content,
  Footer,
  AddComment
} from './styles'

interface IRouteParams {
  car: ICarDTO
}

export const Details: React.FC = () => {
  const navigation = useNavigation()

  const [carBrand, setCarBrand] = useState('')

  const route = useRoute()
  const { car } = route.params as IRouteParams

  const bottomSheetAddNote = useRef<Modalize>(null)

  function handleAddVehicleNote() {
    bottomSheetAddNote.current?.open()
  }

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

      <AddComment onPress={handleAddVehicleNote}>
        <Icon name="message-square" />
      </AddComment>

      <BottomSheet ref={bottomSheetAddNote}>
        <AddCarNote carId={car.id} />
      </BottomSheet>
    </Container>
  )
}
