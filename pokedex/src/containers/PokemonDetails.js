import React, { Component } from 'react'
import axios from 'axios'
import { POKEMON_API_URL } from '../config'

export default class PokemonDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pokemon: null
        }
    }

    componentDidMount() {
        const { match } = this.props;
        const id = match?.params?.id; // Make sure to access id safely
      
        if (id) {
          axios.get(POKEMON_API_URL + id)
            .then((response) => {
              if (response.status >= 200 && response.status < 300) {
                console.log(response.data);
                this.setState({ pokemon: response.data });
              }
            })
            .catch((error) => {
              console.error("Error fetching data:", error);
            });
        }
      }
      
  render() {
    return (
      <div >

      </div>
    )
  }
}
