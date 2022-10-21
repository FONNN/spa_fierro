import './Formulary_content.css'
import temporal from '../infoModule/img/img1.jpg'
import FormInner from '../FormInner/FormInner'

const Formulary_content = () => {
    return (
        <div className='container p-5'>
            <div className='row justify-content-between'>
                <div className='col-lg-5'>
                    <div className='title_text'>
                        <h2>
                            Comunícate con
                            <span className='d-block'>Nosotros</span>
                        </h2>
                        <p>
                            Loremipsum idolorum Loremipsum idolorum Loremipsum idolorum Loremipsum idolorum Loremipsum idolorum Loremipsum idolorum Loremipsum idolorum.
                        </p>
                    </div>
                </div>
                <div className='col-lg-7'>
                    <FormInner />
                </div>
            </div>
        </div>
    )
}

export default Formulary_content