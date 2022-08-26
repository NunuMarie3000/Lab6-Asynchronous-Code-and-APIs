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
      isMoviesClicked: false,
      src: '',
      data: '',
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
  handleMovies = () => {
    this.setState({isMoviesClicked: true})
  }

  createMap = () => {
    const map = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_EXPLORER}&center=${this.props.lat},${this.props.lon}&zoom=16&size=480x480&markers=icon:small-blue-cutout|${this.props.lat},${this.props.lon}`

    this.setState({src: map})
  }
  createWeather = async() => {
    // IMMA COMMENT THIS OUT ATM, WEATHERBIT.IO IS DOWN
    // const endpoints = [
    //   `http://localhost:5000/weather/?lat=${this.props.lat}&lon=${this.props.lon}`,
    //   `http://localhost:5000/movie/?city=${this.props.city}`
    // ]
    // //axios.all() so i can make both requests concurrently/at the same time, and store all data in state
    // await axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
    //   (data) => this.setState({data}, ()=>{console.log(this.state.data[1].data)})).catch((err)=> console.log(err));

     console.log('hey girl, from createweather function')
  }

  closeModalFromCards = () => {
    this.setState({isClicked: false})
  }
  setWeatherFalse = () => {
    this.setState({isWeatherClicked: false})
  }
  setMovieFalse = () => {
    this.setState({isMoviesClicked: false})
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
            <Button style={{margin: '0 20px'}} variant='primary' onClick={this.handleButton}>Map & Movies</Button>
            <Button style={{margin: '0 20px'}} variant='info' onClick={this.handleWeatherButton}>Weather</Button>
            <br/>
            </Card.Footer>

        </Card>

        {/* i think i wanna put cards on the map modal, make the modal full screen, have the map to the left, and have a grid of movies to the right */}
        <Static title={this.props.display_name} closeModalFromCards={this.closeModalFromCards} isClicked={this.state.isClicked} src={this.state.src} lat={this.props.lat} lon={this.props.lon}/>

        {this.state.data !== '' && <Weather setWeatherFalse={this.setWeatherFalse} isWeatherClicked={this.state.isWeatherClicked} weather={this.state.data[0].data} city={this.props.display_name}/>}
      </>
    )
  }
}
