import React, { Component } from 'react';

class ExpandCollapse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand: false
        }
    }
    handle = () => {
        this.setState({
            isExpand:!this.state.isExpand
        });
    }
    render() {
        return (
            <div className="expand-collapse">
                <h2>Conditional Rendering</h2>
                {this.state.isExpand ? (
                    <div>
                        <button onClick={this.handle}> Đóng giới thiệu</button>
                        <br></br>
                        <br></br>
                        <p >
                            Trong ReactJs, đôi khi bạn có một số component và 
                            tùy thuộc vào từng điều kiện ví dụ như trạng thái của state, props,... 
                            mà bạn muốn hiển thị một hoặc một số component nào đó.
                            Khi đó bạn có thể sử dụng Conditional rendering để render ra component mà bạn mong muốn.
                        </p>
                    </div>
                ) : (
                    <button onClick={this.handle}> Xem giới thiệu</button>
                )}
            </div>
        )
    }
}

export default ExpandCollapse;