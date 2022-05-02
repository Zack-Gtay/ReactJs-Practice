import React from 'react'

export default function SearchBar(props) {

  const { inStockOnly, filterText } = props
  
  const handleInStockChange = (e) =>{
    props.onInStockChange(e.target.checked)
  }

  const handleFilterTextChange = (e) =>{
    props.OnFilterTextChange(e.target.value)
  }
  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter the product name" 
        value={filterText}
        onChange={handleFilterTextChange}
      />
      <p>
        <input 
          type="checkbox" 
          checked={inStockOnly}
          onChange={handleInStockChange}
        />
        {' '}
        Show products in stock only
      </p>
    </div>
  )
}
