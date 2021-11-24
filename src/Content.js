import React, { useState } from 'react';
import styled from 'styled-components';

import banners from './data/featured-banners.json'
import categories from './data/product-categories.json'
import products from './data/featured-products.json'

import ImageSlider from './components/ImageSlider'
import ImageGrid from './components/ImageGrid'
import Products from './components/Products'
import ProductList from './components/ProductList'

const ShowButton = styled.span`
  position: absolute;
  background-color: #d8ab196c;
  padding: 10px;
  cursor: pointer;
  z-index: 2;
  &:hover {
    background-color: #9e801eb7;
  }
`

function Home({setShowProducts}) {
  return (
    <React.Fragment>
      <ShowButton onClick={setShowProducts}>View all products</ShowButton>
      <ImageSlider banners={banners.results} />
      <ImageGrid categories={categories.results} />
      <Products products={products.results} />
    </React.Fragment>
  )
}

function Content () {
    const [showProducts, setShowProducts] = useState(false)
    const handleShowProducts = () => setShowProducts(!showProducts)

    let content
    if (showProducts) {
      content = <ProductList 
                  categories={categories.results} 
                  products={products.results}
                />
    } else {
      content = <Home setShowProducts={handleShowProducts}/>
    }

    return (
      <div className="Content">
        {content}
      </div>
    );
  }

export default Content