import { Container } from 'react-bootstrap'
import Divider from '../Divider/Divider'
import './DomusTeam.css'
import prof2 from './img/eduardo.jpg'
import prof3 from './img/pamela.jpg'

const DomusTeam = () => {
    return (
        <Container className='team text-center pt-5 pb-5'>
            <div className='container pb-3'>
                <h2 className='fw-bold'>Conoce al Equipo</h2>
                <Divider />
                <p className='text-white text-center m-auto'>
                    En Septiembre del año 2022, Domus SPA nace como una empresa de gestión inmobiliaria para ofrecer un servicio integral de corretaje y administración de propiedades en la Región Metropolitana, próximamente a expandirse a todo Chile. A su vez, contamos con la confianza de una selecta cartera de clientes e inversionistas.
                    El equipo de trabajo de Domus SPA está conformado por corredores profesionales que, a raíz de sus experiencias personales, han constatado que el éxito de cada ejecutivo, radica principalmente en la buena y rápida adaptación que logre en la zona elegida, y por ello, nuestro servicio inmobiliario y de reubicación se basa principalmente en brindar información honesta y oportuna, con calidez humana y amabilidad.
                    En Domus SPA, ayudamos a concretar sueños y objetivos de cada uno de nuestros clientes, quienes son nuestro activo más importante.
                </p>
            </div>
            <div className='row g-5 justify-content-evenly'>

                {/* test */}
                <div className='col-lg-6 d-flex align-items-stretch'>
                    <div className="card">
                        <div className="row g-0">
                            <div className="col-md-5">
                                <img src={prof3} className="card-img img-fluid rounded-start" alt="foto pamela duran" />
                            </div>
                            <div className="col-md-7">
                                <div className="card-body">
                                    <h5 className="card-title mb-3">Pamela Durán Letelier</h5>
                                    <p className="card-text text-muted">Contador Auditor y Corredora de propiedades fundadora de Domus SPA. Implementa su perfil económico y financiero, lo enfoca de manera perfecta y muy bien a la estrategia comercial arrojando un exitoso servicio integral personalizado y de alta calidad para nuestros clientes.</p>
                                    {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 d-flex align-items-stretch'>
                    <div className="card">
                        <div className="row g-0">
                            <div className="col-md-5">
                                <img src={prof2} className="card-img img-fluid rounded-start" alt="foto eduardo soto" />
                            </div>
                            <div className="col-md-7">
                                <div className="card-body">
                                    <h5 className="card-title mb-3">Eduardo Soto Méndez</h5>
                                    <p className="card-text text-muted">Ingeniero en Administración de empresas y corredor de propiedades fundador de Domus SPA. Certificado por la Cámara Nacional de Servicios Inmobiliarios, ACOP, implementa su perfil fuertemente comercial, y lo enfoca a la comunicación estratégica logrando imponer un sello personal en cada una de sus transacciones.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className='col-md-6 col-lg-3 d-flex align-items-stretch'>
                    <div className='card box bg-light mb-3 crdTm__card'>
                        <img
                            className='card-img-top crdTm__img'
                            src='https://placeimg.com/640/480/any'
                            alt='foto tarjeta'
                        />
                        <h4 className='p-3 text-light'>Pamela Durán Letelier.</h4>
                        <blockquote className='text-black-50 p-3'>Contador Auditor y Corredora de propiedades fundadora de Domus SPA.<br /><br /> Implementa su perfil económico y financiero, lo enfoca de manera perfecta y muy bien a la estrategia comercial arrojando un exitoso servicio integral personalizado y de alta calidad para nuestros clientes.</blockquote>
                    </div>
                </div>
                <div className='col-md-6 col-lg-3 d-flex align-items-stretch'>
                    <div className='card box bg-light mb-3'>
                        <img
                            className='card-img-top'
                            src='https://placeimg.com/640/480/any'
                            alt='foto tarjeta'
                        />
                        <h4 className='p-3 text-light'>Eduardo Soto Méndez</h4>
                        <blockquote className='text-black-50 p-3'>Ingeniero en Administración de empresas y corredor de propiedades fundador de Domus SPA.<br /><br />Certificado por la Cámara Nacional de Servicios Inmobiliarios, ACOP, implementa su perfil fuertemente comercial, y lo enfoca a la comunicación estratégica logrando imponer un sello personal en cada una de sus transacciones.</blockquote>
                    </div>
                </div> */}
                {/* <div className='col-md-6 col-lg-3 d-flex align-items-stretch'>
                    <div className='card box bg-light mb-3'>
                        <img
                            className='card-img-top'
                            src='https://placeimg.com/640/480/any'
                            alt='foto tarjeta'
                        />
                        <h4 className='p-3 text-light'>R2D2</h4>
                        <blockquote className='text-black-50 p-3'>0 0 0 1 1 0 1 1 0 1 0 0.</blockquote>
                    </div>
                </div> */}
            </div>
        </Container>
    )
}

export default DomusTeam