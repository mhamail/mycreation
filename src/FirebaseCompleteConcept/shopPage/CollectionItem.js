import React from 'react'
import './CollectionItem.scss'
const CollectionItem = ({ item }) => {
    const { imageUrl, name, price } = item;
    return (
        <div className='collection_item'>
            <div className='image'
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="collection_footer">
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <span>
                <button className='customButton'>Add to Cart</button>
            </span>
        </div>
    )
}

export default CollectionItem
