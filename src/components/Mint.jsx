import Item from "./Item"
import RadioButton from "./RadioButton"

const baseURI = "http://127.0.0.1:8080/ipfs/QmazsSdKYk6hjb6hgmpXina9vPMai3gwe41dD1kRyxqbbE/";

const itemsList = [
	{name: "Blue #1", image: "blue_01.png"},
	{name: "Blue #2", image: "blue_02.png"},
	{name: "Blue #3", image: "blue_03.png"},
	{name: "Blue #4", image: "blue_04.png"},
	{name: "Green #1", image: "green_01.png"},
	{name: "Green #2", image: "green_02.png"},
	{name: "Green #3", image: "green_03.png"},
	{name: "Green #4", image: "green_04.png"},
	{name: "Orange #1", image: "orange_01.png"},
	{name: "Orange #2", image: "orange_02.png"},
	{name: "Orange #3", image: "orange_03.png"},
	{name: "Orange #4", image: "orange_04.png"},
	{name: "Gray #2", image: "gray_02.png"},
	{name: "Gray #3", image: "gray_03.png"},
	{name: "Gray #1", image: "gray_01.png"},
	{name: "Gray #4", image: "gray_04.png"},
	{name: "Purple #1", image: "purple_01.png"},
	{name: "Purple #2", image: "purple_02.png"},
	{name: "Red #1", image: "red_01.png"},
	{name: "Red #2", image: "red_02.png"},
]

const Mint = () => {
	return (
		<div className="flex h-full max-h-[calc(100%-80px)]">
			<div className="flex flex-col text-white gap-10 p-14 bg-[#212F3D]">
				<h1 className="text-3xl font-bold font-rubik">Dutch auction</h1>
				<div className="flex justify-start content-center p-6 rounded-lg bg-[#2C3E50]">
					<ul className="list-disc pl-6">
						<li>Vous devez etre whitelist pour pouvoir mint des Triangles</li>
						<li>Vous n’avez le droit qu’a 2 NFTs par comptre</li>
					</ul>
				</div>
				<div className="flex items-center gap-4">
					<div className="justify-center content-center p-3 px-4 font-semibold bg-[#2C3E50] rounded-lg">
						<h2>Amount</h2>
					</div>
					<div className="flex gap-2">
						{Array.from({length: 7}, (_, id) => {
							if (id === 0)
								return <RadioButton id={id + 1} active/>
							return <RadioButton id={id + 1}/>;
						})}
					</div>
				</div>
				<div className="flex gap-4 w-fit bg-[#2C3E50] rounded-full items-center pr-8">
					<button className="p-3 px-8 font-rubik text-sm bg-[#2874A6] rounded-full hover:bg-[#308ECB]">
						Mint
					</button>
					<p className=" px-4 text-white font-bold">0.01 ETH</p>
				</div>
			</div>
			<div className="flex p-14 flex-1 bg-[#273746]">
				<div className="flex flex-wrap h-fit max-h-full overflow-y-auto gap-8">
					{itemsList.map((item, id) => (
						<Item name={item.name} imgLink={baseURI + item.image} key={item.name} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Mint