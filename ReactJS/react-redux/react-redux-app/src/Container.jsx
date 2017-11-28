import React from 'react';
import {Header} from './Header';
import {MainSection} from './MainSection';
import {Footer} from './Footer';

//Container
export const Container = () => (
    <div className='container'>
        <Header/>
        <MainSection/>
        <Footer/>
    </div>
);