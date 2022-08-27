import React, { Component } from 'react'

// import { Modal, Button } from 'react-bootstrap'

export default class Static extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //     show: false,
    //   }
    // }

    // handleClose = () =>{
    //     this.setState({show: false})
    //     this.props.closeModalFromCards();
    // }

    render() {
    return (
        <div style={{display: 'flex', flexDirection:'column', paddingBottom: '2rem'}}>
            <h5>Map for {this.props.title.charAt(0).toUpperCase() + this.props.title.slice(1)}</h5>
            <img style={{height: '20rem', width: '18rem', borderRadius: '5%', margin: 'auto'}} alt='a map' src={this.props.src}/>
        </div>
    )
    }
}
