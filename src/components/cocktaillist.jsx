import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class CocktailList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            propsData: this.props.propsData.filter(elt => elt._id === this.props.match.params.id),
            propsReady: this.props.propsReady
        }
    }

    render() {
        console.log(this.state.propsData)
        return (
            <section>
                <CocktailList
                    image={this.state.propsData[0].image}
                    name={this.state.propsData[0].name}
                    description={this.state.propsData[0].description}
                    ingredients={this.state.propsData[0].ingredients}
                />

            </section>
        );
    }
}

export default CocktailList;