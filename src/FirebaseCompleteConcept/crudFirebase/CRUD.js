import React, { useState, useEffect } from 'react'
//style
import './crudFirebase.css'
//database
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { db } from '../Firebase.Util'


const CRUD = () => {
    //useStates
    //input set value to firebase
    const [data, setData] = useState({
        name: '',
        age: ''
    });
    //getting values and store in usestate
    const [user, setUsers] = useState();
    //Edit
    const [isEdit, setIsEdit] = useState(null);
    ////////////////////////////////////////
    //database
    const userCollectionRef = (collection(db, "users"))
    //
    //addDoc update firebase function
    const createUser = async () => {
        if (!data.name || !data.age) { }
        //update Doc
        else if (data && isEdit) {
            const userDoc = doc(db, 'users', isEdit.id)
            await updateDoc(userDoc, { ...data })
            setIsEdit(null)
        }
        //create Doc
        else {
            await addDoc(userCollectionRef, {
                ...data
            })
        }
        setData({ name: '', age: '' })
    }
    //
    // useEffect use to call data for first time
    useEffect(() => {
        //getDocs firebase function
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef)
            // console.log(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
            const arrangeData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            // console.log(arrangeData)
            setUsers(arrangeData)
        };
        return getUsers()
    }, [data])
    //

    const inputEvent = (event) => {
        // const name=event.target.name;
        // const value=event.target.value;
        const { name, value } = event.target;
        setData({ ...data, [name]: value })
    }
    //edit Doc
    const editUser = async (id, name, age) => {
        console.log(id + ' ' + age)
        setData({ name: name, age: age })
        setIsEdit({ id: id })
        // const newField={name:setData.name,age:setData.age}
        // return newField
        //await updateDoc(userDoc,newField);
    }
    const deleteUser = async (id)=>{
        const userDoc = doc(db, 'users', id)
        deleteDoc(userDoc)
        setData({}) //call because of use effect
    }
    return (
        <>
        <h1 className='text-center mt-5'>Firebase Complete</h1>
        <div className='firebaseGrid'>
            <div className="firebaseFlex ">
                <h3>Insert Data </h3>
                <input type='name' placeholder='Name...'
                    value={data.name}
                    name='name'
                    onChange={inputEvent} />

                <input type='Number' placeholder='Age...'
                    value={data.age}
                    name='age'
                    onChange={inputEvent}
                />
                <button onClick={createUser}>create User</button>

            </div>
            <div className="firebaseFlex">
                {user ? user.map((userData) => {
                    {/* console.log(userData) */ }
                    return <div key={userData.id}>
                    <div className="text-center">
                        <h6>Name: {userData.name}</h6>
                        <h6>Age: {userData.age}</h6>
                        </div>
                        <div className="d-flex">
                        <button className='m-1' onClick={() => editUser(userData.id)}>Edit User</button>
                        <button className='m-1' onClick={() => deleteUser(userData.id)}>Delete User</button>
                        </div>
                    </div>
                }) : ''}
            </div>
        </div>
        </>
    )
}

export default CRUD
