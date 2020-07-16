import React from 'react';
// import { CartContext } from '../contexts/CartContext';

const Item = props => {
	return (
		// <CartContext.Consumer>
		// {({cart, removeItem}) => (
			<div className="shopping-cart_item">
				<img src={props.image} alt={`${props.title} book`} />

				<div>
					<h1>{props.title}</h1>
					<p>$ {props.price}</p>
					<button>Remove from cart</button>
					{/* onClick={() => props.removeItem(props)} */}
				</div>
			</div>
			// )}
		// </CartContext.Consumer>
	);
};

export default Item;
