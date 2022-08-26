import React, { Component } from 'react'
import axios from 'axios'

import { Card } from 'react-bootstrap'

import Static from './Static'
import Weather from './Weather'
import Movies from './Movies'

export default class Cards extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // isClicked: false,
      // isWeatherClicked: false,
      // isMoviesClicked: false,
      src: '',
      data: '',
    }
  }
  //when the user clicks a card, i want a modal to show up with the location of that specific card
  // handleButton = () => {
  //   this.setState({ isClicked: true })
  //   this.createMap()
  // }
  // handleWeatherButton = () => {
  //   this.setState({ isWeatherClicked: true })
  //   this.createWeather()
  // }
  // handleMovies = () => {
  //   this.setState({ isMoviesClicked: true })
  // }

  componentDidMount = () => {
    this.createMap()
    this.createWeather()
  }

  createMap = () => {
    const map = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_EXPLORER}&center=${this.props.lat},${this.props.lon}&zoom=16&size=480x480&markers=icon:small-blue-cutout|${this.props.lat},${this.props.lon}`

    this.setState({ src: map })
  }
  createWeather = async () => {
    const endpoints = [
      `http://localhost:5000/weather/?lat=${this.props.lat}&lon=${this.props.lon}`,
      `http://localhost:5000/movie/?city=${this.props.city}`
    ]
    //axios.all() so i can make both requests concurrently/at the same time, and store all data in state
    await axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
      (data) => this.setState({data})).catch((err)=> alert('There seems to be an error, try again', err));
  }

  // closeModalFromCards = () => {
  //   this.setState({ isClicked: false })
  // }
  // setWeatherFalse = () => {
  //   this.setState({ isWeatherClicked: false })
  // }
  // setMovieFalse = () => {
  //   this.setState({ isMoviesClicked: false })
  // }

  render() {
    return (
      <>
        <Card>
          <Card.Header>Latitude: {this.props.lat} <img style={{ width: '1rem' }} src={this.props.icon ? this.props.icon : 'https://locationiq.org/static/images/mapicons/poi_boundary_administrative.p.20.png'} alt='icon' /> Longitude: {this.props.lon}</Card.Header>
          <Card.Body>
            <Card.Title>{this.props.display_name}</Card.Title>
            <div style={{display: 'flex', }}>{/*map and forecast info */}
              <Static title={this.props.display_name} closeModalFromCards={this.closeModalFromCards} isClicked={this.state.isClicked} src={this.state.src} lat={this.props.lat} lon={this.props.lon} />

              {this.state.data !== '' && <Weather weather={this.state.data[0].data} city={this.props.city} />}
            </div>

            <div>{/*movies, maybe a carousel? */}
              {this.state.data !== '' && <Movies city={this.props.city} movies={this.state.data[1].data}/>}
            </div>
          </Card.Body>
        </Card>
      </>
    )
  }
}
