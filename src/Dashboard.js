import React from 'react';

import {Pet} from './components/Pet';
import { fetchCat, adoptCat } from './actions/cat';
import { fetchDog, adoptDog } from './actions/dog';
import {connect} from 'react-redux';

export class Dashboard extends React.Component {

  componentDidMount() {
    // console.log('Dashboard tried to mount');
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog());
    // console.log('Dashboard mounted');
  }

  onAdoptPet(event){
    console.log('clicked', event.target);
    // this.props.dispatch(adoptCat());
  }
//  onAdoptPet={ ()=> dispatch(adoptCat())}


  render(){
    console.log(this.props);
    // console.log(this.props.catsToAdopt);
    // if (this.props.dogToAdopt.loading || this.props.catToAdopt.loading ){
    //   return <h1>Pets loading...</h1>
    // } 
    if(this.props.dogToAdopt.data && this.props.catToAdopt.data){
      return <section>
        <Pet animal={this.props.catToAdopt} className="cat" onAdoptPet={()=> this.props.dispatch(adoptCat())} />
        <Pet animal={this.props.dogToAdopt} className="dog" onAdoptPet={()=> this.props.dispatch(adoptDog())} />
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