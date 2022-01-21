
// export const fakeapi=(getData)=>{
//     return{
//         type: "GET_API",
//         payload:getData
       
//     }
// }

export const fetchapi=()=>async(dispatch)=>{
    let url='https://jsonplaceholder.typicode.com/users'
    let res=await fetch(url)
    let convert=await res.json();
    dispatch({ 
        type: "GET_API",
        payload:convert
    })
      
}
