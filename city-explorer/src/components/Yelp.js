import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class Yelp extends Component {
  render() {
    return (
      <>
        <h4 style={{ fontFamily: 'Caveat, cursive', fontSize: '36px' }}>Food Near {this.props.city.charAt(0).toUpperCase() + this.props.city.slice(1)}</h4>
        <div className='yelp-container'>
          {this.props.food.map((obj) => <Card key={obj.id} style={{border: '5px solid #00565F'}}>
            <Card.Body style={{ display: 'flex' }}>
              <div className='yelp-img-container'>
                <Card.Img alt={obj.name} src={obj.image} className='yelp-img' />
              </div>
              <div style={{textAlign:'left', marginLeft:'1rem'}}>
                <Card.Title>{obj.name}</Card.Title>
                <Card.Text><i class="fa-solid fa-star"></i>: {obj.rating}/5<br/>
                <i class="fa-solid fa-location-dot"></i> {obj.location.display_address[0]}<br/>
                {obj.location.display_address[1]}<br />
                <i className="fa-solid fa-phone"></i>{obj.phone}</Card.Text>
              </div>
            </Card.Body>
          </Card>)}
        </div>
      </>
    )
  }
}
