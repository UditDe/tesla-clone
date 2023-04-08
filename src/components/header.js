import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
	return (
		<Container>
			<a href="https://www.tesla.com/">
				<img src="images/logo.svg" alt="" />
			</a>
			<Menu>
				<a href="#/">Model S</a>
				<a href="#/">Model 3</a>
				<a href="#/">Model X</a>
				<a href="#/">Model Y</a>
			</Menu>

			<RightMenu>
				<a href="#/">shop</a>
				<a href="#/">tesla account</a>
				<CustomMenu />
			</RightMenu>

			<BurgerNav>
				<li>
					<a href="#/">Existing Inventory</a>
				</li>
				<li>
					<a href="#/">Existing Inventory</a>
				</li>
				<li>
					<a href="#/">Existing Inventory</a>
				</li>
				<li>
					<a href="#/">Existing Inventory</a>
				</li>
				<li>
					<a href="#/">Existing Inventory</a>
				</li>
				<li>
					<a href="#/">Existing Inventory</a>
				</li>
				<li>
					<a href="#/">Existing Inventory</a>
				</li>
				<li>
					<a href="#/">Existing Inventory</a>
				</li>
			</BurgerNav>
		</Container>
	);
}

export default Header;

const Container = styled.div`
	min-height: 60px;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	top: 0; //div will stick to top
	left: 0; //div will stick to left
	right: 0; //div will expand to right
`;

const Menu = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;

	a {
		font-weight: 900;
		text-transform: uppercase;
		padding: 0 10px;
		flex-wrap: nowrap;
	}

	@media (max-width: 768px) {
		display: none;
	}
`;

const RightMenu = styled.div`
	display: flex;
	align-items: center;
	a {
		font-weight: 900;
		text-transform: uppercase;
		margin-right: 10px;
	}
`;

const CustomMenu = styled(MenuIcon)`
	cursor: pointer;
`;

const BurgerNav = styled.div``;
