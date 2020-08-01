import React, { Component } from 'react';

class ToyCard extends Component {
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
      body: JSON.stringify({ likes })
    })
    .then(res=>res.json())
    .then(likesData => {
      this.props.addLike(likesData)
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
  
  render() {

  
    return (
      <div className="card">
        <h2>{this.props.beef}</h2>
        <img src={this.props.image} alt='toy-name-here' className="toy-avatar" />
        <p>Likes: {this.props.likes} </p>
        <button className="like-btn" onClick={this.clickLike}>Like {'<3'}</button>
        <button className="del-btn" onClick={this.donateToy}>Donate to GoodWill</button>
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

