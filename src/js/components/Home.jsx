import React from "react";
import Card from "./Card";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Hero from "./Hero";
const cardsData = [
	{
		id: 1,
		imageUrl: "https://placehold.co/500x325",
		title: "Card title",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
		buttonText: "Find Out More!",
	},
	{
		id: 2,
		imageUrl: "https://placehold.co/500x325",
		title: "Card title",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.",
		buttonText: "Find Out More!",
	},
	{
		id: 3,
		imageUrl: "https://placehold.co/500x325",
		title: "Card title",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
		buttonText: "Find Out More!",
	},
	{
		id: 4,
		imageUrl: "https://placehold.co/500x325",
		title: "Card title",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.",
		buttonText: "Find Out More!",
	},
];

const Home = () => {
	return (
		<>
			<NavBar />
			<div className="container">
				<Hero />
				<div className="my-5">
					<div className="row row-cols-1 row-cols-md-4 g-4">
						{cardsData.map((card) => (
							<div className="col" key={card.id}>
								<Card
									imageUrl={card.imageUrl}
									title={card.title}
									text={card.text}
									buttonText={card.buttonText}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
