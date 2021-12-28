import React, { useState } from "react";
import './IcrDec.css';
const IcrDecMain = () => {
    const [num, setNum] = useState(0);
    const increase = () => {
        setNum(num + 1);
    }
    const decrease = () => {
        setNum((number) => {
            return number > 0 ? number - 1 : number = 0;
        });
    }
    return <>
        <div className="gridder">
            <div className="data">
                <div className="number">{num}</div>
                <div className="flexdiv">
                    <button type="button" onClick={increase} class="btn btn-lg btn-warning m-3">Increase</button>
                    <button type="button" onClick={decrease} class="btn btn-lg btn-warning m-3">Decrease</button>
                </div>
            </div>
        </div>
    </>
}
export default IcrDecMain;