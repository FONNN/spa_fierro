import './infoModuleRightCont.css'

const InfoModuleRightCont = ({ title, subTitle, text, image }) => {
    return (
        <div className='container p-5'>
            <div className='row justify-content-between'>
                <div className='col-lg-7'>
                    <div className='cl-img-wrap'>
                        <img className='img-fluid' src={image} />
                    </div>
                </div>
                <div className='col-lg-5'>
                    <div className='intro-excerpt-r'>
                        <h2>
                            {title}
                            <span className='d-block'>{subTitle}</span>
                        </h2>
                        <p>
                            {text}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoModuleRightCont