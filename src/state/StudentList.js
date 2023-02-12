import React, { Component } from "React";
import "./studentList.css";

class StudentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentList: [],
            from: {
                name:"",
                phone: "",
                email: ""
            },
            isValid:false,
            indexSelected: -1
        };
    }

    handleChane = (event) => {
        this.setState({
            form:{[event.target.name]:event.target.value}
        })
        this.checkInvalidForm();
    }
    handleSeleted = (studentSelected, index) => {
        this.setState({
            form: JSON.parse(JSON.stringify(studentSelected)),
            indexSelected: index
        })
    }
    checkInvalidForm = () => {
        const {name, phone, email} = this.state.from;
        const value = name && phone && email
        this.setState({
            isValid: value
        })
    }
    handleSubmit = () => {
        if(this.state.isValid) {
            const newList = this.state.studentList
            if(this.state.indexSelected > -1) {

            }
        }
    }

    render () {
        const { studentList, form } = this.state
        return (
          <div>
            <div>
                <h1>Student List</h1>
                <div>
                  <label>Name: </label>
                  <input name="name" value={this.state.from.name} onChange={this.handleChange} />
                </div>
                <div>
                  <label>Phone: </label>
                  <input type="number" name="phone" value={this.state.from.phone} onChange={this.handleChange} />
                </div>
                <div>
                  <label>Email: </label>
                  <input name="email" value={this.state.from.email} onChange={this.handleChange} />
                </div>
                <button onClick={this.handleSubmit}>Submit</button>
                <table>
                  <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.studentList.map(student =>{
                        <tr key={student.name}>
                            <td>{student.name}</td>
                            <td>{student.phome}</td>
                            <td>{student.email}</td>
                            <td>
                                <button className="rounded-1 text-bg-success" onClick={this.handleEdit}>Edit</button>
                                <button className="text-bg-danger rounded-1" onClick={this.handleDelete}>Delete</button>
                            </td>
                        </tr>
                    }) }
                  </tbody>
                </table>
            </div>
          </div>
        )
    }
    
}
