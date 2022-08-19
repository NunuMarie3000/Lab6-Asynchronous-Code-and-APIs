import React, { Component } from 'react'

import axios from 'axios'

import { Form, Button, Card } from 'react-bootstrap'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      query: '',
      isChecked: false,
      location: '',
    }
  }

  setQuery = (e) =>{
    this.setState({query: e.target.value})
  }

  getLocation = async (e) =>{
    e.preventDefault();

    const APIUS = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_CITY_EXPLORER}&q=${this.state.query}&format=json`

    const APIUK = `https://eu1.locationiq.com/v1/search?key=${process.env.REACT_APP_CITY_EXPLORER}&q=${this.state.query}&format=json`

    const response = this.state.isChecked ? await axios.get(APIUK) : await axios.get(APIUS)

    console.log(response.data)
    this.setState({location: response.data})
  }

  handleSwitch = () =>{
    this.setState({isChecked: !this.state.isChecked})
  }

  render() {
    return (
      <>
        <Form>
          <Form.Group>
            <Form.Label>Enter a city: </Form.Label>
            <Form.Control type="text" placeholder="Memphis" onChange={this.setQuery}/>
          </Form.Group>
          <Form.Check type="switch" id="custom-switch" label="Check for Europe" onChange={this.handleSwitch}/>
          <Button variant="primary" onClick={this.getLocation}>
            Search!
          </Button>
        </Form>

        <div>
          {this.state.location !== '' && this.state.location.map(obj =>
            <Card key={obj.place_id} style={{ width: '18rem' }}>
              <Card.Header><img style={{width: '1rem'}} src={obj.icon ? obj.icon : 'https://locationiq.org/static/images/mapicons/poi_boundary_administrative.p.20.png'} alt='icon'/></Card.Header>
              <Card.Body>
                <Card.Title>{obj.display_name}</Card.Title>
                <Card.Text>
                  Latitude: {obj.lat}
                  Longitude: {obj.lon}
                </Card.Text>
              </Card.Body>
            </Card>)}
        </div>
      </>
    )
  }
}

