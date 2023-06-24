import { useDispatch } from "react-redux"
const Control = () => {
    const dispatch = useDispatch();
    const getNumber = () => {
        dispatch({
            type:"GET NUMBER",
        });
    }
    const resetNumber = () => {
        dispatch({
            type: "RESET NUMBER",
        })
    }
    return (
        <div>
          <button onClick={getNumber} className="btn btn-dark">Get number</button>
          <button onClick={resetNumber} className="btn btn-dark">Reset</button>
        </div>
    )
}

export default Control