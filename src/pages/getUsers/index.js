import React, {  useContext, useEffect, useState } from 'react'
import Cards from '../../components/cards'
import LandingPage from '../landingPage'
import swal from 'sweetalert';
import { Context } from '../../context';



const GetUsers = () => {
    const localStorageData = JSON.parse(localStorage.getItem('userData'))
    const [userData, setUserData] = useState(localStorageData)
    const { refresh, setRefresh } = useContext(Context);

    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this user",
            icon: "warning",
            buttons: [
                'No, cancel it!',
                'Yes, Delete it!'
            ],
            dangerMode: true,
        }).then(function (isConfirm) {
            if (isConfirm) {
                swal({
                    title: 'Deleted!',
                    text: 'User deleted successfully!',
                    icon: 'success',
                    timer: 2000

                }).then(function () {
                    const storedArray = JSON.parse(localStorage.getItem('userData')) || [];
                    const itemToRemove = id;
                    const newArray = storedArray.filter(item => item.id !== itemToRemove);
                    localStorage.setItem("userData", JSON.stringify(newArray));
                    console.log("Updated array:", newArray);
                    setUserData(newArray) // <--- submit form programmatically
                });
            } else {
                swal("Cancelled", "Your user is safe :)", "error");
            }
        })



    }
useEffect(()=>{
    let localStorageData_ = JSON.parse(localStorage.getItem('userData'))
    setUserData(localStorageData_)
    setRefresh(false)
},[refresh])
    return (
        <LandingPage>
            <div style={{ height: '80vh', overflowY: 'scroll' }}>
                {
                    userData ? userData.map((items) => {
                        return (

                            <Cards
                                userName={items.userName}
                                fullName={items.fullName}
                                mobile={items.mobile}
                                city={items.city}
                                id={items.id}
                                handleDelete={() => handleDelete(items.id)} />

                        )
                    }) :  <div>Loading...</div>
                }
                {userData === null || userData.length === 0 ? <div>No records found.</div> : ''}
            </div>
        </LandingPage>
    )
}
export default GetUsers
