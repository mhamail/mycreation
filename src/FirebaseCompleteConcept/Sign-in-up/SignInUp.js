import React, { useState } from 'react'
import './sign.css'
import { signupfirebase } from '../Firebase.Util'
//component
import SigninPage from './signin'
//firebase
import { addDoc, collection, setDoc, doc } from 'firebase/firestore'
import { db } from '../Firebase.Util'

const SignInUp = () => {
    const [signup, setSignup] = useState({
        userName: '',
        email: '',
        password: ''
    })

    // const signupCollectionRef = collection(db, 'signupAuth')

    const inputEvent = (event) => {
        const { name, value } = event.target;
        setSignup({ ...signup, [name]: value })
    }
    const handlerSubmit = async (event) => {
        event.preventDefault();
        try {
            await signupfirebase(signup.email, signup.password).then((ref) => {
                // database store set doc is to create own doc id we set auth uid
                return setDoc(doc(db, 'signupAuth', ref.user.uid), {
                    ...signup
                })
            });
            setSignup({ userName: '', email: '', password: '' })
        } catch (error) {
            console.log(error)
            alert(`${error}`)
        }
    }
    return (
        <div className='firebase-container'>

            <div className="FirebaseForm" >
                <SigninPage />

                {/* sign up */}
                <form className='firebase_sign' onSubmit={handlerSubmit}>
                    <h4>Sign Up</h4>

                    <input
                        type='name'
                        value={signup.userName}
                        name='userName'
                        onChange={inputEvent}
                        placeholder='name...'
                    />
                    <input
                        type='email'
                        value={signup.email}
                        name='email'
                        onChange={inputEvent}
                        placeholder='email...'
                    />
                    <input
                        type='password'
                        value={signup.password}
                        name='password'
                        onChange={inputEvent}
                        placeholder='password...'
                    />
                    <button >Signup</button>
                </form>
            </div>
        </div>
    )
}

export default SignInUp
