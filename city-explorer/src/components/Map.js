import React, { Component } from 'react'

import axios from 'axios'

import { Form, Button } from 'react-bootstrap'

import Cards from './Cards'

export default class Map extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      query: '',
      location: '',
      weather: '',
      validated: false,
    }
  }

  setQuery = (e) =>{
    this.setState({query: e.target.value})
    // this.state.query !== '' && window.location.reload()
  }

  getLocation = async (e) =>{
    e.preventDefault();

    this.checkQuery();

    const API = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_CITY_EXPLORER}&q=${this.state.query}&format=json`

    const response = await axios.get(API).catch((err)=>alert('Error: something went wrong', err))
    this.setState({location: response.data[0]})
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
            <Button type='submit' variant="primary">Search!</Button>
            </Form>

            <div className='cards-container'>
              {this.state.location !== '' && <Cards icon={this.state.location.icon} display_name={this.state.location.display_name} lat={this.state.location.lat} lon={this.state.location.lon} city={this.state.query}/>}
            </div>
        </div>
      </>
    )
  }
}