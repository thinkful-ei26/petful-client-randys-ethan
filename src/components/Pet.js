import React from 'react';

export function Pet(props){
  console.log(props);
  return (<section>
      <header>
        <h1>{props.animal.name}</h1>
        <img src={props.animal.imageURL} alt={props.animal.imageDescription}></img>
      </header>
      <main>
        <dl>
          <dt>Sex: {props.animal.sex} </dt>
          <dt>Age: {props.animal.age}</dt>
          <dt>Breed: {props.animal.breed}</dt>
          <dt>Story: {props.animal.story}</dt>
        </dl>
        <button onClick={() => props.onAdoptPet()}>Adopt</button>
      </main>
    </section>);
}