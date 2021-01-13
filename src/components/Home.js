import React,{useState,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Home=()=>{
    const [users,setUsers]=useState([])

    useEffect(()=>{
       loadUsers()
    },[])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3002/users")
        console.log(result)
        setUsers(result.data.reverse())
    }
    const deleteUser=async id=>{
        await axios.delete(`http://localhost:3002/users/${id}`,users)
        loadUsers()

    }
    return (
        <div className="container">
        <table class="table table-hover border shadow">
  <thead>
    <tr class="thead-dark">
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col" colSpan="3"> Actions</th>
    </tr>
  </thead>
  <tbody>
    {
    users.map((user,index)=>(
    <tr>
      <th scope="row">{index+1}</th>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <Link to={`/viewuser/${user.id}`}><td><button class="btn btn-primary">View</button></td></Link>
      <Link to={`/edituser/${user.id}`} ><td><button class="btn btn-dark">Edit</button></td></Link>
      <td><button class="btn btn-danger" onClick={()=>deleteUser(user.id)}>delete</button></td>
      
    </tr>))
    }
  </tbody>
</table>
<Link to="/adduser">
<button class="btn btn-primary btn-outline-light col-4 .mx-auto">Add user</button>
</Link>
</div>
    )
}

export default Home