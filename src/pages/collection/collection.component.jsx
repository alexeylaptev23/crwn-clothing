import React from 'react';
import { connect } from 'react-redux';

import './collection.styles.scss';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = ({ collection: { title, items } }) => {
  return (
    <div className='collection-page'>
      <div className='title'>{title}</div>
      <div className='items'>
        {items.map(item => (
          <div className='collection-item'>
            <CollectionItem key={item.id} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
