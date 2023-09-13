import { useEffect, useState } from "react";
import { generate_meal_plan } from '../api'

const Meals = () => {

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
                                        <a href={meal.sourceUrl}>{meal.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </td>
                        <td>{responseData.week[day].nutrients.calories}</td>
                        <td>{responseData.week[day].nutrients.protein}</td>
                        <td>{responseData.week[day].nutrients.fat}</td>
                        <td>{responseData.week[day].nutrients.carbohydrates}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};

export default Meals;