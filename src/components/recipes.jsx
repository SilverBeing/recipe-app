import React, { useState } from "react";

import "./recipes.css";

function Recipe(props) {
	const [show, setShow] = useState(false);
	const handleClick = (e) => {
		setShow((current) => !current);
	};

	const {
		title,
		alt,
		cuisineType,
		mealType,
		image,
		calories,
		totalTime,
		dishType,
		ingredients,
	} = props;
	return (
		<div className="recipe-container">
			<div className="title">
				<h1>{title}</h1>
			</div>
			<div className="description">
				<h3 className="type">{cuisineType}</h3>
				<h3 className="type">{dishType}</h3>
				<h3 className="type">{mealType}</h3>
			</div>
			<div className="image">
				<img src={image} alt={alt} />
			</div>
			<div className="other-info">
				<p>Calories: {calories}</p>
				<p>
					Time:
					{totalTime}
					<span>min</span>
				</p>
			</div>
			<div className="button">
				<button onClick={handleClick}>Ingredients</button>
			</div>
			{show && (
				<div className="ingredients">
					{ingredients.map((items) => {
						return (
							<ol key={items.food}>
								<li>{items.text}</li>
							</ol>
						);
					})}
				</div>
			)}
		</div>
	);
}

export default Recipe;
