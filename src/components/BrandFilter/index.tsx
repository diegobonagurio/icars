import React, { useState } from 'react'

import { Brand } from '@components/Brand'

import { Container, Filters } from './styles'

const brands = [
  'Tudo',
  'Tesla',
  'Chevrolet',
  'Audi',
  'Mitsubishi Motors',
  'Volvo',
  'Lamborghini'
]

export const BrandFilter: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('')

  function handleApplyFilter(filter: string) {
    setSelectedCategory(filter)
  }

  return (
    <Container>
      <Filters>
        {brands.map((brand, index) => (
          <Brand
            key={index}
            name={brand}
            all={index === 0}
            activated={brand === selectedCategory}
            onPress={() => handleApplyFilter(brand)}
          />
        ))}
      </Filters>
    </Container>
  )
}
