import React, { useEffect, useState } from 'react'
import { addTodo, deleteTodo, removeTodo } from '../redux/data/action'
import { useSelector, useDispatch } from 'react-redux'

import './Todo.css'
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin2Line } from 'react-icons/ri';


const AdvTodoMain = () => {
    const [inputValue, setInputValue] = useState('');
    const list = useSelector(state => state.todoReducers.list);
    const dispatch = useDispatch();

    const itemEvent = (event) => {
        setInputValue(event.target.value);
    }

    return <>
        <div className='gridder'>
            <div className='mainDiv p-5'>
                <div className="d-flex">
                    <input type='text' placeholder='Add a item' onChange={itemEvent} value={inputValue} />
                    <button className="btn btn-warning ms-3 btn-sm" onClick={() => dispatch(addTodo(inputValue),
                        setInputValue('')
                    )}>Add</button>
                </div>
                <div className="List">
                    <ol className="order">
                        {list.map((elem) => {
                            return <li key={elem.id} className="d-flex justify-content-between">
                                {elem.data}
                                <span className="ps-3">
                                    <FaRegEdit className="font" />
                                    <RiDeleteBin2Line className="font" onClick={()=>dispatch(deleteTodo(elem.id))}/>
                                </span>
                                </li>
                                })}

                            
                    </ol>
                </div>
                <button className="button btn btn-danger btn-sm" onClick={()=>dispatch(removeTodo())}>Delete All</button>
            </div>
        </div>
    </>
}
export default AdvTodoMain;