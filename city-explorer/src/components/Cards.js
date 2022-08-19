import React, { Component } from 'react'

import { Card, Button } from 'react-bootstrap'

import Static from './Static'

export default class Cards extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isClicked: false,
      lat: this.props.lat,
      lon: this.props.lon,
      src: ''
    }
  }
  //when the user clicks a card, i want a modal to show up with the location of that specific card

  handleButton = () =>{
    this.setState({isClicked: true})
    this.createMap()
  }
  
  createMap = () => {
    const API = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_EXPLORER}&center=${this.props.lat},${this.props.lon}&zoom=16&size=480x480&markers=icon:small-blue-cutout|${this.props.lat},${this.props.lon}`

    this.setState({src: API})
  }

  closeModalFromCards = () => {
    this.setState({isClicked: false})
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
          <Card.Footer>{this.state.isClicked ? <Button style={{margin: '0 20px'}} variant='info' onClick={this.handleButton}>Map!</Button> : <Button style={{margin: '0 20px'}} variant='primary' onClick={this.handleButton}>View Map</Button>}<br/></Card.Footer>

        </Card>

        <Static title={this.props.display_name} closeModalFromCards={this.closeModalFromCards} isClicked={this.state.isClicked} src={this.state.src}/>
      </>
    )
  }
}
