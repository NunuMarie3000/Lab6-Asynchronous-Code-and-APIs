import React, { Component } from 'react'

import axios from 'axios'

import { Form, Button } from 'react-bootstrap'

import Cards from './Cards'
// import Static from './Static'

export default class Map extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      query: '',
      isChecked: false,
      location: '',
    //i need a state here that handles the chosen card specific info. when the user clicks cards.js, i need a function in cards.js that sends the info back here and sets the state to that specific object
    chosenCard: ''
    }
  }

  setQuery = (e) =>{
    this.setState({query: e.target.value})
  }

  getLocation = async (e) =>{
    e.preventDefault();

    const API = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_CITY_EXPLORER}&q=${this.state.query}&format=json`

    const response = await axios.get(API)
    this.setState({location: response.data})
  }

  handleSwitch = () =>{
    this.setState({isChecked: !this.state.isChecked})
  }

  render() {
    return (
      <>
        <div className='mapjs-container'>
            <Form style={{display: 'flex', flexDirection: 'column', padding: '2rem'}}>
            <Form.Group>
                <Form.Label><h1 style={{fontSize: '20px'}}>Enter a city: </h1></Form.Label>
                <Form.Control style={{borderRadius: '10px 5%'}} type="text" placeholder='memphis, tn...' onChange={this.setQuery}/>
            </Form.Group><br/>
            {/* <Form.Check type="switch" id="custom-switch" label="Check for Europe" onChange={this.handleSwitch}/> */}
            <Button style={{margin: '0 100px'}} variant="primary" onClick={this.getLocation}>
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