import React from 'react';
import PropTypes from 'prop-types';
import IconSwitch from '../IconSwitch/iconSwitch.jsx';
import ShopItem from '../ShopItem/shopItem.jsx';
import ShopCard from '../ShopCard/shopCard.jsx';
import ListView from '../ListView/listView.jsx';
import CardsView from '../CardsView/cardsView.jsx';
import { products } from '../Data/data.js';

class Store extends React.Component {
    constructor(props) {
      super(props) 
      this.state = {
        icon: "view_list"
      }
    } 
    handToggle = () => {
        this.state.icon === "view_list" ? this.setState({icon: "view_module"}) : this.setState({icon: "view_list"})
    }
      
      render() {
        return (
          <>
            <div>
            <IconSwitch icon={this.state.icon} onSwitch={this.handToggle} />
            </div>
            <div>
            {this.state.icon === "view_module" ? <ListView items={<ShopItem products={products} />} /> : 
              <CardsView cards={<ShopCard products={products} />} />
            }
            </div>
          </>
        )
    }
};

export default Store

Store.propTypes = {
  products: PropTypes.array.isRequired
}