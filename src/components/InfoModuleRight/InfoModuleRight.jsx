import InfoModuleRightCont from "../infoModuleRightCont/infoModuleRightCont"
import './infoModuleRight.css'


const InfoModuleRight = ( {mod} ) => {
    return (
        <div className='cr'>
            <InfoModuleRightCont title={mod.title} subTitle={mod.subTitle} text={mod.text} image={mod.image}/>
        </div>
    )
}

export default InfoModuleRight