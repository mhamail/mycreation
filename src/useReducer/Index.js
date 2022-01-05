
import React from 'react';
import AdvTodoMain from './TodoListAdv/AdvTodoMain'
import { Provider } from 'react-redux';
import store from './redux/store';

const UserReducerComplete=()=>{
    return(
      <Provider store={store}>
      <AdvTodoMain /> 
      </Provider>
     
);}
  export default UserReducerComplete;