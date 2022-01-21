import React,{useState} from 'react'
import { signin } from '../Firebase.Util'

const SigninPage = () => {
    const[login,setLogin]=useState({
        email:'',
        password:''
    })
 
  //sigin
    const inputEventLogin=(event)=>{
        const{name,value}=event.target;
        setLogin({...login,[name]:value})
    }
    const loginHandler = async (event) => { 
        event.preventDefault();
        try{
            await signin(login.email,login.password)
            setLogin({email:'',password:''})
        }catch(error){
            console.log(error)
            alert(`${error}`)
        }
        

    }
    return (
            <form className='firebase_sign' onSubmit={loginHandler} >
                    <h4>Log In</h4>
                    <input 
                    type='email'
                    name='email'
                    value={login.email} 
                    onChange={inputEventLogin}
                    placeholder='email...' 

                    />
                    <input 
                    type='password' 
                    name='password'
                    value={login.password} 
                    onChange={inputEventLogin}
                    placeholder='password...' 

                    />
                    <button >Login</button>
                </form>
    )
}

export default SigninPage
