import React, { Component } from 'react'

import { Carousel, Card } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'

export default class Movies extends Component {
	render() {
		return (
			<>{/*in a carousel rn, might change  to scrollable container with just image posters, then each movie card is a clickable, modal with the overview and rating info */}
				<h4 style={{fontFamily: 'Caveat, cursive', fontSize: '36px'}}>Movies related to {this.props.city.charAt(0).toUpperCase() + this.props.city.slice(1)}</h4>
				{this.props.movies[0].title === undefined ? <h1 style={{paddingTop: '2rem'}}>No movies related to {this.props.city.charAt(0).toUpperCase() + this.props.city.slice(1)}</h1> : 
				<Carousel fade className='carousel'>
					{this.props.movies.map(movie => {
						return <Carousel.Item key={movie.id}>
							<Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '2rem'}}>
								<Card.Img className='poster' variant="top" src={movie.image} alt={`${movie.title} movie poster`} />
								<Card.Body style={{overflow: 'auto'}}>
									<Card.Title>{movie.title}</Card.Title>
									<CardHeader>Rating: {movie.vote_average}</CardHeader>
									<Card.Text>{movie.overview}</Card.Text>
								</Card.Body>
							</Card>
						</Carousel.Item>
					})}
				</Carousel>}
			</>
		)
	}
}