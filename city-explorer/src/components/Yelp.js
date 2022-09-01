import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class Yelp extends Component {
  render() {
    return (
      <>
        <h4 style={{ fontFamily: 'Caveat, cursive', fontSize: '36px' }}>Food Near {this.props.city.charAt(0).toUpperCase() + this.props.city.slice(1)}</h4>
        <div className='yelp-container'>
          {this.props.food.map((obj) => <Card key={obj.id} style={{border: '5px solid #00565F'}}>
            <Card.Body style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <Card.Img alt={obj.name} src={obj.image} style={{ width: '12rem', height: '12rem' }} />
              </div>
              <div style={{paddingRight:'2rem'}}>
                <Card.Title>{obj.name}</Card.Title>
                <Card.Text>Rating:{obj.rating}<br/>
                {obj.location.display_address[0]}<br/>{obj.location.display_address[1]}
                  <br />{obj.phone}</Card.Text>
              </div>
            </Card.Body>
          </Card>)}
        </div>
      </>
    )
  }
}
