import React, {useState} from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

export function FilterableProductTable(props) {
  const {products} = props;
  const [inStockOnly, setInStockOnly] = useState(false)
  const [filterText, setFilterText] = useState('')


  const handleInStockChange = (value) =>{
    setInStockOnly(value)
  }


  const handleOnTextChange = (value) =>{
    setFilterText(value)
  }
  return (
    <div>
      <SearchBar 
        inStockOnly={inStockOnly}
        onInStockChange={handleInStockChange}
        
        filterText={filterText}
        OnFilterTextChange={handleOnTextChange}
      />
      <ProductTable 
        products={products}
        inStockOnly={inStockOnly}

        filterText={filterText}
      />
    </div>
  )
}
