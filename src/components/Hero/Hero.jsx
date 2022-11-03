import React from 'react'
import "./Hero.css"
import HeroContent from './HeroContent/HeroContent'
import InfoModule from '../infoModule/infoModule'
import InfoModuleRight from '../infoModuleRight/infoModuleRight'

const Hero = () => {

    const mod1 = {
        title: 'Nuestra',
        subTitle: 'Misión',
        text: 'Tenemos un compromiso con nuestros compradores de otorgar productos de altos estándares técnicos que brinden comodidad y calidad de vida a sus propietarios y residentes, eligiendo y respetando el carácter propio de cada barrio y los mejores emplazamientos de la ciudad.',
        image: 'https://cdn.pixabay.com/photo/2017/02/07/13/46/target-2045924_1280.jpg'
    }
    const mod2 = {
        title: 'Nuestra',
        subTitle: 'Visión',
        text: 'Nos proyectamos como una empresa responsable en el desarrollo de productos inmobiliarios de excelencia, emplazados en lugares de privilegio que aseguren una plusvalía creciente en el tiempo a sus propietarios.',
        image: 'https://cdn.pixabay.com/photo/2017/06/04/20/48/vision-2372177_1280.jpg'
    }
    const mod3 = {
        title: 'Nuestra',
        subTitle: 'Empresa',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus magnam optio molestias, suscipit placeat asperiores vel quis tempora ea consequatur. 3',
        image: 'https://cdn.pixabay.com/photo/2019/02/06/16/32/architect-3979490_1280.jpg'
    }

    return (
        <section className='section__hero'>
            <HeroContent />
            {/* <InfoModule mod={mod1} />
            <InfoModuleRight mod={mod2} /> */}
            <InfoModule mod={mod3} />
        </section>
    )
}

export default Hero