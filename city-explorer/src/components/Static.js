import React, { Component } from 'react'

export default class Static extends Component {
	render() {
		return (
			<div style={{ paddingBottom: '2rem' }}>
				<img className='map' alt='a map' src={this.props.src} />
			</div>
		)
	}
}
