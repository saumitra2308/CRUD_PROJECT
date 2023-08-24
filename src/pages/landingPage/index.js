import React from 'react'
import Button from '../../components/buttons'
import { Form } from '../../components/Form'
import InputFields from '../../components/inputFields'

const LandingPage = ({children}) => {
    return (
        <div className='row mt-4'>
            <div className='col-sm-4 px-5'>
                <Button name="Add User" path="/addUser" />
                <Button name="Get User" path="/getUsers" />
                {/* <Button name="Update User"  />
                <Button name="Delete User"  /> */}
            </div>
            <div className='col-sm-2'>

            </div>
            <div className='col-sm-6 px-5'>
               {
                children
               }
            </div>
        </div>
    )
}

export default LandingPage
