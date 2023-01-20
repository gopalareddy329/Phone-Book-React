import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContactList from "../component/contacts"

const Contacts = () =>{
    const [data,changeData]=useState([]);
    useEffect(()=>{getData();},[]);

    let getData =async () => {
        await fetch("http://localhost:8000/posts").then(res=>res.json()).then(json=>{changeData(json)})
    }
    return(
        <div>
            
                
                    <center><h1>Contacts <Link style={{"float":"right","marginRight":"2%"}} to={"/contact/new"}>Add</Link></h1></center>
                    
                        <div ></div>
                            {data.map((item)=>(
                            <ContactList contact={item} key={item.id}/>
                            ))}
                        </div>

    
        
    )

}

export default Contacts