import React from 'react'
import { Button, Carousel, Container } from 'react-bootstrap'
import slide1 from '../images/slide1.jpg'
import slide2 from '../images/slide2.jpg'
import slide3 from '../images/slide3.jpg'
import slide4 from '../images/slide4.jpg'
import "./HeroContent.css"

const HeroContent = () => {
    return (
        <Container className='hero__container'>
            <Carousel>
                <Carousel.Item className="w-100">
                    <img
                        className="d-block w-100"
                        src={slide4}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>tu departamento, tu espacio, tu mundo.</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="w-100">
                    <img
                        className="d-block w-100"
                        src={slide2}
                        // style={{ height: 500 }}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>proyectos</h3>
                        <p>Descubre</p>
                        <button className="btn btn-primary mb-3">- Ver Más -</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="w-100">
                    <img
                        className="d-block w-100"
                        src={slide3}
                        // style={{ height: 100 }}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Asesoría</h3>
                        <p>
                            Toda la información que necesitas antes y después de la compra de tu departamento.
                            Nuestros ejecutivos estarán atentos a tu requerimiento.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="w-100">
                    <img
                        className="d-block w-100"
                        src={slide1}
                        // style={{ height: 100 }}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>inversionistas</h3>
                        <p>
                            Desarrollamos proyectos donde el emplazamiento es un atributo principal. Ubicaciones de excelente conectividad, cercanas a metro, que te aseguran una alta plusvalía y condiciones de arriendo.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default HeroContent