import React from 'react';
import PropTypes from 'prop-types'

function ShopCard(props) {
    const {products} = props
    var arr = products.map(product => 
      <div className="shopcard" key={`${product.name}_${product.color}`}>
        <img alt={product.name} src={product.img} />
        <div className="title">
          <h2>{product.name}</h2>
          <p style={{color: "#555555"}}>{product.color}</p>
        </div>
        <div className="footer">                    
          <p style={{color: "red"}}>${product.price}</p>
          <button className="btn">Add to card</button>
         </div>
      </div> 
   )
    return (
      <div>{arr}</div>
    );
};

export default ShopCard

ShopCard.propTypes = {
  products: PropTypes.array.isRequired
}