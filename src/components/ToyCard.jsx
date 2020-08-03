import React, { Component } from 'react';

class ToyCard extends Component {

  state={
    showFront: true
  }
//   this.clickLike
//  this.props.addLike
 
  clickLike = () => {
    let likes = this.props.likes + 1
    fetch(`http://localhost:3000/toys/${this.props.id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ likes: likes })
    })
    .then(res=>res.json())
    .then(likesData => {
      this.props.addLike(likesData.id)
    })
}

donateToy = () => {
  fetch(`http://localhost:3000/toys/${this.props.id}`, {
    method: 'DELETE',
    headers: {
      "Content-Type": 'application/json',
      Accept: 'application/json'
    }
  })
  .then(data => this.props.removeToy(this.props.id))
}

    renderFront = () => {
      return (
        <>
          <h2>{this.props.name}</h2>
          <img src={this.props.image} alt='toy-name-here' className="toy-avatar" />
           <p>Likes: {this.props.likes} </p>
        </>
      )
    }

    renderBack = () => {
      return (
        <>
        <button className="like-btn" onClick={this.clickLike}>Like {'<3'}</button>
        <button className="del-btn" onClick={this.donateToy}>Donate to GoodWill</button>
        </>
      )
    }

      // toggleFrontAndBack = () => {
    //   let newShowFront = !this.state.showFront
    //   this.setState({showFront: newShowFront})
   
    // }


    toggleFrontAndBack = () => {
      this.setState(prevState => ({showFront: !prevState.showFront}))
  
    }
  
  render() {

  
    return (
      <div className="card" onClick={this.toggleFrontAndBack}>
        {this.state.showFront
        ? this.renderFront()
        : this.renderBack()}
       
      </div>
    );
  
  }
}

export default ToyCard;









// render() {
//   const {name, image, likes, id} = this.props
//   return (
//     <div className="card">
//       <h2>{name}</h2>
//       <img src={image} alt={name} className="toy-avatar" />
//       <p>{likes} Likes </p>
//     
     
//     </div>
//   );
// }

