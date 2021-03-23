import React from 'react';

//As this does not have state, we use function component here
const Navbar = (props) => {

	

	return(
		<div style={styles.nav}>
			<div style={styles.cartIconContainer}>
				<img style={styles.cartIcon} src="https://www.flaticon.com/svg/vstatic/svg/833/833314.svg?token=exp=1616490031~hmac=cb9e2a38324051ac9dd3727834efded0" alt=""/>
				<span style={styles.cartCount}>{props.count}</span>
			</div>
		</div>
	);
	

}

const styles = {
	cartIcon: {
		height: 32,
		marginRight: 20
	},
	nav: {
		height: 70,
		background: '#4267b2',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	cartIconContainer: {
		position: 'relative'
	},
	cartCount: {
		background: 'yellow',
		borderRadius: '50%',
		padding: '4px 8px',
		position: 'absolute',
		right: 0,
		top: -9
	}
}

export default Navbar;