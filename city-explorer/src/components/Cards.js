import React, { Component } from 'react'

import axios from 'axios'

import { Card, Button } from 'react-bootstrap'

import Static from './Static'

import Weather from './Weather'

export default class Cards extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isClicked: false,
      isWeatherClicked: false,
      src: '',
      weather: '',
    }
  }
  //when the user clicks a card, i want a modal to show up with the location of that specific card

  handleButton = () =>{
    this.setState({isClicked: true})
    this.createMap()
  }

  handleWeatherButton = () => {
    this.setState({isWeatherClicked: true})
    this.createWeather()
  }
  
  createMap = () => {
    const API = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_EXPLORER}&center=${this.props.lat},${this.props.lon}&zoom=16&size=480x480&markers=icon:small-blue-cutout|${this.props.lat},${this.props.lon}`

    this.setState({src: API})
  }

  createWeather = async() => {
    // this will change when i deploy my server to heroku
    const response = await axios.get(`http://localhost:5000/weather/?${this.props.city}&lat=${this.props.lat}&lon=${this.props.lon}`).catch((err)=>alert('Error: something went wrong', err))
		console.log(response.data)

		this.setState({ weather: response.data })
  }

  closeModalFromCards = () => {
    this.setState({isClicked: false})
  }

  setWeatherFalse = () => {
    this.setState({isWeatherClicked: false})
  }

  render() {
    return (
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Header><img style={{width: '1rem'}} src={this.props.icon ? this.props.icon : 'https://locationiq.org/static/images/mapicons/poi_boundary_administrative.p.20.png'} alt='icon'/></Card.Header>
            <Card.Body>
              <Card.Title>{this.props.display_name}</Card.Title>
              <Card.Text>
                  Latitude: {this.props.lat}<br/>
                  Longitude: {this.props.lon}
              </Card.Text>
            </Card.Body>
          <Card.Footer style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <Button style={{margin: '0 20px'}} variant='primary' onClick={this.handleButton}>Map</Button>
            <Button style={{margin: '0 20px'}} variant='info' onClick={this.handleWeatherButton}>Weather</Button>
            <br/></Card.Footer>

        </Card>

        <Static title={this.props.display_name} closeModalFromCards={this.closeModalFromCards} isClicked={this.state.isClicked} src={this.state.src} lat={this.props.lat} lon={this.props.lon}/>

        <Weather setWeatherFalse={this.setWeatherFalse} isWeatherClicked={this.state.isWeatherClicked} weather={this.state.weather} city={this.props.display_name}/>
      </>
    )
  }
}
