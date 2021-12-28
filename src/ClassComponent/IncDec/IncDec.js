import { Alert } from 'bootstrap';
import React, { Component } from 'react'
import './incdec.css'

class IncDec extends Component {
    
    constructor(){
        super();
        this.state={
            num:0
        }
    }
    increase(){
        this.setState({num:this.state.num+1})
    }
    decrease(){
        this.setState({num:this.state.num>0?this.state.num-1:0 })
    }
    componentDidMount(){ 
        //this event call after the render function and call only the first time, mostly use for api
        if(this.state.num===0){ 
            alert('Number should be 1 or greater ')
        }
    }
    componentDidUpdate(){  //event call when performing any action
        if(this.state.num===0){
            alert('please increase the number')
        }
    }
    render() {
        return (
            <>
            <h2>Class Component Project</h2>
                 <div className="gridder">
            <div className="data">
                <div className="number">{this.state.num}</div>
                <div className="flexdiv">
                    <button type="button" onClick={()=>this.increase()} class="btn btn-lg btn-warning m-3">Increase</button>
                    <button type="button" onClick={()=>this.decrease()} class="btn btn-lg btn-warning m-3">Decrease</button>
                </div>
            </div>
        </div>
            </>
        )
    }
}
export default IncDec;
