
const api_key = '5a5b50d815044ea19e98679624530982';

const base_url = 'https://api.spoonacular.com/';

const api_call = async (
    { method = 'GET',
        endpoint,
        queryString,
        textResponse = false }) => {
    try {
        const response = await fetch(`${base_url}${endpoint}?apiKey=${api_key}${queryString ? `&${queryString}` : ""}`, { method })
        if (response.status !== 200)
            return null;
        const data = textResponse ? await response.text() : await response.json();
        return data;
    }
    catch (err) {
        console.log(err);
        return null;
    }
};

export const fetch_random_recipes = () => api_call({ endpoint: 'recipes/random', queryString: 'number=50' });

export const fetch_recipe = (id) => api_call({ endpoint: `recipes/${id}/information` })

export const fetch_nutritionWidget = (id) => api_call({ endpoint: `recipes/${id}/nutritionWidget`, queryString: 'defaultCss=true', textResponse: true })

export const search_recipes = (input_value) => api_call({ endpoint: 'recipes/complexSearch', queryString: `query=${input_value}` })

export const fetch_similar_recipes = (id) => api_call({ endpoint: `recipes//${id}/similar`, queryString: 'number=4' });

export const connect_user = () => api_call({ endpoint: 'users/connect', method: 'POST' });

// export const meal_plan_week = (username, start-date) => api_call({endpoint: `mealplanner/${username}/week/${start-date}`})

export const fetch_ingredientsWidget = (id) => api_call({ endpoint: `recipes/${id}/ingredientWidget`, queryString: 'defaultCss=true', textResponse: true })

export const fetch_equipmentWidget = (id) => api_call({ endpoint: `recipes/${id}/equipmentWidget`, queryString: 'defaultCss=true', textResponse: true })
