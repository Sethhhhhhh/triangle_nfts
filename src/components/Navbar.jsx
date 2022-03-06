import React from 'react'
import NavebarLink from './NavebarLink'

export const Navbar = () => {
	return (
		<nav className='flex justify-center items-center p-4 bg-[#17202A] h-[80px]'>
			<div className="flex gap-6 text-white">
				<NavebarLink name="Mint" link="." active/>
				<NavebarLink name="About" link="/about" />
				<NavebarLink name="Roadmap" link="/roadmap" />
				<NavebarLink name="Team" link="team" />
				<NavebarLink name="FAQ" link="faq" />
			</div>
		</nav>
	)
}
