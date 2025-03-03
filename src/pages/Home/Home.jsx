import React from 'react';
import CocktailsList from '../../components/CocktailsList';
import Block1 from '../Block-1/Block1';
import Block2 from '../Block-2/Block2';
const Home = () => {
    return (
        <div>
            <Block1 />
            <Block2/>
            <CocktailsList />
        </div>
    );
};

export default Home;
