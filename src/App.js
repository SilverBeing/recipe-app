import { useState, useEffect } from "react";
import Recipe from "./components/recipes";
import "./App.css";

function App() {
	const [recipies, setRecipies] = useState([]);
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("chicken");

	const handleSearch = (e) => {
		setSearch(e.target.value);
	};
	const handleQuery = (e) => {
		e.preventDefault();
		setQuery(search);
		setSearch("");
	};

	useEffect(() => {
		getRecipies();
	}, [query]);

	const getRecipies = async () => {
		const response = await fetch(
			`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=8501e1f6&app_key=8d2d8145e07dfae29fed6c748dce73fa`
		);
		const data = await response.json();
		setRecipies(data.hits);
	};
	return (
		<div className="App">
			<form className="search" onSubmit={handleQuery}>
				<h1 className="logo">
					SIL<span className="special">VER</span>
					<span>Kit</span>CHEN
				</h1>
				<div className="input">
					<input
						type="text"
						className="search-bar"
						onChange={handleSearch}
						value={search}
					/>
					<button type="submit" className="search-button">
						Search
					</button>
				</div>
			</form>
			<div className="recipe-wrapper">
				{recipies.map((recipe) => {
					return (
						<Recipe
							alt={recipe.recipe.label}
							key={recipe.recipe.label}
							image={recipe.recipe.image}
							title={recipe.recipe.label}
							dishType={recipe.recipe.dishType}
							mealType={recipe.recipe.mealType}
							calories={recipe.recipe.calories}
							cuisineType={recipe.recipe.cuisineType}
							totalTime={recipe.recipe.totalTime}
							ingredients={recipe.recipe.ingredients}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
