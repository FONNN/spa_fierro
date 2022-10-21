import './DomusTeam.css'

const DomusTeam = () => {
    return (
        <div className='team text-center p-5'>
            <div className='container pb-3'>
                <h2 className='fw-bold'>Conoce al Equipo</h2>
                <p className='text-white mb-3'>Loremipsum idolorum Loremipsum idolorum Loremipsum idolorum Loremipsum idolorum Loremipsum idolorum Loremipsum idolorum Loremipsum idolorum </p>
            </div>
            <div className='row'>
                <div className='col-md-6 col-lg-3 d-flex align-items-stretch'>
                    <div className='card box bg-light mb-3'>
                        <img
                            className='card-img-top'
                            src='https://placeimg.com/640/480/any'
                            alt='foto tarjeta'
                        />
                        <h4 className='p-3 text-light'>Luke Skywalker</h4>
                        <blockquote className='text-black-50 p-3'>"Tu presunción es tu debilidad."</blockquote>
                    </div>
                </div>
                <div className='col-md-6 col-lg-3 d-flex align-items-stretch'>
                    <div className='card box bg-light mb-3'>
                        <img
                            className='card-img-top'
                            src='https://placeimg.com/640/480/any'
                            alt='foto tarjeta'
                        />
                        <h4 className='p-3 text-light'>Princess Leia</h4>
                        <blockquote className='text-black-50 p-3'>"Aren't you a little short for a stormtrooper?"</blockquote>
                    </div>
                </div>
                <div className='col-md-6 col-lg-3 d-flex align-items-stretch'>
                    <div className='card box bg-light mb-3'>
                        <img
                            className='card-img-top'
                            src='https://placeimg.com/640/480/any'
                            alt='foto tarjeta'
                        />
                        <h4 className='p-3 text-light'>Han Solo</h4>
                        <blockquote className='text-black-50 p-3'>"It's not wise to upset a Wookie."</blockquote>
                    </div>
                </div>
                <div className='col-md-6 col-lg-3 d-flex align-items-stretch'>
                    <div className='card box bg-light mb-3'>
                        <img
                            className='card-img-top'
                            src='https://placeimg.com/640/480/any'
                            alt='foto tarjeta'
                        />
                        <h4 className='p-3 text-light'>R2D2</h4>
                        <blockquote className='text-black-50 p-3'>0 0 0 1 1 0 1 1 0 1 0 0.</blockquote>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DomusTeam