
const api_key = '136d75136cc84eaa89f3599452fff74f';

const base_url = 'https://api.spoonacular.com/';

const api_call = async ({
    method = 'GET',
    endpoint,
    queryString,
    textResponse = false,
    body = null
}) => {
    const options = { method };
    if (body) options.body = JSON.stringify(body);
    try {
        const response = await fetch(`${base_url}${endpoint}?apiKey=${api_key}${queryString ? `&${queryString}` : ""}`, options)
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

export const fetch_random_recipes = (number=10) => api_call({ endpoint: 'recipes/random', queryString: `number=${number}` });

export const fetch_recipe = (id) => api_call({ endpoint: `recipes/${id}/information` });

export const fetch_nutritionWidget = (id) => api_call({ endpoint: `recipes/${id}/nutritionWidget`, queryString: 'defaultCss=true', textResponse: true });

export const search_recipes = (queryString) => api_call({ endpoint: 'recipes/complexSearch', queryString });

export const fetch_similar_recipes = (id) => api_call({ endpoint: `recipes//${id}/similar`, queryString: 'number=4' });

export const fetch_ingredientsWidget = (id) => api_call({ endpoint: `recipes/${id}/ingredientWidget`, queryString: 'defaultCss=true', textResponse: true });

export const fetch_equipmentWidget = (id) => api_call({ endpoint: `recipes/${id}/equipmentWidget`, queryString: 'defaultCss=true', textResponse: true });

export const connect_user = (username) => api_call({ endpoint: 'users/connect', method: 'POST', body: { username } });

// export const meal_plan_week = (username, start_date) => api_call({ endpoint: `mealplanner/${username}/week/${start_date}` })

export const generate_meal_plan = () => api_call({endpoint: 'mealplanner/generate', queryString: 'timeFrame=week'})