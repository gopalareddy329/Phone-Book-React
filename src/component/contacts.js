import React from "react";
import { Link } from "react-router-dom";


const ContactList=( {contact} )=>{
    return(
        <Link to={`contact/${contact.id}`}>
            <div className="each-contact">
                <h3>{contact.name}</h3>
                <span>{contact.email}</span>
                <p>{contact.number}</p>
            </div>
        </Link>
               
    )
}

export default ContactList