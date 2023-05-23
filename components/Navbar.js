import React, { useState } from "react";
import { Button } from "./index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
	let Links = [
		{ name: "Home", link: "/" },
		{ name: "About", link: "#about" },
		{ name: "Contact", link: "#contact" },
		{ name: "Connect Wallet", link: "#connectwallet" },
	];

	let [open, setOpen] = useState(false);

	return (
		<div className='w-full fixed top-0 bg-[#B70F23] left-0'>
			<div className='md:flex items-center justify-between py-4 text-white px-7 md:px-10'>
				<div className='font-bold text-2xl cursor-pointer flex items-center'>
					Rehan Enterprises
				</div>
				<div
					onClick={() => setOpen(!open)}
					className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'
				>
					<FontAwesomeIcon icon={open ? faTimes : faBars} />
				</div>
				<ul
					className={`md:flex rounded md:items-center md:pb-0 pb-12 absolute md:static bg-[#B70F23] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${
						open ? "top-20" : "top-[-490px]"
					}`}
				>
					{Links.map((link) => (
						<li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
							<a
								href={link.link}
								className='rounded py-1 uppercase duration-300 px-2 hover:bg-[#D3152C]'
							>
								{link.name}
							</a>
						</li>
					))}
					{/* <Button>Get Started</Button> */}
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
