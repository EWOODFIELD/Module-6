import React, { Component } from 'react'

export class HelloName extends Component {
    constructor() {
        super();
        this.state = {
        tayname: "world",
        }
    }
    render() {
    function nameChange(){
        this.setState({tayname: "Ethan"})
    }
    const tayname= "world"
    return (
      <div>
        <button onClick={() => nameChange}>Display Name</button>
        Hello {tayname}
    </div>
    )
  }
}

export default HelloName