
import React,{useState,useEffect} from 'react'

const Hoc = (WrappedComponent,dataSource) => {
    const WithHoc=(props)=>{
        const[data,setData] = useState([]);
    
        useEffect(()=>{
            setTimeout(()=>{
            const fakeApi=async()=>{
                try{
                    let url=dataSource
                    let response=await fetch(url)
                    let gettData=await response.json();
                    let display=gettData.slice(0,3)
                    setData(display)
                }catch(error){
                    console.log(error)
                }
            }
            return fakeApi();
        },1500);
        },[])
    
        return (
            data.length < 1 ? <h1 className='hocloading'>Loading...</h1>
            : <WrappedComponent data={data} {...props}/>   
          
        )
    }
    return WithHoc
  
}

export default Hoc
