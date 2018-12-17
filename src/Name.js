import React, { Component } from 'react';

class Name extends Component {

    render() {
        return (
            <div>
                <div>
                    Name : {this.props.name}
                </div>
                <div>
                Age : {this.props.age}
                </div>
            </div>
        );
    }
}

export default Name;