import React, { useState } from 'react';

import banners from './data/featured-banners.json'
import categories from './data/product-categories.json'
import products from './data/featured-products.json'

import ImageSlider from './components/ImageSlider'
import ImageGrid from './components/ImageGrid'
import Products from './components/Products'
import ProductList from './components/ProductList'


function Content () {
    const [showProducts, setShowProducts] = useState(false)

    return (
      <div className="Content">
          <ImageSlider banners={banners.results} />
          <ImageGrid categories={categories.results} />
          <button onClick={() => setShowProducts(!showProducts)}>View all products</button>
          {showProducts && <ProductList />}
          {/* <Products products={products.results} /> */}
      </div>
    );
  }


export default Content