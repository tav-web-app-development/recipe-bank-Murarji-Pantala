import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function Navbar() {
  return (
    <div className="navbar">
      <h1>Recipe App</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Recipes</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <p>&copy; 2024 Recipe App. All rights reserved.</p>
    </div>
  );
}

function Recipe({ recipe, onClick }) {
  return (
    <div className="recipe" onClick={() => onClick(recipe.title)}>
      <h2>{recipe.title}</h2>
      <strong>Description:</strong>
      <p>{recipe.description}</p>
      <strong>Ingredients:</strong>
      <p>{recipe.ingredients.join(', ')}</p>
      <strong>Directions:</strong>
      <p>{recipe.directions}</p>
    </div>
  );
}

function App() {
  const [recipes, setRecipes] = useState([]);
  const [clickedRecipe, setClickedRecipe] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.sampleapis.com/recipes/recipes');
      const data = await response.json();
      setRecipes(data.recipes);
    };

    fetchData();

    return () => {
      console.log('Unmounted');
    };
  }, []);

  useEffect(() => {
    if (clickedRecipe !== '') {
      document.title = clickedRecipe;
    }
  }, [clickedRecipe]);

  return (
    <div>
      <Navbar />
      <div className="recipe-container">
        {recipes.map(recipe => (
          <Recipe key={recipe.id} recipe={recipe} onClick={setClickedRecipe} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;

