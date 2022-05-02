import React from 'react'

export default function ProductCategoryRow(props) {
  const {category} = props;
  return (
    
        <tr>
          <td colSpan="2">{category}</td>
          
       </tr>
  )
}
