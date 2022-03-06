const NavebarLink = ({name, link, active}) => {
	return (
		<>
			<a className={`font-rubik text-sm px-6 py-3 rounded-full hover:bg-[#2874A6] ${active && 'bg-[#2874A6] hover:bg-[#308ECB]'}`} href={link}>
				{name}
			</a>
		</>
	)
}

export default NavebarLink