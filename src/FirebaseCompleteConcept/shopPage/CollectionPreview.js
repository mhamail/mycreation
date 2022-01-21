import React from 'react'
import CollectionItem from './CollectionItem'
import './CollectionItem.scss'
const CollectionPreview = ({ title, items }) => {
    return (
        <div>
            <h1>{title}</h1>
            <div className="collection_preview">
                {items.filter((elem, index) => index < 4)
                    .map((item) => {
                        return <CollectionItem key={item.id} item={item} />
                    })
                }
            </div>
        </div>
    )
}

export default CollectionPreview
