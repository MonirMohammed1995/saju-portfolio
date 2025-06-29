import React from 'react';
import Banner from '../components/Banner';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import ProjectPreview from '../components/ProjectPreview';
import Education from '../components/Education';
import Contacts from '../components/Contacts';

const Home = () => {
    return (
        <div id=''>
            <Banner></Banner>
            <Experience></Experience>
            <About></About>
            <Skills></Skills>
            <Education></Education>
            <ProjectPreview></ProjectPreview>
            <Contacts></Contacts>
        </div>
    );
};

export default Home;