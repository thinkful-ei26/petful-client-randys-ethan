import React from 'react';

import {Pet} from './components/Pet';

export class Dashboard extends React.Component {

onAdoptPet(){
  console.log('clicked');
}

  render(){
    console.log(this.props);
    // const animalToAdopt = 
    // const catToAdopt = 
    // (<section>
    //   <header>
    //     <h1>{this.props.catToAdopt.name}</h1>
    //     <img src={this.props.catToAdopt.imageURL} alt={this.props.catToAdopt.imageDescription}></img>
    //   </header>
    //   <main>
    //     <dl>
    //       <dt>Sex: {this.props.catToAdopt.sex} </dt>
    //       <dt>Age: {this.props.catToAdopt.age}</dt>
    //       <dt>Breed: {this.props.catToAdopt.breed}</dt>
    //       <dt>Story: {this.props.catToAdopt.story}</dt>
    //     </dl>
    //     <button>Adopt</button>
    //   </main>
    // </section>);

    // const dogToAdopt = 
    // (<section>
    //   <header>
    //     <h1>{this.props.dogToAdopt.name}</h1>
    //     <img src={this.props.dogToAdopt.imageURL} alt={this.props.catToAdopt.imageDescription}></img>
    //   </header>
    //   <main>
    //     <dl>
    //       <dt>Sex: {this.props.dogToAdopt.sex} </dt>
    //       <dt>Age: {this.props.dogToAdopt.age}</dt>
    //       <dt>Breed: {this.props.dogToAdopt.breed}</dt>
    //       <dt>Story: {this.props.dogToAdopt.story}</dt>
    //     </dl>
    //     <button>Adopt</button>
    //   </main>
    // </section>);

    return <section>
      <Pet animal={this.props.catToAdopt} onAdoptPet={this.onAdoptPet} />
      <Pet animal={this.props.dogToAdopt} onAdoptPet={this.onAdoptPet} />
    </section>
  }
}