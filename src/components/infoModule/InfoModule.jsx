import React from 'react'
import { Container } from 'react-bootstrap'
import './infoModule.css'
import img1 from './img/img1.jpg'

const InfoModule = () => {
    return (
        // <section className='infoModule__container'>
        //     <div className='row'>
        //         <div className='col-mid-6'>
        //             <div className='copy'>
        //                 <div className='text-label'>
        //                     Changes your bussines is more better
        //                 </div>
        //                 <div className='text-hero-hold'>
        //                     Grow up your Mind in the future
        //                 </div>
        //                 <div className='text-hero-regular'>
        //                     the are so many variations passages of management your mindset
        //                 </div>
        //             </div>
        //         </div>
        //         <div className='cta'>
        //             <button type='button' className='btn btn-primary'> Boton 1</button>
        //             <button type="button" class="btn btn-success"> Boton 2 </button>
        //         </div>
        //         <div className='col-mid-6 side-img'>
        //             <img
        //                 src={img1}
        //             />
        //         </div>
        //     </div>
        // </section>

        <div className='cl'>
            <div className='container p-5'>
                <div className='row justify-content-between'>
                    <div className='col-lg-5'>
                        <div className='intro-excerpt'>
                            <h2>
                                Modern Interior
                                <span className='d-block'>Studio</span>
                            </h2>
                            <p>
                                Loremipsum idolorum Loremipsum idolorum Loremipsum idolorum Loremipsum idolorum Loremipsum idolorum Loremipsum idolorum Loremipsum idolorum.
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-7'>
                        <div className='cl-img-wrap'>
                            <img className='img-fluid' src={img1} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoModule