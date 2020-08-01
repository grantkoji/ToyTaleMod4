import React, { Component } from 'react';

const initialState = {
  name:'',
  image: ''
}

//CONST AND LET VARIABLES can go here
class ToyForm extends Component {
  state=initialState

  inputHandler = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  //inputHandler covers both 
  // changeName and changeImage with [event.target.name] IF <input name="keyInState"/>
  //   SO <input name="name"/> for changeName
  //   <input name="image"/> for changeImage
  // changeName = (event) => {
  //   this.setState({name: event.target.value})
  // }

  // changeImage = (event) => {
  //   this.setState({image: event.target.value})
  // }


  handleSubmit = (event) => {
    event.preventDefault()

   
    fetch('http://localhost:3000/toys', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ 
        name: this.state.name,
        image: this.state.image,
        likes: 0
      })
    })
    .then(res=>res.json())
    .then(newToy => {
      this.props.addNewToy(newToy)
      console.log(newToy)
      this.setState(initialState)
    })
  }
  //const and let variables CANNOT GO HERE 
  
  render() {
    console.log(this.state)
    //const and let variables can go here
    // 3 examples:
    // In a class for state:
    // const {name} = this.state => replaces this.state.name
    // In a class for props:
    // const {name} =this.props => replaces this.props.name
    // In a functional component for props
    // const {name} = props => replaces props.name 
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleSubmit}>
          <h3>Create a toy!</h3>
          <input type="text" placeholder="Enter a toy's name..." name="name" onChange={(event) => this.inputHandler(event)} value={this.state.name} className="input-text" />
          <br/>
          <input type="text" placeholder="Enter a toy's image URL..." name="image" onChange={this.inputHandler} value={this.state.image} className="input-text" />
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;



// const initialState={
//   name: '',
//   image: ''
// }
// state=initialState

// handleInputChange = (event) => {
//   this.setState({ [event.target.name]: event.target.value })
// }

// handleSubmit = (event) => {
//   event.preventDefault()
//   fetch('http://localhost:3000/toys', {
//     method: 'POST',
//     headers: {
//       "Content-Type": 'application/json',
//       Accept: 'application/json'
//     },
//     body: JSON.stringify({ 
//       name: this.state.name,
//       image: this.state.image,
//       likes: 0
//      })
//   })
//   .then(res=>res.json())
//   .then(newToy => {
//     this.props.addNewToy(newToy)
//     console.log(newToy)
//     this.setState(initialState)
//   })
// }

// render() {
//   return (
//     <div className="container">
//       <form className="add-toy-form" onSubmit={this.handleSubmit}>
//         <h3>Create a toy!</h3>
//         <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text" value={this.state.name} onChange={this.handleInputChange}/>
//         <br/>
//         <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" value={this.state.image} onChange={this.handleInputChange}/>
//         <br/>
//         <input type="submit" name="submit" value="Create New Toy" className="submit"/>
//       </form>
//     </div>
//   );
// }







