import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import './collection-preview.style.scss'

const CollectionPreview = (props) => (
  <div className="collection-preview">
    <h3 className="title">{props.title}</h3>
    <div className='preview'>
      {props.items
        .filter((item, index) => index < 4)
        .map((item) => (
            <CollectionItem key={item.id} {...item}/>
        ))}
    </div>
  </div>
);

export default CollectionPreview;
