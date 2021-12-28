
import React, { useState, useEffect } from "react";
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin2Line } from 'react-icons/ri';
import './TodoList.css';

const getLocalData = () => {
    const obj = localStorage.getItem("todoList");
    if (obj) {
        return JSON.parse(obj);

    }
    else {
        return [];
    }
}
const TodoMain = () => {
    const [input, setInput] = useState('');
    const [list, setList] = useState(getLocalData());
    const [isEditItem, setIsEditItem] = useState(null);
    const [toggleSubmit, setToggleSubmit] = useState(false);
    const itemEvent = (event) => {
        const { value } = event.target;
        setInput(value);

    }
    const addItems = () => {
        if (!input) { }
        else if (input && toggleSubmit) {
            const getList = list.map((data, index) => {
                if (index === isEditItem) {
                    return  input 
                }
                return data
                
            })
            setList(getList);
            setInput('');
            setIsEditItem(null);
            setToggleSubmit(false)
        }
        else {
            // can also be use this object array if you want to make own id
            // const allInputData={
            //     id:new Date().getTime().toString(),
            //     name:input,
            // }
            setList([...list, input])
            setInput('')
        }

    }
    const deleteItem = (id) => {
        const updatedData = list.filter((elem, index) => {
            return index !== id;
        });
        setList(updatedData);
    }
    const editItem = (id) => {
        const editData = list.find((elem, index) => {
            return index === id;
        });
        setInput(editData);
        setIsEditItem(id);
        setToggleSubmit(true);
    }
    useEffect(() => {
        return localStorage.setItem("todoList", JSON.stringify(list));

    }, [list])
    return <>

        <div className="gridder">
            <div className="mainDiv p-5">
                <div className="d-flex">
                    <input type='text' placeholder="Add a Item" onChange={itemEvent} value={input} className="ps-3" />
                    {
                        toggleSubmit ?
                            <button onClick={addItems} className="btn btn-lg btn-warning ms-3 btn-sm">Edit</button>
                            :
                            <button onClick={addItems} className="btn btn-lg btn-warning ms-3 btn-sm">Add</button>
                    }
                </div>
                <div className="List">
                    <ol className="order">
                        {list.map((elem, index) => {
                            return (
                                <li key={index} className="d-flex justify-content-between">
                                    {elem}
                                    <span className="ps-3">
                                        <FaRegEdit className="font" onClick={() => editItem(index)} />
                                        <RiDeleteBin2Line className="font" onClick={() => deleteItem(index)} />
                                    </span>
                                </li>
                            );
                        })}

                    </ol>
                </div>
            </div>
        </div>
    </>
}
export default TodoMain;