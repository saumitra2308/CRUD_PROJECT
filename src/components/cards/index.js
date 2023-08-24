import React, { useState } from 'react'
import Modal from '../modalBox'


const Cards = (props) => {
    const localStorageData = JSON.parse(localStorage.getItem('userData'))
    const[id,setId] = useState(null)
    const [modal,setModal] = useState(false)
   
    return (
        <>
        {modal && <Modal hideModal={()=>setModal(false)} id={id} />}
        <div className="card flex flex-row col-sm-8 my-2">
            <div className="card-body">
                <h5 className="card-title">@ {props.userName}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Name : {props.fullName}</h6>
                <p className="card-text">Mobile : {props.mobile}</p>
                <p className="card-text">Location : {props.city}</p>

            </div>
            <div className='flex mt-3 px-2'>
                <button className='btn btn-outline-secondary' style={{ marginRight: '4px' }} onClick={()=>{setId(props.id);setModal(true)}}>Update</button>
                <button className='btn btn-outline-danger' onClick={props.handleDelete}>Delete</button>
            </div>
     

        </div>
        </>
    )
}
export default Cards