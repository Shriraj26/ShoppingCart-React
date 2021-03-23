//This is necessary for any react component, just include react!!
import React from 'react';
import CartItem from './CartItem';

const CartContainer = (props) => {

	
	{/*getting the products array from the state */}
	const {products} = props; 
	return(
		<div className="cart-container">
			
			{/*We will loop on each and every product and then return the proper Component while also
			passing the data to each and every component */}
			{products.map( (product) => {
				
				return(
					<CartItem 
						product={product} 
						key={product.id}
						onIncreaseQty={props.onIncreaseQty}
						onDecreaseQty={props.onDecreaseQty}
						onDeleteQty={props.onDeleteQty}/>

					//Also we passed in key as a unique product id so that react can differentiate it better
				);
			})}
		</div>
	);
	

}


//u need to export it too so that it is accessible outside
export default CartContainer;
