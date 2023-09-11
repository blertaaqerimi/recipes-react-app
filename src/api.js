
const api_key = 'b53d6a953b064638895dda345d98c453';

const base_url = 'https://api.spoonacular.com/';

const api_call = async (endpoint, queryString, textResponse = false) => {
    try {
        const response = await fetch(`${base_url}${endpoint}?apiKey=${api_key}${queryString ? `&${queryString}` : ""}`)
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

export const fetch_random_recipes = () => api_call('recipes/random', 'number=50');

export const fetch_recipe = (id) => api_call(`recipes/${id}/information`)

export const fetch_nutritionWidget = (id) => api_call(`recipes/${id}/nutritionWidget`, 'defaultCss=true', true)

export const search_recipes = (input_value) => api_call('recipes/complexSearch', `query=${input_value}`)

export const fetch_similar_recipes = (id) => api_call(`recipes//${id}/similar`, 'number=4');