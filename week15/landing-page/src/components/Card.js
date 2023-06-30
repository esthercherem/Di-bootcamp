import React from "react";

export const Card = (props) =>{
    return(
        <div className={props.className} >
            <div className="small-div">
                <i className={props.icon}></i>

                <img src={props.img} width="50" height="50" alt=''/>
            </div>

            <div className="big-div">
                <span className='div-title'>
                    {props.title}
                </span>
                <br/>
                <span>
                    {props.description}
                </span>
            </div>
        </div>
    )
}
