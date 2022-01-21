
//https://firebase.google.com/docs/firestore/quickstart?authuser=0#web-version-9_2
import { initializeApp } from "firebase/app"
//database
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, writeBatch, doc } from "firebase/firestore";
//auth
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyAI9VF8EdNgeO4_8JrLh66VlHUcoaKQQNI",
  authDomain: "completefirebasereact.firebaseapp.com",
  projectId: "completefirebasereact",
  storageBucket: "completefirebasereact.appspot.com",
  messagingSenderId: "630762055154",
  appId: "1:630762055154:web:925250024889f335c3376b"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const auth = getAuth();

//signup 
export const signupfirebase = (email, password) => {
  return createUserWithEmailAndPassword(auth,email, password)
}
 //sign in
export const signin = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
}

// auth data store in database

export const createDatabase = async (userAuth) => {
  const authCollection = collection(db, 'authUser')
  if (!userAuth) return null;
  const { displayName, email } = userAuth;
  const createAt = new Date();
  try {
    await addDoc(authCollection,{
      displayName,
      email,
      createAt
    })
  } catch (e) { alert(`${e}`)}
}

export const CollectionSnapshotToMap=(collections)=>{
  const transformedCollection=collections.docs.map(doc=>{
    const{title,items}=doc.data()
    return{
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });
  // console.log(transformedCollection)
  return transformedCollection.reduce((accum,collection)=>{
    accum[collection.title.toLowerCase()]=collection;
    return accum;
  },{})
}

// Large Collection of data Store in firestore for first time   
export const addCollectionAndData=async(collectionKey, objectsToAdd)=>{
  const collectionRef=collection(db,collectionKey)

  const batch=writeBatch(db);

  objectsToAdd.forEach(obj=>{
    const newDocRef=doc(collectionRef)
   batch.set(newDocRef,obj)
  });
  // not un comment this we already stored this is for reference now
  // return await batch.commit()
}

