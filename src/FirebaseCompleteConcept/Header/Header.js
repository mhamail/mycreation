import React from 'react'
//Route
import { Link } from 'react-router-dom'
//style
import './header.scss'
//firebase
import { auth } from '../Firebase.Util'
import {signOut } from 'firebase/auth'
const Header = ({currentUser}) => {
    return (
        <div className='headerss'>
            <div className="optionss">
                <Link className="link" to='/completefirebase'>Home</Link>
                {currentUser?
                <div className='link' onClick={async ()=>await signOut(auth)}>Signout</div>
                :
                <Link className="link" to='/completefirebase/signin'>Sign in</Link>
                }
                <Link className='link' to='/completefirebase/shop'>Shop</Link>
            </div>
        </div>
    )
}

export default Header
