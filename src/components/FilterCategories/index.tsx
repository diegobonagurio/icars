import React, { useState } from 'react'

import { ICategoryDTO } from '@dtos/categoryDTO'

import { Brand } from '@components/Brand'

import { Container, Filters } from './styles'

interface Props {
  brands: ICategoryDTO[]
  onChange(event: number): void
  loading?: boolean
}

export const FilterCategories: React.FC<Props> = ({
  brands,
  onChange,
  loading
}) => {
  const [selectedCategory, setSelectedCategory] = useState(0)

  function handleFilterByBrand(categoryId: number) {
    setSelectedCategory(categoryId)
    onChange(categoryId)
  }

  return (
    <Container>
      <Filters>
        <Brand
          all
          activated={selectedCategory === 0}
          onPress={() => handleFilterByBrand(0)}
          disabled={loading}
        />

        {brands.map(brand => (
          <Brand
            key={brand.id}
            logo={brand.logo}
            activated={brand.id === selectedCategory}
            onPress={() => handleFilterByBrand(brand.id)}
            disabled={loading}
          />
        ))}
      </Filters>
    </Container>
  )
}
