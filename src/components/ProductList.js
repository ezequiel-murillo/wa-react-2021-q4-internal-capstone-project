import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import Products from './Products';
import CatNavBar from './CatNavBar';
import Pagination from './Pagination'

const Container = styled.div`
display: flex;
width: 100%;
` 
const LeftCol = styled.div`
width: 10%;
`
const RightCol = styled.div`
width: 100%;
`

const ProductList = ({categories, products}) => {
  const [filters, setFilters] = useState([])

  const addFilter = (filterId) => {
    setFilters([...filters, filterId])
  }
  const remFilter = (filterId) => {
    setFilters(filters.filter(val => val !== filterId))
  }
  useEffect(() => {
    console.log(filters)
  }, [filters])

  return (
        <Container>
            <LeftCol>
              <CatNavBar 
                categories={categories}
                addFilter={addFilter}
                remFilter={remFilter}
              />
            </LeftCol>
            <RightCol>
              <Products products={products} filters={filters}/>
              <Pagination/>
            </RightCol>
        </Container>
  );
}

export default ProductList

