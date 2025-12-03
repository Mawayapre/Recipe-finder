import React from 'react'
import './Home.css'
import { useState } from 'react'
import axios  from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

export const Home = () => {
    const Navigate = useNavigate();

    const [item, setItem] = useState('');
 
    const [ meals, setMeals ] = useState(null);

    const [check, setCheck] = useState(false)

   const fetchData = () => {
    setItem('')
    setMeals(null)

    console.log(item)

    try {
        const results = async () => {

        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`)
        console.log(response.data)
        setMeals(response.data.meals)

        if(response.data.meals === null){
            setCheck(true)
        }

        else(
            setCheck(false)
        )
    }
    results()


    } catch (error) {
        console.log(error)
    }

   }



  return (
    <div className="container">
        <div className="header">
            <div className="title">
                Find the best recipes
            </div>
            <div className="input">
                <input 
                value={item}
                onChange={(e)=>{
                    setItem(e.target.value)
                }}
                type="text" placeholder='Search for recipes...' />
                <button onClick={fetchData}>Search</button>
            </div>
            <div className="message">
                {check ? "Please enter a valid search term!" : ""}
            </div>
            <div className="popular">
                {meals ? "Popular recipes" : "Loading..."}
            </div>
            <div className="recipes">
                    {meals && meals.length > 0 && meals.map((meal) => {

                            return(
                                <div key={meal.idMeal} className="recipe"
                                onClick={() => {
                                    Navigate(`/Meal/${meal.idMeal}`)
                                }}
                                >
                                    <div className="image">
                                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                                    </div>
                                    <div className="info">
                                        <h3>{meal.strMeal}</h3>
                                        <p>{meal.strCategory}</p>
                                    </div>

                                </div>
                            )
                        })
                    }                                
            </div>
        </div>
    </div>
  )
}
