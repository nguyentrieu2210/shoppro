import React from "react"

function Title(props) {

    const setSttTitle = () => {
        props.changeSttTitle()
    }
    const setTxtTitle = (e)=>{
        props.changeTxtTitle(e.target.value)
    }
    const checkEnter = (e)=>{
        if(!props.sttTitle && e.keyCode === 13){
            setSttTitle()
        }
    }
    const txtTitle = () => {
        return (
            <h4 onDoubleClick={setSttTitle}>{props.txtTitle}</h4>
        )
    }
    const frmTitle = () => {
        return (
            <input
                id="txt"
                onBlur={setSttTitle}
                onKeyUp={checkEnter}
                onChange={setTxtTitle}
                type="text"
                value={props.txtTitle} />
        )
    }
    const showTitle = () => {
        if (props.sttTitle === true) {
            return txtTitle()
        }
        else {
            return frmTitle()
        }
    }

    React.useEffect(()=>{

        if(props.sttTitle === false){
            document.getElementById("txt").focus()
        }
    }, [props.sttTitle])


    return (
        <>
            {showTitle()}
        </>
    )
}

export default Title