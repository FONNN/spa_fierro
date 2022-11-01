import InfoModuleContent from '../InfoModuleContent/InfoModuleContent'
import './infoModule.css'
// import img1 from './img/img1.jpg'

const InfoModule = ( {mod} ) => {

    return (
        <div className='cl'>
            <InfoModuleContent title={mod.title} subTitle={mod.subTitle} text={mod.text}/>
        </div>
    )
}

export default InfoModule