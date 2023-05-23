import React from "react";

const Button = (props) => {
	return (
		<div className='py-2 px-6 rounded md:ml-8 duration-300 text-[#B70F23] bg-white hover:bg-[#D72338] hover:text-white'>
			{props.children}
		</div>
	);
};

export default Button;
