import React from "react"

const Button = ({update1, update2, update3})=>{
    return (
        <p id="slide-num">
        <a onClick={update1} href="#">1</a> 
        <a onClick={update2} href="#">2</a>
        <a onClick={update3} href="#">3</a>
      </p>
    )
}
export default Button;