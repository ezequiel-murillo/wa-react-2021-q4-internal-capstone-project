import React from 'react';
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
    return (
        <Container>
            <LeftCol>
              <CatNavBar categories={categories}/>
            </LeftCol>
            <RightCol>
              <Products products={products}/>
              <Pagination/>
            </RightCol>
        </Container>
    );
}

export default ProductList

