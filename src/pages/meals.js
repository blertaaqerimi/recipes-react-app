import { useEffect, useState } from "react";
import { generate_meal_plan } from '../api'
import { NavLink } from "react-router-dom";

const WeekMeals = () => {

    const [responseData, setResponseData] = useState({ week: {} });

    const mealPlan = async () => {
        const data = await generate_meal_plan();
        if (data) {
            setResponseData(data)
        }
        console.log(data)
    }

    useEffect(() => {
        mealPlan();

    }, [])


    const savedUser = localStorage.getItem('user');
    if (savedUser) {
        return (
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Meal</th>
                        <th>Calories</th>
                        <th>Protein</th>
                        <th>Fat</th>
                        <th>Carbohydrates</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(responseData.week).map((day, index) => (
                        <tr key={index}>
                            <td>{day}</td>
                            <td>
                                <ul>
                                    {responseData.week[day].meals.map((meal, mealIndex) => (
                                        <li key={mealIndex}>
                                            <a href={`/recipe/${meal.id}`}>{meal.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </td>
                            {["calories", "protein", "fat", "carbohydrates"]
                                .map((n, idx) => <td key={idx}>{responseData.week[day].nutrients[n]}</td>)}
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
    return (
        <div>
            <h2 className="text-center text-danger"><NavLink to='/connect'>Connect</NavLink> to see meal planner!</h2>
        </div>
    )
};

export default WeekMeals;