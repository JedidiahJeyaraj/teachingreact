import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Name from "./Name";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age : ""
    };

  }
  render() {
    return (
      <div className="App">
        <Name name="Joel" age={"12344"} />
        <Name name={"Joel"} age={"q2eqwe"}/>
        <Name name={"Joel"} age={"123vasas44"}/>
        <Name name={"Joel"} age={"12344"}/>
      </div>
    );
  }

  componentDidMount() {
    this.setState({name:this.props.name, age:"34567"});
  }
}

export default App;
