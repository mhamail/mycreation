import React,{useEffect,useState} from 'react'
//firebase
import { db } from '../Firebase.Util';
import { collection, onSnapshot, getDocs } from 'firebase/firestore';
import { CollectionSnapshotToMap } from '../Firebase.Util';
//component
import CollectionPreview from './CollectionPreview';
import Spinner from '../spinner/Spinner';

const CollectionsOverviewWithSpinner = Spinner(CollectionPreview);

const Shop = () => {
    const [updateCollection, setUpdateCollection] = useState(null)
    const [loading,setLoading] = useState(true)

    const shopdata = updateCollection?Object.keys(updateCollection).map((data) => updateCollection[data]):[]
     console.log(shopdata)
     
    useEffect(() => {
        const collectionRef = collection(db, "collection")
        // const getData = async () => {
        //     const data = await getDocs(collectionRef)
        //     const arrangeData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        //     console.log(arrangeData)
        // }
        // return getData()
        //--------  no diff b/w getDocs and onSnapShot  
        onSnapshot(collectionRef, async snapshot => {
            const collectionMap= CollectionSnapshotToMap(snapshot)
            //  console.log(collectionMap)
            setUpdateCollection(collectionMap)
            setLoading(false)
        })
    }, [] )
    return (
        <div>
       
            {shopdata.map((collection, index) => {
                return (
                    <CollectionsOverviewWithSpinner key={index} isLoading={loading} {...collection} />
                );
            })}
        </div>
    )
}

export default Shop
