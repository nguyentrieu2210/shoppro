import React from "react";
const Small = ({update, imgUrl})=>{
    const arrImg = [
        "images/img-1.jpg",
        "images/img-2.jpg",
        "images/img-3.jpg"
    ]
    return (
        <div id="small">
            {
                arrImg.map((value, index) =>
                <img 
                onClick={()=>update(value)} 
                // className={imgActive} 
                src={value}
                className= {value==imgUrl?"active":""}
                />
                )
            }                   
        </div>
    )
}
export default Small;