import React, { Component } from 'react'

import { Carousel, Card } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'

export default class Movies extends Component {

	// , width: '40rem'
	render() {
		return (
			<>{/*in a carousel rn, might change  to scrollable container with just image posters, then each movie card is a clickable, modal with the overview and rating info */}
				<h4>Movies related to {this.props.city.charAt(0).toUpperCase() + this.props.city.slice(1)}</h4>
				<Carousel fade style={{display:'flex'}}>
					{this.props.movies !== [{ "error": "No movies" }] && this.props.movies.map(movie => {
						return <Carousel.Item key={movie.id}>
							<Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '1rem' }}>
								<Card.Img className='poster' variant="top" src={movie.image} alt={`${movie.title} movie poster`} />
								<Card.Body>
									<Card.Title>{movie.title}</Card.Title>
									<CardHeader>Rating: {movie.vote_average}</CardHeader>
									<Card.Text>{movie.overview}</Card.Text>
								</Card.Body>
							</Card>
						</Carousel.Item>
					})}
				</Carousel>
			</>
		)
	}
}