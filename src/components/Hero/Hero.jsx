import React from 'react'
import "./Hero.css"
import HeroContent from './HeroContent/HeroContent'
import InfoModule from '../infoModule/infoModule'

const Hero = () => {

    const mod1 = {
        title: 'Modern Art',
        subTitle: 'Studio',
        text: 'Lorem ipsum de numero 1'
    }
    const mod2 = {
        title: 'Old Geek Art',
        subTitle: 'Studio',
        text: 'Lorem ipsum de numero 2'
    }

    return (
        <section className='section__hero'>
            <HeroContent />
            <InfoModule mod={mod2}/>
            <InfoModule mod={mod1} />
        </section>
    )
}

export default Hero