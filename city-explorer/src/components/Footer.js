import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <p>&copy;StormyWeatherCreations, 2022</p>
        <p>Storm O'Bryant</p>
        <p>Check me out on <a href='https://github.com/NunuMarie3000' target='_blank' rel="noreferrer">Github</a>!</p>
      </footer>
    )
  }
}
