import React from 'react'
import './collection-item.style.scss';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component'
import { AddItem } from '../../redux/cart/cart.actions';


const CollectionItem = ({ item, AddItem }) => {

    const { name, price, imageUrl } = item;

    return (
        <div className="collection-item">
            <div className="image"
                style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton inverted onClick={() => AddItem(item)}>Add To Cart</CustomButton>
        </div>
    )
};


const mapDispatchToProps = dispatch => ({
    AddItem: item => dispatch(AddItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);