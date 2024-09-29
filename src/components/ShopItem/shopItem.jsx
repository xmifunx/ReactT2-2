import React from 'react';
import PropTypes from 'prop-types'

function ShopItem(props) {
    let {products} = props
    let arr = products.map(product => 
      <li className="shopitem" key={`${product.name}_${product.color}`}>
        <img alt={product.name} src={product.img} />
        <h2>{product.name}</h2>
        <p style={{color: "#555555"}}>{product.color}</p>
        <p style={{color: "red"}}>${product.price}</p>
        <button className="btn">Add to card</button>    
      </li>
    )
    return arr;
}

export default ShopItem

ShopItem.propTypes = {
  products: PropTypes.array.isRequired
}