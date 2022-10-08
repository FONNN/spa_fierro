import React from 'react'
import "./Hero.css"
import HeroContent from './HeroContent/HeroContent'
import InfoModule from '../infoModule/infoModule'

const Hero = () => {
    return (
        <section className='section__hero mb-3 mt-3'>
                <HeroContent />
                <InfoModule />
        </section>
    )
}

export default Hero