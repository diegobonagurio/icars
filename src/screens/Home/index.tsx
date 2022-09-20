import React, { useEffect, useState, useCallback } from 'react'
import { Alert } from 'react-native'

import { StatusBar } from 'expo-status-bar'

import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'

import ICarsSvg from '@assets/svgs/logo.svg'

import { API } from '@services/api'
import { ICategoryDTO } from '@dtos/categoryDTO'
import { ICarDTO } from '@dtos/carDTO'

import { FilterCategories } from '@components/FilterCategories'
import { CarCard } from '@components/CarCard'
import { CarLoading } from '@components/CarLoading'

import { Splash } from '@screens/Splash'

import { Container, CarList, Footer } from './styles'

export const Home: React.FC = () => {
  const { COLORS } = useTheme()

  const navigation = useNavigation()

  const [categories, setCategories] = useState<ICategoryDTO[]>([])
  const [cars, setCars] = useState<ICarDTO[]>([])

  const [selectedCategory, setSelectedCategory] = useState(0)

  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingCars, setIsLoadingCars] = useState(false)

  function handleViewCarDetails(car: ICarDTO) {
    navigation.navigate('Details', { car })
  }

  async function loadCategories() {
    try {
      const { data: response } = await API.get('/categories')
      return response.data
    } catch {
      throw new Error('Não foi possível listar categorias.')
    }
  }

  async function loadCategoryCars(categoryId: number) {
    try {
      const { data: response } = await API.get(
        `/vehicles/${categoryId < 1 ? 'all' : categoryId}`
      )
      return response.data
    } catch {
      throw new Error('Não foi possível listar os carros dessa categoria.')
    }
  }

  const loadCarBySelectedCategory = useCallback(async () => {
    try {
      setIsLoadingCars(true)
      const data = await loadCategoryCars(selectedCategory)
      setCars(data)
    } catch (error) {
      Alert.alert('Ocorreu um erro', error.message)
    } finally {
      setIsLoadingCars(false)
    }
  }, [selectedCategory])

  useEffect(() => {
    if (isLoading) {
      Promise.all([loadCategories(), loadCategoryCars(selectedCategory)]).then(
        ([loadedCategories, loadedCars]) => {
          setCategories(loadedCategories)
          setCars(loadedCars)

          setIsLoading(false)
        }
      )
    }
  }, [])

  useEffect(() => {
    loadCarBySelectedCategory()
  }, [selectedCategory])

  return (
    <Container>
      <StatusBar style="dark" translucent backgroundColor="transparent" />

      {isLoading ? (
        <Splash />
      ) : (
        <>
          <ICarsSvg style={{ marginLeft: 24 }} fill={COLORS.heading[100]} />

          <FilterCategories
            brands={categories}
            onChange={setSelectedCategory}
            loading={isLoadingCars}
          />

          {isLoadingCars ? (
            <CarLoading />
          ) : (
            <CarList
              data={cars}
              keyExtractor={({ id }) => String(id)}
              renderItem={({ item: carData }) => (
                <CarCard
                  data={carData}
                  onPress={() => handleViewCarDetails(carData)}
                />
              )}
            />
          )}

          <Footer />
        </>
      )}
    </Container>
  )
}
