import React, { Component } from 'react'
import Map from './components/Map'
import Header from './components/Header'
import Footer from './components/Footer'

export default class App extends Component {
  render() {
    return (
      <>
        <div className='application-container'>
          <Header/>
          <Map/>
          <Footer/>
        </div>
      </>
    )
  }
}


