import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './Meal.css'

export const Meal = () => {
  const Navigate = useNavigate();
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [ingredient, setIngredients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );

        const mealData = response.data.meals[0]; // single meal object
        setMeal(mealData);

        const ingList = [];
        for (let i = 1; i <= 20; i++) {
          const ing = mealData[`strIngredient${i}`];
          const measure = mealData[`strMeasure${i}`];

          if (ing && ing.trim() !== '') {
            ingList.push(`${ing} - ${measure}`);
          }
        }

        setIngredients(ingList);
      } catch (error) {
        console.error('Error fetching meal:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!meal) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container1">
      <button className='btn' onClick={() => {
        Navigate('/')
      }}>Go back</button>
      <div className="image">
        <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '100%', borderRadius: '5px' }} />
      </div>

      <div className="meal-name">
        <h3>{meal.strMeal}</h3>
      </div>

      <div className="instructions">
        <p>{meal.strInstructions}</p>
      </div>

      <div className="ingridients">
        <ul>
          {ingredient.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
