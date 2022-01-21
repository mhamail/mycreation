import React from 'react'
import PostApi from './PostApi'
import UserApi from './UserApi'
import './hoc.scss'

const HocApp = () => {
    return (
        <div className='hocmain'>
        <UserApi />
            <PostApi name='Fake Api' email='fakeapi@gmail.com'/>
    
        </div>
    )
}

export default HocApp
