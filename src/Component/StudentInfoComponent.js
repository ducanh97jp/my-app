import React from "react";

class StudentInfoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        {
          id: 1,
          name: "Nguyễn Vănn A",
          age: 30,
          address: "Hà Nội",
        },
        {
          id: 2,
          name: "Nguyễn Vănn B",
          age: 30,
          address: "Hà Nội",
        },
        {
          id: 3,
          name: "Nguyễn Vănn C",
          age: 30,
          address: "Hà Nội",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <table border="1">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
          {this.state.students.map((event) => {
            return (
              <tr>
                <td>{event.id}</td>
                <td>{event.name}</td>
                <td>{event.age}</td>
                <td>{event.address}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default StudentInfoComponent;
