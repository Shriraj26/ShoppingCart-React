//This is necessary for any react component, just include react!!
import React from 'react';

const CartItem = (props) => {

	
	
		
	const {title,price,  qty, img} = props.product;
	return (
		<div className="cart-item">
			<div className="left-block">
				<img style= {styles.image} src={img}></img>
			</div>
			<div className="right-block">
				<div style={ {fontSize:25} }>{title}</div>
				<div style={ {color:'#777'} } >Rs {price}</div>
				<div style={ {color:'#777'} }>Qty: {qty}</div>
				<div className="cart-item-actions">
					{/*This will have the item add remove or delete*/}
					<img 
						alt="increase" 
						className="action-icons" 
						src="https://www.flaticon.com/svg/vstatic/svg/1828/1828926.svg?token=exp=1616489994~hmac=c96456a29543757321fe86dc393a821d"
						onClick={()=> props.onIncreaseQty(props.product)}
						
					/>
					{/**The usage and explaination of binding is given in the excel sheet!1 */}
					<img 
						alt="decrease" 
						className="action-icons" 
						src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1616490014~hmac=1c7f621576274d3837224f4937d88346"
						onClick={()=> props.onDecreaseQty(props.product)}
					/>
					<img 
						alt="delete" 
						className="action-icons" 
						src="https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1616489728~hmac=006a1f58d9127f76a48f86a419763b5c"
						onClick={()=> props.onDeleteQty(props.product)}
					/>
				</div>
			</div>
		</div>
	)
	

}

const styles = {
	image:{
		height: 120,
		width: 120,
		borderRadius: 4,
		background:'#ccc'
	}
}

//u need to export it too so that it is accessible outside
export default CartItem;
