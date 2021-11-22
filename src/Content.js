import React, { useState } from 'react';

import banners from './data/featured-banners.json'
import categories from './data/product-categories.json'
import products from './data/featured-products.json'

import ImageSlider from './components/ImageSlider'
import ImageGrid from './components/ImageGrid'
import Products from './components/Products'
import ProductList from './components/ProductList'

function Home() {
  return (
    <React.Fragment>
      <ImageSlider banners={banners.results} />
      <ImageGrid categories={categories.results} />
      <Products products={products.results} />
    </React.Fragment>
  )
}

function Content () {
    const [showProducts, setShowProducts] = useState(false)

    let content
    if (showProducts) {
      content = <ProductList categories={categories.results} products={products.results}/>
    } else {
      content = <Home/>
    }

    return (
      <div className="Content">
        <button onClick={() => setShowProducts(!showProducts)}>View all products</button>
        {content}
      </div>
    );
  }

export default Content