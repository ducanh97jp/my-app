import React, { Component } from "react";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[],
            item:""
        }
    }
    handleChange = (event) => {
        this.setState({
            item: event.target.value
        });
    };
    handleAddItem = () => {
        if (this.state.item) {
            this.setState({
                list:[...this.state.list,this.state.item]
            })}
    }

    render () {
        return <div className="text-center">
            <h2>Todo List</h2>
            <input className=" border border-1 rounded-1" type="text" onChange={this.handleChange}/>
            <button className="border border-1 rounded-1 bg-primary text-white" onClick={this.handleAddItem}>Save</button>
            <br/>
            <br/>
            <table className=" m-auto border border-1 w-300 text-start">
                <tr className="border border-1">
                    <th>Todo List</th>
                </tr>
                {this.state.list.map((item) => {
                    return <tr key={item} className="border border-1">
                        <td>- {item}</td>
                    </tr>
                })}
            </table>
            
        </div>
    }
}
export default TodoList