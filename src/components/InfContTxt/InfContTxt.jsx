

const InfContTxt = ({title, subTitle, text}) => {
    return (
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
    )
}

export default InfContTxt