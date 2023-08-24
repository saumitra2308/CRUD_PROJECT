import React, { useEffect, useState } from 'react'
import InputFields from '../inputFields'
import swal from 'sweetalert';



export const Form = () => {
    const [userName, setUserName] = useState("")
    const [fullName, setFullName] = useState("")
    const [mobile, setMobile] = useState("")
    const [city, setCity] = useState("")
    const [password, setPassword] = useState("")
    const localStorageData = JSON.parse(localStorage.getItem('userData'))
    const [userDataArray, setUserDataArray] = useState([])
    const[userValidation ,setUserValidation] = useState(false)

    const handleSubmit = async () => {
        if (localStorageData) {
            await userDataArray.push(...localStorageData, {
                id:Math.floor(Math.random() * 100),
                userName: userName,
                fullName: fullName,
                mobile: mobile,
                city: city,
                password: password
            })
        } else {
            userDataArray.push({
                id:Math.floor(Math.random() * 100),
                userName: userName,
                fullName: fullName,
                mobile: mobile,
                city: city,
                password: password
            })
        }
        await localStorage.setItem('userData', JSON.stringify(userDataArray))
        if (userName && fullName && password && mobile && city) {
            swal({
                title: "Good job!",
                text: "User created successfully",
                icon: "success",
                timer: 2000,
                showCancelButton: false,
                showConfirmButton: false
            }).then((res)=>
                setCity(""),
                setFullName(""),
                setMobile(""),
                setPassword(""),
                setUserName("")
            );
        }

    }
    useEffect(()=>{
if(localStorageData && localStorageData.length > 0){
  let validation =  localStorageData?.filter((items)=>{
    return items.userName.toLowerCase() === userName.toLowerCase()
  })
  if( validation && validation[0]?.userName === userName && userName.length > 3 ){
    setUserValidation(true)
  }else{
    setUserValidation(false)
  }
//   console.log(validation[0].userName)
}
    },[userName])
    return (
        <div className='d-grid'>
            <InputFields type={"text"} textGroup="Username" placeholder={"john2308"} value={userName} onChange={(e) => setUserName(e.target.value)} describeBy={"userName"} />
            {userValidation && <div className='mb-2 font-weight-bold text-danger'>Username already exists.</div>}
            <InputFields type={"text"} textGroup="Fullname" placeholder={"John Cook"} value={fullName} onChange={(e) => setFullName(e.target.value)} describeBy={"fullName"} />
            <InputFields type={"number"} textGroup="Mobile" placeholder={"8818860231"} value={mobile} onChange={(e) => setMobile(e.target.value)} describeBy={"mobileNumber"} />
            <InputFields type={"text"} textGroup="City" placeholder={"Indore"} value={city} onChange={(e) => setCity(e.target.value)} describeBy={"city"} />
            <InputFields type={"password"} textGroup="Password" placeholder={"*****"} value={password} onChange={(e) => setPassword(e.target.value)} describeBy={"password"} />
            <button type="button" onClick={handleSubmit} class={`${ userValidation ?'not-allowed disabled btn btn-primary w-full' :  'btn btn-primary w-full'}`}>Add user</button>
        </div>
    )
}
