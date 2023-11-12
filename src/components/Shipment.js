import Progress from "./Progress";
import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Button, Row, Col, NavItem, NavLink } from 'react-bootstrap';
import Paper from '@mui/material/Paper';
import '../index.css';
import {useTranslation} from 'react-i18next';




const Shipment = () => {
    const [t, i18n] = useTranslation('');
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    var timee = new Date(localStorage.time);
    var timeee = new Date(localStorage.arrivaltime);
    if (timeee == "Invalid Date"){
        timeee = `${t("shipment13")}`
    }
    else {
        timeee = formatDate(localStorage.arrivaltime);
    }
    var numb = localStorage.trackingo;
    var progcol = '';
    var msg = '';
    var message = '';
    if (localStorage.status == "DELIVERED_TO_SENDER"){
        progcol = "#f9ba02";
        msg = `${t("shipment11")}`;
        message = `${t("shipment9")}`;
    }
    else if (localStorage.status == "DELIVERED"){
        progcol = "green";
        msg = `${t("shipment12")}`;
        message = '';

    }
    else {
        progcol = "red";
        msg = `${t("shipment13")}`;
        message = `${t("shipment10")}`;

    }
    return (
        <Paper className="pap">
            <Container className="shadcont">
                <Row className="rowspacing">
                    <Col className='col-6 col-md-3 '>
                        <p className='easy'>{t("shipment1")} {numb}</p>
                        <p  className='hard'  medium style = {{ color: progcol }}>{msg} </p>
                    </Col>
                    <Col className='col-6 col-md-3 '>
                        <p className='easy'>{t("shipment2")}</p>
                        <p className='hard'>{timee.toGMTString()}</p>
                    </Col>
                    <Col className='col-6 col-md-3 '>
                        <p className='easy'>{t("shipment3")} </p>
                        <p className='hard'>Souq.com</p>
                    </Col>
                    <Col className='col-6 col-md-3 '>
                        <p className='easy'>{t("shipment4")}</p>
                        <p className='hard'>{timeee}</p>
                    </Col>
                </Row>
                <hr
  style={{
    background: '#e0e0e0',
    color: '#e0e0e0',
    borderColor: '#e0e0e0',
    height: '3px',
  }}
/>
                <Row className="rowspacing labels">
                    <Col className='col-12 col-md-12 progg'>
                        <Progress  />
                    </Col>
                    <Col className='col-3 col-md-3 ship1'>
                        <p className="medium" >{t("shipment5")}</p>
                    </Col>
                    <Col className='col-3 col-md-3 ship2'>
                        <p className=" medium shippad2">{t("shipment6")}</p>
                    </Col>
                    <Col className='col-3 col-md-3 ship3'>
                        <p className="medium shippad3">{t("shipment7")}</p>
                        <p style = {{ color: progcol }} className=" medium shippad3">{message}</p>

                    </Col>
                    <Col className='col-3 col-md-3 ship4'>
                        <p className=" medium shippad4">{t("shipment8")}</p>
                    </Col>

                </Row>
            </Container>
        </Paper>
    )
}

export default Shipment
