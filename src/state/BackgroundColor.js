import React from'react';

class BackgroundColor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "black"
        };
    }
    componentDidMount = () => {
        setTimeout(() => this.setState({ color: "pink" }), 5000)
    }
    render() {
        return (
            <div>
                <div style={{
                    backgroundColor: this.state.color,
                    width: 400,
                    height: 80,
                    paddingTop: 20,
                    margin: "auto"
                }}>
                    </div>
            </div>
        )
    }
}

export default BackgroundColor