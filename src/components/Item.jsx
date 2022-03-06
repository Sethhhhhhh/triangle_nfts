const Item = ({name, imgLink}) => {
	return (
		<div className="flex flex-col items-center rounded-lg drop-shadow-lg bg-[#212F3D] border-4 border-transparent hover:border-[#5DADE2]">
			<p className="py-3 text-white font-rubik text-sm">{name}</p>
			<img
				className="rounded-lg"
				width="128"
				height="128" 
				src={imgLink} 
				alt="nft" 
			/>
		</div>
	)
}

export default Item