// LOS COMPONENTES NO NECESITAN IMPORTAR REACT (luego de rafce)


    // const Title = (props) => {
    //     console.log(props)
    //     return (
    //         <div>
    //             <h2>{props.title}</h2>
    //             <h4>{props.subtitle}</h4>
    //         </div>
    //     )
    // }

// ***segundo destructuring
    // const Title = (props) => {
    //     const { title, subTitle } = props
    //     console.log(props)

    //     return (
    //         <div>
    //             <h2> {title} </h2>
    //             <h4> {subTitle} </h4>
    //         </div>
    //     )
    // }


    const Title = ({ title, subTitle }) => {
        return (
            <>
                <h2>{ title }</h2>
                <h4>{ subTitle }</h4>
            </>
        )
    }

export default Title