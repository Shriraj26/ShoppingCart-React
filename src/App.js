import React from 'react';

import CartContainer from "./CartContainer";
import Navbar from "./Navbar";

class App extends React.Component {
	
	constructor(){
		super();
		this.state = {
			products : [
				{
					id:1,
					qty: 1,
					price: 100,
					title: "Laptop",
					img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80'
				},
				{	
					id:2,
					qty: 1,
					price: 500,
					title: "Mobile",
					img: 'https://images.unsplash.com/photo-1521939094609-93aba1af40d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
				},
				{
					id:3,
					qty: 1,
					price: 500,
					title: "SmartWatch",
					img: 'https://images.unsplash.com/photo-1542541864-4abf21a55761?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=648&q=80'
				}
			]
		}
		
	}

	increaseQty = (product)=> {
		//Get the current products array
		const {products} = this.state;

		//Get the index of product that came from the item
		const index = products.indexOf(product);

		//increase the qty locally
		products[index].qty += 1;
		
		//pass the updated product to the state and render it too
		this.setState({
			products: products
		});

		//console.log(this.state);
	
	}

	decreaseQty = (product)=> {
		//Get the current products array
		const {products} = this.state;

		//Get the index of product that came from the item
		const index = products.indexOf(product);

		//decrease the qty locally
		if(products[index].qty > 0){
			products[index].qty -= 1;
			//pass the updated product to the state and render it too
			this.setState({
				products: products
			});
		}
		
	}
	//array.splice(index, 1);

	deleteQty = (product)=> {
		//Get the current products array
		const {products} = this.state;

		//Get the index of product that came from the item
		const index = products.indexOf(product);

		//delete the item
		products.splice(index, 1);
		
		this.setState({
			products: products
		});
	}

	//This gives us the count of total items in the cart!! This will get called from the 
	getItemsCount = ()=>{
		const {products} = this.state;

		let count = 0;

		products.forEach(element => {
			count += element.qty;	
		});

		//console.log(count);
		return count;
	}

	getTotalPrice = () => {
		const {products} = this.state;

		let cartTotal = 0;

		products.map((product)=> {
			cartTotal = cartTotal + product.qty*product.price;
		});

		//console.log(count);
		return cartTotal;
	}
	render(){
		const {products} = this.state;
		return (
			<div className="App">
			  <Navbar count={this.getItemsCount()}/>	
			  <h1>Cart</h1>
			  <CartContainer
				onIncreaseQty={this.increaseQty}
				onDecreaseQty={this.decreaseQty}
				onDeleteQty={this.deleteQty}
				products = {products}
			  />
			  <div style={{padding:10, fontSize:20}}>
				  TOTAL Price: {this.getTotalPrice()}
			  </div>
			</div>
		  );
	}
	
}

export default App;
