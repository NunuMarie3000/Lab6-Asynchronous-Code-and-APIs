import React, { Component } from 'react'

import { Outlet } from 'react-router-dom'

import { LinkContainer } from 'react-router-bootstrap'

import { NavLink, Nav } from 'react-bootstrap'

import locationIQ from '../media/locationIQLogo.png'

export default class Header extends Component {
  render() {
    return (
      <>
        <Nav className='justify-content-end' style={{paddingRight: '2rem'}}>
            <LinkContainer to='/'>
                <NavLink>Home</NavLink>
            </LinkContainer>
            <LinkContainer to='about'>
                <NavLink>About</NavLink>
            </LinkContainer>
        </Nav>
        <h1>Maps by Stormy</h1>
        <h3>powered by <img style={{width: '100px'}} alt='LocationIQ Logo' src={locationIQ}/></h3>
        <Outlet/>
        
      </>
    )
  }
}
