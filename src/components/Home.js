import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Category from './Category'
import './Home.css'

const Home = () => {
  return (
    <div className="start">
      <div className="Gin">
        <Category ingredient={'Gin'} name={'Gin'}>
          Gin
        </Category>
      </div>
      <div className="Vodka">
        <Category ingredient={'Vodka'} name={'Wodka'}>
          Wodka
        </Category>
      </div>
      <div className="Rum">
        <Category ingredient={'Rum'} name={'Rum'}>
          Rum
        </Category>
      </div>
      <div className="Scotch">
        <Category ingredient={'Scotch'} name={'Scotch'}>
          Scotch
        </Category>
      </div>
      <div className="A_frei">
        <Category ingredient={'Non_Alcoholic'} name={'Alkoholfrei'}>
          Alkoholfrei
        </Category>
      </div>
      <div className="Random">
        <Category ingredient={'Random'} name={'Zufall'}>
          Zufall
        </Category>
      </div>
    </div>
  )
}

export default Home

// class CocktailList extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             propsData: this.props.propsData.filter(elt => elt._id === this.props.match.params.id),
//             propsReady: this.props.propsReady
//         }
//     }

//     render() {
//         console.log(this.state.propsData)
//         return (
//             <section>
//                 <CocktailList
//                     image={this.state.propsData[0].image}
//                     name={this.state.propsData[0].name}
//                     description={this.state.propsData[0].description}
//                     ingredients={this.state.propsData[0].ingredients}
//                 />

//             </section>
//         );
//     }
// }
