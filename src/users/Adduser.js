import React,{useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";


const Adduser=()=>{
let history =useHistory();

    const [user,setUser] = useState({
        name:"",
        username:"",
        email:"",
        phonenumber:"",
    });
    const {name,username,email,phonenumber}=user;
    const onInputChange = e => {
       setUser({...user,[e.target.name]:e.target.value})
    }
    const onSubmit = async e => {
        e.preventDefault()
        await axios.post("http://localhost:3002/users", user);
        history.push("/")
    }
    return(
        <div className="container">
        <form onSubmit = {e=>onSubmit(e)}>
        <div className="form-group" >
        <input 
            type="text"
            class="form-control form-control-lg mb-3"
            name="name"
            placeholder="Enter Your Name"
            value={name}
            onChange={e=>onInputChange(e)}
        
        />
        <input 
            type="text"
            class="form-control form-control-lg mb-3"
            name="username"
            placeholder="Enter Your User Name"
            value={username}
            onChange={e=>onInputChange(e)}
        
        />
        <input 
            type="text"
            class="form-control form-control-lg mb-3"
            name="email"
            placeholder="Enter Your email"
            value={email}
            onChange={e=>onInputChange(e)}
        
        />
        <input 
            type="text"
            class="form-control form-control-lg mb-3"
            name="phonenumber"
            placeholder="Enter Your Phone Number"
            value={phonenumber}
            onChange={e=>onInputChange(e)}
        
        />
        <button class="btn btn-primary mb-3 col-4 gap-2 .mx-auto">Add User</button>
        </div>
        </form>
        </div>
    )
}

export default Adduser