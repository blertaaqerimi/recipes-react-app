
const api_key = 'b52a1aba7fd94ef4a8ee1e0bde5dd605';

const base_url = 'https://api.spoonacular.com/';

export const fetch_random_recipes = async () => {
    try {
        const response = await fetch(`${base_url}recipes/random?apiKey=${api_key}&number=50`)
        if (response.status !==200)
        return null;
        const data = await response.json();
        return data;
    }
    catch (err) { 
        console.log(err)
        return null;
    }
}

export const fetch_recipe = async (id) => {

    try {
        const response = await fetch(`${base_url}recipes/${id}/information/?apiKey=${api_key}`)
        if (response.status !==200)
        return null;
        const data = await response.json();
        return data;
    }
    catch (err) { 
        console.log(err)
        return null;
    }
};


export const fetch_nutritionWidget = async (id) => {

    try {
        const response = await fetch(`${base_url}recipes/${id}/nutritionWidget/?apiKey=${api_key}&defaultCss=true`)
        if (response.status !==200)
        return null;
        const data = await response.text();
        return data;
    }
    catch (err) { 
        console.log(err)
        return null;
    }
}