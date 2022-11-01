
import img1 from '../infoModule/img/img1.jpg'
import './InfoModuleContent.css'

const InfoModuleContent = ( {title, subTitle, text} ) => {

    return (
        <div className='container p-5'>
            <div className='row justify-content-between'>
                <div className='col-lg-5'>
                    <div className='intro-excerpt'>
                        <h2>
                            {title}
                            <span className='d-block'>{subTitle}</span>
                        </h2>
                        <p>
                            {text}
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
    )
}

export default InfoModuleContent