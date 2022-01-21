import React from 'react'
import './hoc.scss'
import Hoc from './Hoc'

const PostApi = ({data,name,email}) => {
    console.log(email)
    return (
        <div  className='userList'>
        <h4>title:{name}</h4>
        <h4>email:{email}</h4>
            {data.map((elem)=>{
               return <div className='list' key={elem.id}>
                   <h2>{elem.name}</h2>
                   <h2>{elem.email}</h2>
               </div> 
            })}
        </div>
    )
}

export default Hoc(PostApi,'https://jsonplaceholder.typicode.com/users')
