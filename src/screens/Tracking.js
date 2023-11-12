import React from 'react';
import Header from '../components/Header';
import Shipment from '../components/Shipment';
import Footer from '../components/Footer';
import Shipmentdetails from '../components/Shipmentdetails';
import Preloader from "../components/Preloader"
import { Navbar, Nav, Container, NavDropdown, Button, Row, Col, NavItem, NavLink } from 'react-bootstrap';

import { connect } from 'react-redux';


const Tracking = (props) => {
    return (
        <><Header />

            {!props.detailsfetched ? <Container><div>
          <h1 style={{textAlign:'center', marginTop:"10px "}}> Waiting for your request....</h1>

    </div> <Preloader /> </Container>: 
            <main style={{
        backgroundColor: 'white'
      }}>
            <Container ><Shipment />
            <Shipmentdetails /></Container></main>}
            <Footer /></>
    )
}

const mapStateToProps = state => ({

    status: state.guest.details,
    detailsfetched: state.guest.detailsfetched
})
export default connect(mapStateToProps)(Tracking);
