
const initializeData={
    data:[]
}

const apiReducer=(state=initializeData,action)=>{
    switch(action.type){
        case "GET_API":
            return{
                ...state,
                 data:  action.payload
                 
}            
    default: return state
    }
}
export default apiReducer