import React, { Component } from 'react'

export default class Static extends Component {
	render() {
		return (
			<div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '2rem' }}>
				<h5>Map for {this.props.title.charAt(0).toUpperCase() + this.props.title.slice(1)}</h5>
				<img style={{ height: '20rem', width: '18rem', borderRadius: '5%', margin: 'auto' }} alt='a map' src={this.props.src} />
			</div>
		)
	}
}
