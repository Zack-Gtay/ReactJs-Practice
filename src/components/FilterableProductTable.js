import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export function FilterableProductTable(props) {
  const products = props;
  return (
    <div>
      <SearchBar />
      <ProductTable products={products}/>
    </div>
  )
}
