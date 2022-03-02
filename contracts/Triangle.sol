// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "erc721a/contracts/ERC721A.sol";

contract Triangle is ERC721A, Ownable {
	using Strings 	for uint256;

	uint256 private _tokenID;

	uint256 constant MAX_SUPPLY = 20;
	uint256 constant MINT_PER_ADDRESS = 2;
	uint256 constant RESERVED_TOKEN = 2;

	string public baseTokenURI;
	string public baseTokenExtension;

	uint256 public price = 0.01 ether;

	bool public paused;
	bool public revealed;

	bytes32 public merkleRoot;

	mapping(address => uint256) tokensMintedByAddress;
	mapping(address => bool) whitelistedUsers;

	constructor(string memory unrevealedURI, string memory _name, string memory _symbol) ERC721A(_name, _symbol) {
		setBaseURI(unrevealedURI);
	}

	function mintedTokens() public view returns(uint256) {
		return _tokenID + RESERVED_TOKEN;
	}

	function mint(uint256 quantity) external payable {
		require(!paused, "Contract is paused");
		require(whitelistedUsers[msg.sender], "You're not whitelisted!");
		require(quantity > 0, "You must mint at least 1 NFT!");
		require(tokensMintedByAddress [msg.sender] + quantity <= MINT_PER_ADDRESS, "Max tokens per address exceeded!");
		require((_tokenID + RESERVED_TOKEN + quantity) <= MAX_SUPPLY, "Max public supply exceeded!");
		require(msg.value >= price * quantity, "Please send the correct amount of ETH!");

		_tokenID += quantity;
		_safeMint(msg.sender, quantity);
		tokensMintedByAddress[msg.sender] += quantity;
	}

	function gift(address _to, uint256 quantity) external onlyOwner {
		require((_tokenID + quantity) <= MAX_SUPPLY, "Max public supply exceeded!");
		require(quantity > 0, "You must mint at least 1 NFT!");

		_tokenID += quantity;
		_safeMint(_to, quantity);
	}

	function _baseURI() override internal view virtual returns (string memory) {
		return baseTokenURI;
	}

	function setBaseURI(string memory baseURI) public onlyOwner {
		baseTokenURI = baseURI;
	}

	function setPrice(uint256 _price) public onlyOwner {
		price = _price;
	}

	function toggleSale() private {
		paused = !paused;
	}

	function withdraw() public payable onlyOwner {
		(bool success, ) = payable(msg.sender).call{value: address(this).balance}("");
		require(success, "Withdrawal of funds failed");
	}

	/* Whitelist */

	function whitelist(address[] calldata _users) public onlyOwner {
		for (uint256 i = 0; i < _users.length; i++) {
			whitelistedUsers[_users[i]] = true;
		}
	}

	function unWhitelist(address[] calldata _users) public onlyOwner {
		for (uint256 i = 0; i < _users.length; i++) {
			whitelistedUsers[_users[i]] = false;
		}
	}

	function isWhitelisted(address user) public view returns (bool) {
		return whitelistedUsers[user];
	}
}

