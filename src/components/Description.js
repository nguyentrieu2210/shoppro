import React from "react"

function Description(props) {

    const changeSttDescription = ()=>{
        props.changeSttDescription()
    }
    
    const txtDescrition = ()=>{
        return (
        <p onDoubleClick={changeSttDescription}>{props.txtDescription}</p>
        )
    }
    
    const frmDescription = ()=>{
        return (
            <textarea onBlur={changeSttDescription} value={props.txtDescription} />
        )
    }

    const showDescription = ()=>{
        if(props.sttDescription == true){
            return txtDescrition()
        }
        else{
            return frmDescription()
        }
    }
    
    return (
        <p>
            {showDescription()}
        </p>
    )
}

export default Description