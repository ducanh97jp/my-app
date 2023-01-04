import React from 'react'

class StudentInfoComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <table border={1}>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
            </tr>
            <tr>
                <td>{this.props.student.id}</td>
                <td>{this.props.student.name}</td>
                <td>{this.props.student.age}</td>
                <td>{this.props.student.address}</td>
            </tr>
        </table>
    </div>
    )
}
}

export default StudentInfoComponent