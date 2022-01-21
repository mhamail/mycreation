import React,{useState,useEffect} from 'react'
import './hoc.scss'
import Hoc from './Hoc'
const UserApi = ({data}) => {
    return (
        <div  className='userList'>
            {data.map((elem)=>{
               return <div className='list' key={elem.id}>
                   <h2>{elem.name}</h2>
                   <h2>{elem.email}</h2>
               </div> 
            })}
        </div>
    )
}

export default Hoc(UserApi,'https://jsonplaceholder.typicode.com/users')
