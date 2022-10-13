import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import "./HeroContent.css"
import slide1 from '../images/slide1.jpg'
import slide2 from '../images/slide2.jpg'
import slide3 from '../images/slide3.jpg'
import slide4 from '../images/slide4.jpg'

const HeroContent = () => {
    return (
        <section>
            <Container className='section__container hero'>
                <Carousel>
                    <Carousel.Item className="w-100">
                        <img
                            className="d-block w-100"
                            src={slide4}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>tu espacio</h3>
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
                            <p>Descubre el proyecto a tu medida</p>
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
                                Te acompanamos en todo el proceso de compra.
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
                                Obtenemos la mejor plusvalia a tus proyectos.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </section>
    )
}

export default HeroContent