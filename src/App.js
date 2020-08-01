import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component {

state = {
  displayForm: false,
  toys: []
}



handleClick = () => {
  let newBoolean = !this.state.displayForm
  this.setState({
    displayForm: newBoolean
  })
}

// handleClick = () => {
//   this.setState(prevState =>  {
//     return { displayForm: !prevState.displayForm }
// })
// }
// handleClick = () => {
//   this.setState(prevState => ({ displayForm: !prevState.displayForm }))
// }



// this.state.toys 
// this.setState({toys: newToys})
  componentDidMount(){
    this.fetchToys()
  }

  addNewToy = (newToy) => {
    this.setState({ toys: [...this.state.toys, newToy]})
  }

  fetchToys = () => {
    fetch(' http://localhost:3000/toys')
    .then(res=>res.json())
    .then(toyData => this.setState({toys: toyData}))
  }



addLike = (toyData) => {
  let newToys = this.state.toys.map(toy => {
    if (toy.id === toyData.id) {
      return {...toy, likes: toyData.likes}
  //     could also do return toyData 
  // {...instance, existingKeyImUpdating: newValueOfThatKey}
    } else {
      return toy
    }
  })
  this.setState({ toys: newToys}, ()=>console.log("Toys array", this.state.toys))
}

removeToy = (id) => {
  let newToys = this.state.toys.filter(toy => toy.id != id)
  this.setState({toys: newToys}, ()=>console.log("toys deleted", this.state.toys))
}



  render(){
    //console.log(this.state) GOES INSIDE HERE
    // {trueOrFalseThing ? thingIfTrue : thingIfFalse} have to put this in Object Literal {}
    return (
      <>
         <Header/>  
          { this.state.displayForm
            ? <ToyForm addNewToy={this.addNewToy}/>
            : null
          }
        <div className="buttonContainer">
        { this.state.displayForm
          ?  <button onClick={this.handleClick}> Hide Toy Form</button>
          : <button onClick={this.handleClick}> Add a Toy </button>
        }
        </div>
        <ToyContainer toys={this.state.toys} removeToy={this.removeToy} addLike={this.addLike}/>
      </>
    );
  }



}

export default App;
















// render(){
//   return (
//     <>
//       <Header/>
//       { this.state.display
//           ?
//         <ToyForm addNewToy={this.addNewToy}/>
//           :
//         null
//       }
//       <div className="buttonContainer">
//         <button onClick={this.handleClick}> Add a Toy </button>
//       </div>
//       <ToyContainer toys={this.state.toys}  addLike={this.addLike} removeToy={this.removeToy}/>
//     </>
//   );
// }

// }

// export default App;