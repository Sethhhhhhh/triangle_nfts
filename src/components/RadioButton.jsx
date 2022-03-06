const RadioButton = ({id, active}) => {
	return (
		<div className={`flex font-rubik text-lg rounded-full border-2 p-4 h-[50px] w-[50px] items-center justify-center text-center cursor-pointer hover:border-none hover:bg-[#2874A6] ${active && 'bg-[#2874A6] border-none'}`}>
			<p>{id}</p>
		</div>
	)
}

export default RadioButton