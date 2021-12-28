import React, { useEffect, useState } from 'react'
import './Todo.css'
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin2Line } from 'react-icons/ri';

const gettingDataLocally = () => {
    const obj = localStorage.getItem("advTodoList");
    if (obj) {
        return JSON.parse(obj)
    }
    else {
        return [];
    }
}
const AdvTodoMain = () => {
    const [inputValue, setInputValue] = useState('');
    const [inputList, setInputList] = useState(gettingDataLocally());
    const [isEdit, setIsEdit] = useState(null);

    const itemEvent = (event) => {
        setInputValue(event.target.value);
    }

    const addItems = () => {
        if (inputValue === '') { }
        else if (inputValue && isEdit) {
            const findEqual = inputList.map((item) => {
                if (item.id === isEdit) {
                    return { name: inputValue }
                }
                return item;
            })
            setInputList(findEqual);
            setIsEdit(null)
            setInputValue('');
        }
        else {
            const allInputData = {
                id: new Date().getTime().toString(),
                name: inputValue,
            }
            setInputList([...inputList, allInputData]);
            setInputValue('');
        }
    }
    //Local Storage set
    useEffect(() => {
        const storeDataLocally = localStorage.setItem("advTodoList", JSON.stringify(inputList))
    }, [inputList])
    const deleteItem = (id) => {
        const filterData = inputList.filter((item) => {
            return item.id !== id
        })
        setInputList(filterData)
    }
    const editItem = (id) => {
        const findData = inputList.find((item) => {
            return item.id === id;
        })
        setIsEdit(findData.id);
        console.log(findData);
        setInputValue(findData.name)
    }
    const deleteAll = () => {
        setInputList([]);
    }
    return <>
        <div className='gridder'>
            <div className='mainDiv p-5'>
                <div className="d-flex">
                    <input type='text' placeholder='Add a item' onChange={itemEvent} value={inputValue} />
                    {
                        isEdit !== null ?
                            <button onClick={addItems} className="btn btn-warning ms-3 btn-sm">Edit</button>
                            :
                            <button onClick={addItems} className="btn btn-warning ms-3 btn-sm">Add</button>
                    }
                </div>
                <div className="List">
                    <ol className="order">
                        {inputList.map((item) => {
                            return <li key={item.id} className="d-flex justify-content-between">
                                {item.name}
                                <span className="ps-3">
                                    <FaRegEdit className="font" onClick={() => editItem(item.id)} />
                                    <RiDeleteBin2Line className="font" onClick={() => deleteItem(item.id)} />
                                </span>
                            </li>
                        })}
                    </ol>
                </div>
                <button onClick={deleteAll} className="button btn btn-danger btn-sm">Delete All</button>
            </div>
        </div>
    </>
}
export default AdvTodoMain;