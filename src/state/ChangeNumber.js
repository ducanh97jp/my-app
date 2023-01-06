import { Component } from "react";

class ChangeNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {number:0};
    }
    increase = () => {
        this.setState({number:this.state.number+1});
    }
    decrease = () => {
        this.setState({number:this.state.number-1});
    }

  render() {
    return (
      <div style={{textAlign: "center", padding: 30}}>
        <button className="bg-primary border-0 rounded-3 text-white" onClick={this.decrease}>Decrease</button>
        <span style={{ padding: 10 }}>{this.state.number}</span>
        <button className="bg-primary border-0 rounded-3 text-white" onClick={this.increase}>Increase</button>
      </div>
    )
  }
}

export default ChangeNumber;