
import Hero from "./Hero";
import Friends from "./Friends";

import FarGalaxyLoad from "./FarGalaxyLoad";

import React, {useContext, useEffect} from 'react';
import {characters, defaultHero} from "../utils/constants";
import {SWContext} from "../utils/context";
import {useParams} from "react-router-dom";


const Home = (props) => {

    const value = useContext(SWContext)
    const {hero} = useParams();
    let key = hero;
    useEffect(() => {
        if(!key || !characters.includes(key))
            key = defaultHero;
        value.setMainHero(key);
    }, [hero])

    return (
        <main className="clearfix">
            <Hero/>
            <Friends/>
            <FarGalaxyLoad/>
        </main>
    );
};

export default Home;

