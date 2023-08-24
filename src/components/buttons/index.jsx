import React from 'react'
import { Link } from "react-router-dom";

const Button = (props) => {
    return (
        <div className='d-grid'>
            <Link to={props.path} className=" w-full btn btn-outline-primary my-2">{props.name} </Link>
        </div>
    )
}
export default Button
