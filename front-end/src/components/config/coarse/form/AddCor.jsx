import React, { useState } from 'react';
import { FaPowerOff } from "react-icons/fa";
import { toast } from "react-toastify";
import style from './add.module.scss';
const AddCor = ({setForm,data,setData}) => {
    const [value,setValue] = useState('');
    const submit = (e)=>{
        e.preventDefault()
        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },body:JSON.stringify({course:value})
        };
        let send = async ()=>{
            try {
                let res = await fetch(`/addcourse`, settings);
                let resData = await res.json();
                let status = await res.status;
                if(status === 200){
                    toast.success("course add successfully 👌")
                    let nd = [...data];
                    nd.push(resData)
                    setData(nd)
                    return setForm(false)
                }
            } catch (error) {
                toast.error("something is wrong 😥")
                console.log(error);
            }
        }
        send()
    }
  return (
    <div className={style.main}>
        <div className={style.border}>
        <div className={style.con}>
            <div className={style.head}>
                <h1>add a course</h1>
            </div>
            <div className={style.form}>
                <form onSubmit={submit}  method="post">
                    <div className={style.inputs}>
                        <span>course name</span>
                        <input type="text" value={value} onChange={(e)=>{setValue(e.target.value)}} required/>
                    </div>
                    <div className={style.btn}>
                        <button type='submit'>add course</button>
                    </div>
                </form>
            </div>
            <div className={style.cls}>
                <button onClick={()=>{setForm(false)}}><FaPowerOff/></button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AddCor