import React, { Component } from 'react'

import Header from './Header'
import Footer from './Footer'

export default class About extends Component {
  render() {
    return (
      <>
        <div className='application-container'>
            <Header/>
            <h2>**Author**: Storm O'Bryant <br/>**Version**: 1.0.2</h2>
            
        </div>
        <Footer/>
      </>
    )
  }
}
