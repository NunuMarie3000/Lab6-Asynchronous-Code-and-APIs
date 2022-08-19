import React, { Component } from 'react'

import Header from './Header'
import Footer from './Footer'

export default class About extends Component {
  render() {
    return (
      <>
        <div className='application-container'>
            <Header/>
            <h5 style={{margin: '1rem', padding: '1.5rem', border: '2px dotted black', borderRadius: '10px 5%'}}>**Author**: Storm O'Bryant <br/>**Version**: 1.0.3</h5>
        </div>
        <Footer/>
      </>
    )
  }
}
