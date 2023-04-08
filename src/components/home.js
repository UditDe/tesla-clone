import React from "react";
import styled from "styled-components";
import Section from "./section";

const Container = styled.div`
	height: 100vh;
`;

function Home() {
	return (
		<Container>
			<Section
				title="Model S"
				description="Order Online For Touch-Less delivery"
				backgroundImg="model-s.jpg"
				leftBtnText="Custom Order"
				rightBtnText="Existing Inventory"
			/>
			<Section
				title="Model Y"
				description="Order Online For Touch-Less delivery"
				backgroundImg="model-y.jpg"
				leftBtnText="Custom Order"
				rightBtnText="Existing Inventory"
			/>
			<Section
				title="Model 3"
				description="Order Online For Touch-Less delivery"
				backgroundImg="model-3.jpg"
				leftBtnText="Custom Order"
				rightBtnText="Existing Inventory"
			/>
			<Section
				title="Model X"
				description="Order Online For Touch-Less delivery"
				backgroundImg="model-x.jpg"
				leftBtnText="Custom Order"
				rightBtnText="Existing Inventory"
			/>
			<Section
				title="Lowest Cost solar panels"
				description="Money-Back guarantee"
				backgroundImg="solar-panel.jpg"
				leftBtnText="Order Now"
				rightBtnText="Learn More"
			/>
			<Section
				title="Solar For New Roofs"
				description="Solar roof cost less than a new Roof Plus Solar Panels"
				backgroundImg="solar-roof.jpg"
				leftBtnText="Order Now"
				rightBtnText="Learn More"
			/>
			<Section
				title="Accessories"
				description=""
				backgroundImg="accessories.jpg"
				leftBtnText="Shop Now"
				rightBtnText=""
			/>
		</Container>
	);
}

export default Home;
