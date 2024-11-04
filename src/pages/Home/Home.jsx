import React from 'react';
import Banner from './Banner';
import Category from '../Category/Category';
import SlidePage from '../SlidePage/SlidePage';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <SlidePage></SlidePage>
        </div>
    );
};

export default Home;