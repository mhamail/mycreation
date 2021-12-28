import React, { useReducer, useState } from "react";
import './IcrDec.css';

const reducer=(state,action)=>{
    if(action.type==='INCR'){
        state=state+1;
    }
    if(state>0&&action.type==='DECR'){
        state=state-1;
    }
    return state;
}
const UseReducer=()=>{
const[state,dispatch]=useReducer(reducer, 0);


const increase=()=>{
    dispatch({type:'INCR'});
}
const decrease=()=>{
    dispatch({type:'DECR'});
}
return<>
    <div className="gridder">
    <div className="data">
    <div className="number">{state}</div>
    <div className="flexdiv">
    <button type="button" onClick={increase} class="btn btn-lg btn-warning m-3">Increase</button>
    <button type="button" onClick={decrease} class="btn btn-lg btn-warning m-3">Decrease</button>
    </div>
    </div>
    </div>
</>
}
export default UseReducer;