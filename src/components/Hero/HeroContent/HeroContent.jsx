import React from 'react'
import { Carousel, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./HeroContent.css"
import slide1 from '../images/slide1.jpg'
import slide2 from '../images/slide2.jpg'
import slide3 from '../images/slide3.jpg'
import slide4 from '../images/slide4.jpg'

const HeroContent = () => {
    return (
        <section>
            <Container className='container_hero'>
                <Carousel fade pause={false}>
                    <Carousel.Item className="w-100" interval={3000}>
                        <img
                            className="d-block w-100"
                            src={slide4}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>tu espacio</h3>
                            <p className='carousel__p'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                            <p className='carousel__p'>Descubre el proyecto a tu medida</p>
                            <Button className='mb-3' as={Link} to="/products" variant='success'>Ver más</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="w-100">
                        <img
                            className="d-block w-100"
                            src={slide3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Asesoría</h3>
                            <p className='carousel__p'>Te acompanamos en todo el proceso de compra.</p>
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
                            <p className='carousel__p'>
                                Te asesoramos cómo realizar tu inversión de manera exitosa.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </section>
    )
}

export default HeroContent