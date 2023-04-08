import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

function Section(props) {
	return (
		<Wrap bgImg={props.backgroundImg}>
			<Fade bottom>
				<Itemtext>
					<h1>{props.title}</h1>
					<p>{props.description}</p>
				</Itemtext>
			</Fade>
			<Button>
				<Fade bottom>
					<ButtonGrp>
						<UpButton>{props.leftBtnText}</UpButton>
						{props.rightBtnText && <DownButton>{props.rightBtnText}</DownButton>}
					</ButtonGrp>
				</Fade>
				<DownArrow src="/images/down-arrow.svg" />
			</Button>
		</Wrap>
	);
}

export default Section;

// all styled componets goes here

const Wrap = styled.div`
	width: 100vw;
	height: 100vh;
	/* background-image: url("/images/model-s.jpg"); */
	background-image: ${(props) => `url("/images/${props.bgImg}")`};
	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column; //switches the functionalities of justify-content and align items
	justify-content: space-between; // so this is switched to vertical alingments
	align-items: center; // so this is switched to horizontal alingments
`;

const Itemtext = styled.div`
	padding-top: 15vh;
	text-align: center;
`;

const Button = styled.div``;

const ButtonGrp = styled.div`
	display: flex;
	margin-bottom: 30px;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const UpButton = styled.div`
	background-color: rgba(23, 26, 32, 0.8);
	height: 40px;
	width: 256px;
	color: white;
	display: flex;
	justify-content: center; //centers along horizontal line
	align-items: center; //centers along vertical line
	border-radius: 2rem;
	opacity: 0.8;
	text-transform: uppercase;
	font-size: 12px;
	margin: 8px;
	cursor: pointer;
`;

//this is the way to inherite the CSS of upbutton to the down button
const DownButton = styled(UpButton)`
	color: black;
	background-color: white;
	opacity: 0.65;
`;

const DownArrow = styled.img`
	height: 40px;
	overflow-x: hidden;
	animation: animateDown infinite 1.5s;
`;
