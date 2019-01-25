import React from 'react';

import {Pet} from './components/Pet';
import { fetchCat } from './actions/cat';
import { fetchDog } from './actions/dog';
import {connect} from 'react-redux';

export class Dashboard extends React.Component {

  componentDidMount() {
    console.log('Dashboard tried to mount');
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog());
    console.log('Dashboard mounted');
  }

  onAdoptPet(){
    console.log('clicked');
  }

  render(){
    console.log(this.props);
    // console.log(this.props.catsToAdopt);
   if(this.props.dogToAdopt.data && this.props.catToAdopt.data){
    return <section>
      <Pet animal={this.props.catToAdopt} onAdoptPet={this.onAdoptPet} />
      <Pet animal={this.props.dogToAdopt} onAdoptPet={this.onAdoptPet} />
    </section>
   }
   return null;
  }
}

const mapStateToProps = state => {
  // console.log(state.cats)
  return {
    catToAdopt: state.cats,
    dogToAdopt: state.dogs, 
    state
  }                    
};

export default connect(mapStateToProps)(Dashboard);