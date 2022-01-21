import React, { useState, useEffect } from 'react'
//Route
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//component
import Header from './Header/Header';
import CRUD from './crudFirebase/CRUD';
import SignInUp from './Sign-in-up/SignInUp';
import Shop from './shopPage/Shop';
//firebase
import { auth } from './Firebase.Util'
import { createDatabase } from './Firebase.Util';
//style
import './AppIndex.scss'
//
import SHOP_DATA from './ShopData'
// storing api import 
import { addCollectionAndData } from './Firebase.Util';

const AppIndexFirebase = () => {

    const [user, setUser] = useState(null);

    //--- this section is for storing api into firestore
    const [shop, setShop] = useState(SHOP_DATA)
    const shopdata = Object.keys(shop).map((data) => shop[data])
    const collection = shopdata.map(({ title, items }) => ({ title, items }))
    // Diff b/w -- collection.forEach(obj=>{ console.log(obj)})
    //          --  console.log(collection)

    useEffect(() => {
        auth.onAuthStateChanged(userAuth => {
            // console.log(userAuth.uid)
            // const userRef= createDatabase(userAuth)
            setUser(userAuth)
        })

        //--- this section is for storing api into firestore
        addCollectionAndData('collection', collection)
    }, [user])

    return (

        <div className='firebaseComplete'>
            <Header currentUser={user} />
            <Routes>
                <Route path='/' element={!user ? <Navigate to="/completefirebase/signin" /> : <CRUD />} />
                <Route path='/signin' element={user ? <Navigate to="/completefirebase/" /> : <SignInUp />} />
                <Route path='/shop' element={<Shop collectionData={collection}/>}/>
                <Route path="*" element={<Navigate to="/completefirebase" />} />

            </Routes>
        </div>
    )
}
export default AppIndexFirebase
