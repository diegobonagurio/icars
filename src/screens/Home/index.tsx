import React from 'react'

import { StatusBar } from 'expo-status-bar'

import ICarsSvg from '@assets/svgs/logo.svg'

import { BrandFilter } from '@components/BrandFilter'
import { CarCard } from '@components/CarCard'

import { Container, CarList, Footer } from './styles'

const cars = [
  {
    id: '1',
    name: 'Tesla Model X',
    year: '2018'
  },
  {
    id: '2',
    name: 'Chevrolet Corvette',
    year: '2018'
  },
  {
    id: '3',
    name: 'TBMW 3 Series Sedan',
    year: '2020'
  },
  {
    id: '4',
    name: 'TBMW 3 Series Sedan',
    year: '2020'
  },
  {
    id: '5',
    name: 'TBMW 3 Series Sedan',
    year: '2020'
  }
]

export const Home: React.FC = () => {
  return (
    <Container>
      <StatusBar style="dark" translucent backgroundColor="transparent" />

      <ICarsSvg style={{ marginLeft: 24 }} />

      <BrandFilter />

      <CarList
        data={cars}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <CarCard data={item} />}
      />

      <Footer />
    </Container>
  )
}
