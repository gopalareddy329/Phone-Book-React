import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";

const Editcontact=({ history })=>{
    const id=useParams().id

    const [data,changeData]=useState([null])
    useEffect(()=>{
        getData();
    },[id])
    let getData=async ()=>{
        if(id==="new") return
        await fetch(`http://localhost:8000/posts/${id}`).then(res=>res.json()).then(json=>changeData(json))
    }
    const handelUpdate=async ()=>{
        if(id==="new" && data){
            await fetch(`http://localhost:8000/posts/`,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        }else if(data){
        await fetch(`http://localhost:8000/posts/${id}`,{
            method:'PUT',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
    }
        
    }
    const handelDelete=async()=>{
        await fetch(`http://localhost:8000/posts/${id}`,{
            method:'DELETE',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
    }
    return (
        <div >
            <div className="form-data">
                <div className="form-tags">
                        <label>Name : </label><br/>
                        <input type="text"  onChange={e=>{ changeData({...data,'name':e.target.value});}} value={data.name} required/><br/>
                        <label>Email : </label><br/>
                        <input type="email"  onChange={e=>{ changeData({...data,'email':e.target.value});}} value={data.email} required/><br/>
                        <label>Number : </label><br/>
                        <input type="number"  onChange={e=>{ changeData({...data,'number':e.target.value});}} value={data.number} required/>
                        <Link to={"/"} onClick={handelUpdate}>Save</Link>
                        <Link to={"/"} onClick={handelDelete} >Delete</Link>
                </div>
            </div>
        </div>
    )
}

export default Editcontact