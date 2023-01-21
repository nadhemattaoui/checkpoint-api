import React, { useEffect, useState } from 'react'
import axios  from 'axios'
function UserList() {
const [userList,setList]=useState()
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(response=>setList(response.data))
    })
  return (
    <div>
     {userList.map(e=><h1>{e.name}</h1>)}
    </div>
  )
}

export default UserList
