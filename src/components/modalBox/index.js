import React, { useContext, useEffect, useState } from 'react';
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import InputFields from '../inputFields';
import swal from 'sweetalert';
import { Context } from '../../context';



const Modal = ({ hideModal, id }) => {
    const [modal, setModal] = useState(true)
    const { refresh, setRefresh } = useContext(Context);
    const localStorageData = JSON.parse(localStorage.getItem('userData'))
    let filteredData = localStorageData && localStorageData.filter((items) => {
        return items.id === id
    })
    console.log(filteredData)
    const [userName, setUserName] = useState("")
    const [fullName, setFullName] = useState("")
    const [mobile, setMobile] = useState("")
    const [city, setCity] = useState("")

    useEffect(() => {
        if (filteredData) {
            filteredData.map((items) => {
                setCity(items.city);
                setFullName(items.fullName);
                setMobile(items.mobile);
                setUserName(items.userName)
            })
        }
    }, [])

    const handleUpdate = () => {
        const itemIdToUpdate = id;
        let storedObject = JSON.parse(localStorage.getItem("userData")) || {};
        const index = storedObject.findIndex(item => item.id === id);
        
        if (storedObject[index]) {
            debugger
          
            storedObject[index].userName = userName;
            storedObject[index].fullName = fullName;
            storedObject[index].mobile = mobile; 
            storedObject[index].city = city; 
            swal({
                title: "Good job!",
                text: "User updated successfully",
                icon: "success",
                timer: 2000,
                showCancelButton: false,
                showConfirmButton: false
            })
            setRefresh(true)
            hideModal(true)
        } else {
            console.log("Item not found in localStorage");
        }

        // Step 3: Store the updated object back in localStorage
        localStorage.setItem("userData", JSON.stringify(storedObject));
        

    }

    return (
        <PureModal
            header="Update User"
            footer={
                <div className='w-full d-flex justify-content-evenly'>
                    <button onClick={() => hideModal(true)} className={"btn btn-danger"}>Cancel</button>
                    <button className={"btn btn-primary"} onClick={handleUpdate}>Update</button>
                </div>
            }
            isOpen={modal}
            closeButton="close"
            closeButtonPosition="bottom"
            onClose={() => hideModal(true)}
        >
            <InputFields type={"text"} textGroup="Username" placeholder={"john2308"} value={userName} onChange={(e) => setUserName(e.target.value)} describeBy={"userName"} />
            <InputFields type={"text"} textGroup="Fullname" placeholder={"John Cook"} value={fullName} onChange={(e) => setFullName(e.target.value)} describeBy={"fullName"} />
            <InputFields type={"number"} textGroup="Mobile" placeholder={"8818860231"} value={mobile} onChange={(e) => setMobile(e.target.value)} describeBy={"mobileNumber"} />
            <InputFields type={"text"} textGroup="City" placeholder={"Indore"} value={city} onChange={(e) => setCity(e.target.value)} describeBy={"city"} />
        </PureModal>
    );
}

export default Modal;
