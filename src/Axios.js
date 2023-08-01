
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Axios() {
    const [userData,setData] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((Response)=>{
            console.log(Response)
            setData(Response.data)
        })
    },[])
  return (
    <div>
     <div>Axios tutorials</div> 
     {userData.map((data)=>{
        return(
            <div>{data.name}</div>
        )
     }) }
    </div>
  )
}
