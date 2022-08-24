import React, { Component } from 'react'

import axios from 'axios'

import { Form, Button } from 'react-bootstrap'

import Cards from './Cards'

export default class Map extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      query: '',
      isChecked: false,
      location: '',
      //i need a state here that handles the chosen card specific info. when the user clicks cards.js, i need a function in cards.js that sends the info back here and sets the state to that specific object
      chosenCard: '',
      validated: false,
      errors: []
    }
  }

  setQuery = (e) =>{
    this.setState({query: e.target.value})
  }

  getLocation = async (e) =>{
    e.preventDefault();

    this.checkQuery();

    const API = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_CITY_EXPLORER}&q=${this.state.query}&format=json`


    const response = await axios.get(API).catch((err)=>{alert(`${err}. Enter a valid location`)})

    this.setState({location: response.data})
  }

  checkQuery = () => {
    this.state.query !== '' && this.setState({validated: true})


  }



  render() {
    return (
      <>
        <div className='mapjs-container'>
            <Form validated={this.state.validated} style={{display: 'flex', flexDirection: 'column', padding: '2rem'}}  onSubmit={this.getLocation}>
            <Form.Group>
                <Form.Label><h1 style={{fontSize: '20px'}}>Enter a city: </h1></Form.Label>
                <Form.Control required type="text" placeholder='memphis, tn...' style={{borderRadius: '10px 5%'}} onChange={this.setQuery}/>
            </Form.Group><br/>
            <Button type='submit' style={{margin: '0 100px'}} variant="primary">
                Search!
            </Button>
            </Form>

            <div className='cards-container'>
            {this.state.location !== '' && this.state.location.map(obj => <Cards key={obj.place_id} place_id={obj.place_id} icon={obj.icon} display_name={obj.display_name} lat={obj.lat} lon={obj.lon}/>)}
            </div>
        </div>
      </>
    )
  }
}