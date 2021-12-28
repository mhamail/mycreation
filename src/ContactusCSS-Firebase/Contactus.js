import React,{useState} from 'react'
import './contactus.css'
import InputData from './ContactusApi'

const Contactus = () => {
    const[user,setUser]=useState({
        fname:'',
        lname:'',
        email:'',
        phone:'',
        message:''
    })
    const inputEvent=(event)=>{
        console.log(event.target.name)
        const name=event.target.name;
        const value=event.target.value;
         setUser({...user,[name]:value})
    }
    const{fname,lname,email,phone,message}=user;
    const postData=async(e)=>{
        e.preventDefault();
        if(fname&&lname&&email&&phone&&message){
        try{
        const res=await fetch(
            "https://reactform-123-default-rtdb.firebaseio.com/reactform.json",
            {
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({
                  'First Name':fname,
                  'Last Name':lname,
                  Email:email,
                  phone,   //key and value will be the same in this condition
                  Message:message,  
                })
            }
        );
      
        if(res){
            setUser({
                fname:'',
                lname:'',
                email:'',
                phone:'',
                message:''
            })
            alert('Data Successfully Uploaded')
        }
        
    }
    catch(error){console.log(error)}
}
else{
        alert('insert the data, data cannot be empty')
    }
       
    }
    return (
        <>        
            <section>
                <div className="container">
                    <h2>Glassmorphism Contact Us Form</h2>
                    <form method='POST' autocomplete="off"> 
                <div className="row100">
              
                            <div className="col">
                    <div className="inputBox ">
                            <input type='text' name='fname' value={user.fname} onChange={inputEvent} required='required' />
                            <span className='text'>First Name</span>
                            <span className='line'></span>
                            </div>
                    </div>
                    <div className="col">
                    <div className="inputBox">
                            <input type='text' name='lname' value={user.lname} onChange={inputEvent} required='required' />
                            <span className='text'>Last Name</span>
                            <span className='line'></span>
                            </div>
                    </div>
                       
                </div> 

                <div className="row100">
                            <div className="col">
                    <div className="inputBox">
                            <input type='text' name='email' value={user.email} onChange={inputEvent} required='required' />
                            <span className='text'>Email</span>
                            <span className='line'></span>
                            </div>
                    </div>
                    <div className="col">
                    <div className="inputBox ">
                            <input type='text' name='phone' value={user.phone} onChange={inputEvent} required='required' />
                            <span className='text'>Phone</span>
                            <span className='line'></span>
                            </div>
                    </div>
                       
                </div> 

                <div className="row100">
                            <div className="col">
                    <div className="inputBox textarea">
                            <input type='text' name='message' value={user.message} onChange={inputEvent} required='required' />
                            <span className='text'>Type Your Meassage Here...</span>
                            <span className='line'></span>
                            </div>
                    </div>
                       
                </div> 
                <div className="row100">
                    <div className="col">
                        <input type="submit" onClick={postData}/>
                    </div>
                </div>
                </form>
                </div>
            </section>
        </>
    )
}

export default Contactus;
