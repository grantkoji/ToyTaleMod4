
import React from 'react';
import ToyCard from './ToyCard'
//show difference between functional component 
//and class component here
const ToyContainer = (props) => {
  // toys={this.state.toys} removeToy={this.removeToy} addLike={this.addLike}
  // props.toys
  // props.removeToy
  // props.addLike

  // {props.toys.map(toy => <ToyCard key={toy.id} removeToy={props.removeToy} addLike={props.addLike} {...toy}  />)}
  // {props.toys.map(toy => <ToyCard key={toy.id} removeToy={props.removeToy} addLike={props.addLike} {...toy}  />)}

  return(
    <div id="toy-collection">
      {props.toys.map(toy => {
        return <ToyCard key={toy.id} removeToy={props.removeToy} addLike={props.addLike} name={toy.name} id={toy.id} image={toy.image} likes={toy.likes}  />})}
    </div>
  );
}

// {...toys} passing down same as name={toy.name} id={toy.id} image={toy.image} likes={toy.likes} 

export default ToyContainer;














// const {toys} = props
// return(
//   <div id="toy-collection">
//     {toys.map(toy => <ToyCard key={toy.id} {...toy} addLike={props.addLike} removeToy={props.removeToy}/>)}
//   </div>
// );
