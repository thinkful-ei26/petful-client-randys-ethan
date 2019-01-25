import React from 'react';

export function Pet(props){
  console.log(props);
  return (<section>
      <header>
        <h1>{props.animal.data.name}</h1>
        <img src={props.animal.data.imageURL} alt={props.animal.data.imageDescription}></img>
      </header>
      <main>
        <dl>
          <dt>Sex: {props.animal.data.sex} </dt>
          <dt>Age: {props.animal.data.age}</dt>
          <dt>Breed: {props.animal.data.breed}</dt>
          <dt>Story: {props.animal.data.story}</dt>
        </dl>
        <button onClick={() => props.onAdoptPet()}>Adopt</button>
      </main>
    </section>);
}