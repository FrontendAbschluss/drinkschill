import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Category from './Category'

const Home = () => {
  return (
    <div>
      <Category ingredient={'gin'}>Gin</Category>
      <Category ingredient={'wodka'}>Wodka</Category>
      <Category ingredient={'rum'}>Rum</Category>
      <Category ingredient={'scotch'}>Scotch</Category>
      <Category ingredient={'alcoholfree'}>Alkoholfrei</Category>
      <Category ingredient={'random'}>Zufall</Category>
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

// export default CocktailList;
