import React, {Component} from "react";

class Hello extends Component {
    componentWillUnmount() {
        alert('The component is go to be unmounted.');
    }
  render() {
    return (
      <h1>Hello Word!</h1>
    )
  }
}
 export default Hello;