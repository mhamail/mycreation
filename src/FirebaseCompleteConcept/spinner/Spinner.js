import React from 'react'
import './Spinner.scss'
const Spinner =  WrappedComponent => {
    const spinner = ({ isLoading, ...otherProps }) => {
    return isLoading?(
        <div className='SpinnerOverlay '>
            <div className="SpinnerContainer"></div>
        </div>
    ): (<WrappedComponent {...otherProps}/>);
    }
    return spinner
}

export default Spinner
