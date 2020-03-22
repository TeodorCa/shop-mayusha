import React from 'react';
import ProductItem from './ProductItem'

function ProductList(props) {
    const { items } = props;
    return(
        <div className="row">
            {items
                    ? items.map(item => {
                        return  <ProductItem
                            name = {item.name}
                            price = {item.price}
                            image = {item.image}
                            currency = {item.currency}
                            key = {item.id}
                        />
                    })
                    : null
            }
        </div>
    )
}

export default ProductList