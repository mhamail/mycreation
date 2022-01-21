import React,{useState,useEffect} from 'react'
import './fakeapi.scss'
import { useSelector,useDispatch } from 'react-redux'
import { fakeapi, fetchapi } from '../redux/fakeapi/apiaction'

const FakeApi = () => {
    const dispatch = useDispatch();
    const user = useSelector(state=>state.apiReducer.data)

    useEffect(() => {
        dispatch(fetchapi())
        // before
    //    const getfakeapi=async ()=>{
    //        try{
    //        let url='https://jsonplaceholder.typicode.com/users'
    //        let res=await fetch(url)
    //        let convert=await res.json();
    //        dispatch(fakeapi(convert))
    //     }catch(e){
    //         console.log(e)
    //     }
    //    }
    //    return getfakeapi();
       
    },[])
    return (
        
        <div className='FakeApi'>
            {user.length<1?<h2>Loading...</h2>:user.map((elem)=>{
                return(
                    <h2 key={elem.id}>{elem.email}</h2>
                )
            })}
           
        </div>
    )
}

export default FakeApi
