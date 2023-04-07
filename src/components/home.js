import React from "react";
import styled from "styled-components";
import Section from "./section";

const Container = styled.div`
	height: 100vh;
	overflow: hidden;
`;

function Home() {
	return (
		<Container>
			<Section />
		</Container>
	);
}

export default Home;
