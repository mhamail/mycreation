import React, { Component } from 'react'
import './todolist.css'
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin2Line } from 'react-icons/ri';

class ClassTodoList extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
            list: [],
            isEdit: null,
        }
    }
    itemEvent = (event) => {
        this.setState({ input: event.target.value })
    }
    addItems = () => {
        let { input, list, isEdit } = this.state;
        if (input === '') { }
        else if (input && isEdit) {
            const findEqual = this.state.list.map((elem) => {
                if (elem.id === isEdit) {
                    return { name: input }
                }
                return elem;
            })
            this.setState({ list: findEqual })
        }
        else {
            let allInputData = {
                id: new Date().getTime().toString(),
                name: input,
            }
            this.setState({ list: [...list, allInputData] })
            // this.state.list.push(this.state.input)    same work
            // this.setState(prevState => ({             same Work
            //     list: [...prevState.list, this.state.input]
            //   }))
            this.setState({ input: '' })
        }
    }
    editItem = (id) => {
        const findData = this.state.list.find((elem) => {
            return elem.id === id;
        })
        this.setState({ input: findData.name, isEdit: findData.id })
    }
    deleteItem = (id) => {
        const filterData = this.state.list.filter((elem) => {
            return elem.id !== id;
        })
        this.setState({ list: filterData })
    }

    render() {
        return (
            <>
             <h2>Class Component Project</h2>
                <div className="gridder">
                    <div className="mainDiv p-5">
                        <div className="d-flex">
                            <input type='text' placeholder="Add a Item" onChange={this.itemEvent} value={this.state.input} className="ps-3" />
                            {
                                this.state.isEdit !== null ?
                                    <button onClick={this.addItems} className="btn btn-warning ms-3 btn-sm">Edit</button>
                                    :
                                    <button onClick={this.addItems} className="btn btn-warning ms-3 btn-sm">Add</button>
                            }
                        </div>
                        <div className="List">
                            <ol className="order">
                                {this.state.list.map((elem) => {
                                    return <li key={elem.id} className="d-flex justify-content-between">
                                        {elem.name}
                                        <span className="ps-3">
                                            <FaRegEdit className="font" onClick={() => this.editItem(elem.id)} />
                                            <RiDeleteBin2Line className="font" onClick={() => this.deleteItem(elem.id)} />
                                        </span>
                                    </li>

                                })}
                            </ol>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ClassTodoList
