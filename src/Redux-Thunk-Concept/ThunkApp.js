import React from 'react'
import FakeApi from './component/FakeApi'
import { Provider } from 'react-redux';
import store from './redux/store';

const ThunkApp = () => {
    return (
        <Provider store={store}>
            <FakeApi/>
            </Provider>
    )
}

export default ThunkApp
