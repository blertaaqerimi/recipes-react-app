
import React, { useEffect, useState } from "react";
import { fetch_random_recipes } from '../api';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from "swiper/modules"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import CardRecipe from "./card-recipe";


const RandomRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchData = async () => {
    const savedRecipes = localStorage.getItem('popular');
    if (savedRecipes) {
      setRecipes(JSON.parse(savedRecipes))
      return;
    }

    const response = await fetch_random_recipes();
    const data = response?.recipes;
    if (data?.length) {
      setRecipes(data);
      localStorage.setItem('popular', JSON.stringify(data))
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (

    <Swiper style={{ width: '100%', paddingTop: '50px', paddingBottom: '50px' }}
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
    >
      {recipes.length > 0 && recipes.map((recipe, idx) => {
        return (
          <SwiperSlide style={{ backgroundPosition: 'center', backgroundSize: 'cover', width: '300px', height: '300px' }} key={idx}><CardRecipe recipe={recipe} /></SwiperSlide>
        )
      })}
    </Swiper>

  )
};

export default RandomRecipes;
