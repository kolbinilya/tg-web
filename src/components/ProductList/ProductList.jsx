import React from 'react';
import "./ProductList.css"

const ProductList = () => {
	const url = 'https://www.licious.in/blog/wp-content/uploads/2022/06/shutterstock_1339636625-1.jpg'

	return (
			<div>
				<img className='img' src={url} alt=""/>
				<img className='img' src={url} alt=""/>
				<img className='img' src={url} alt=""/>
				<img className='img' src={url} alt=""/>
				<img className='img' src={url} alt=""/>
			</div>
	);
};

export default ProductList;