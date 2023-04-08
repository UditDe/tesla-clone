import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
	const [burgerStatus, setBurgerStatus] = useState(false);
	const cars = useSelector(selectCars);

	return (
		<Container>
			<a href="https://www.tesla.com/">
				<img src="images/logo.svg" alt="" />
			</a>
			<Menu>
				{cars &&
					cars.map((car, index) => {
						return (
							<a href="#/" key={index}>
								{car}
							</a>
						);
					})}
			</Menu>

			<RightMenu>
				<a href="#/">shop</a>
				<a href="#/">tesla account</a>
				<CustomMenu onClick={() => setBurgerStatus(true)} />
			</RightMenu>

			<BurgerNav open={burgerStatus}>
				<CloseWrapper>
					<CustomClose onClick={() => setBurgerStatus(false)} />
				</CloseWrapper>

				<li>
					<a href="#/">Used Inventory</a>
				</li>
				<li>
					<a href="#/">Trade-In</a>
				</li>
				<li>
					<a href="#/">Cyber Truck</a>
				</li>
				<li>
					<a href="#/">Road Star</a>
				</li>
				{cars &&
					cars.map((car, index) => {
						return (
							<li key={index}>
								<a href="#/">{car}</a>
							</li>
						);
					})}
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
	z-index: 1;
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
		font-weight: 600;
		text-transform: uppercase;
		margin-right: 10px;
	}
`;

const CustomMenu = styled(MenuIcon)`
	cursor: pointer;
`;

const BurgerNav = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	background: white;
	z-index: 16;
	list-style: none;
	padding: 20px;
	text-align: start;
	li {
		padding: 15px 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);

		a {
			font-weight: 600;
		}
	}
	transform: ${(props) => (props.open ? "translateX(0)" : "translateX(100%)")};
	transition: transform 0.2s;
`;

const CustomClose = styled(CloseIcon)`
	cursor: pointer;
`;

const CloseWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;
