import React from 'react'
import { Container } from 'react-bootstrap'
import './infoModule.css'
import img1 from './img/img1.jpg'

const InfoModule = () => {
    return (
        <div className='infoModule__container'>
            <div className='row'>
                <div className='col-mid-6'>
                    <div className='copy'>
                        <div className='text-label'>
                            Changes your bussines is more better
                        </div>
                        <div className='text-hero-hold'>
                            Grow up your Mind in the future
                        </div>
                        <div className='text-hero-regular'>
                            the are so many variations passages of management your mindset
                        </div>
                    </div>
                </div>
                <div className='cta'>
                    <button type='button' className='btn btn-primary'> Boton 1</button>
                    <button type="button" class="btn btn-secondary"> Boton 2 </button>
                </div>
                <div className='col-mid-6 side-img'>
                    <img
                        src={img1}
                    />
                </div>
            </div>
        </div>
    )
}

export default InfoModule