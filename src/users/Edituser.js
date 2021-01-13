import React,{useEffect, useState} from "react"
import axios from "axios"
import {useHistory,useParams} from "react-router-dom"


const Edituser=()=>{
const history=useHistory();
const {id}=useParams();

const [user,setUser] = useState({
    name:"",
    username:"",
    email:"",
    phone:"",
});

const {name,username,email,phone}=user;

const OnInputChange=e=>{
    setUser({...user,[e.target.name]:e.target.value})
}
const onSubmit= async e=>{
    e.preventDefault()
    await axios.put(`http://localhost:3002/users/${id}`, user);
    history.push("/");
}

useEffect(()=>{
 loadUser() 
},[]  
);
const loadUser= async ()=>{
    const result = await axios.get(`http://localhost:3002/users/${id}`);
    setUser(result.data)
}
return(
       <div className="container">
        <form onSubmit={e=>onSubmit(e)}>
        <div className="form-group" >
        <input
        type="text"
        class="form-control form-control-lg mb-3"
        name="name"
        value={name}
        placeholder="Enter Name here"
        onChange={e=>OnInputChange(e)}
          />
        <input
        type="text"
        class="form-control form-control-lg mb-3"
        name="username"
        value={username}
        placeholder="Enter username"
        onChange={e => OnInputChange(e)}
         />
         <input
        type="text"
        class="form-control form-control-lg mb-3"
        name="email"
        value={email}
        placeholder="Enter Email here"
        onChange={e => OnInputChange(e)}
          />
          <input
        type="text"
        class="form-control form-control-lg mb-3"
        name="phone"
        value={phone}
        placeholder="Enter Phone Number here"
        onChange={e => OnInputChange(e)}
          />
         <button class="btn btn-info mb-3 col-4 gap-2 .mx-auto">Update User</button>
        </div>
        </form>
       </div>
       
    )
}

export default Edituser