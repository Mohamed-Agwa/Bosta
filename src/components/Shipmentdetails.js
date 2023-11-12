import React from 'react'
import { Navbar, Nav, Container, NavDropdown, Button, Row, Col, NavItem, NavLink } from 'react-bootstrap';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { connect } from 'react-redux';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { createTheme } from '@mui/material/styles';
import { grey , blueGrey  } from '@mui/material/colors';
import  pic from "../1.svg";
import {useTranslation} from 'react-i18next';

const color = grey[100];
const color2 = blueGrey[300];
const color3 = blueGrey[700];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: color,
        color: color2,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        color: color3
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.common.white,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));




const Shipmentdetails = (props) => {
    const [t, i18n] = useTranslation('');

   
    var progcol = '';
    if (localStorage.status == "DELIVERED_TO_SENDER"){
        progcol = "#f9ba02"
    }
    else if (localStorage.status == "DELIVERED"){
        progcol = "green"

    }
    else {
        progcol = "red"
    }

    let data = props.status.TransitEvents
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }
    const formatTime = (dateString) => {

        const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' }
        return new Date(dateString).toLocaleTimeString(undefined, options)
    }


    let rows = data.map((obj) => { return transform(obj) })
    


    function transform(object) {
        let keyss = Object.keys(object);
        let transformed_values = {}
        if (keyss.includes('reason')) {
            transformed_values = [object['state'], formatTime(object['timestamp']), formatDate(object['timestamp']), `${t("shipment21")}`, object['reason']];
        }
        else {
            transformed_values = [object['state'], formatTime(object['timestamp']), formatDate(object['timestamp']), `${t("shipment21")}`];
        }
        let values = Object.values(object);
        return transformed_values;
    }
    console.log("data" , rows)
    

    return (
        (i18n.language == 'ar')?
        <Container style={{ backgroundColor: "white"}}>
            <Row>
                <Col className='col-12 col-md-8 '>
                    <p  className='titlee'> {t("shipment14")}</p>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align={t("shipment20")}>{t("shipment16")}</StyledTableCell>
                                    <StyledTableCell align={t("shipment20")}>{t("shipment17")}</StyledTableCell>
                                    <StyledTableCell align={t("shipment20")}>{t("shipment18")}</StyledTableCell>
                                    <StyledTableCell align={t("shipment20")}>{t("shipment19")}</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {rows.map((row) => (
                                    (row.length === 4)?
                                    <StyledTableRow >
                                        <StyledTableCell align={t("shipment20")} component="th" scope="row">
                                            {row[3]}
                                        </StyledTableCell>
                                        <StyledTableCell align={t("shipment20")}>{row[2]}</StyledTableCell>
                                        <StyledTableCell align={t("shipment20")}>{row[1]}</StyledTableCell>
                                        <StyledTableCell align={t("shipment20")}>{t(row[0])}</StyledTableCell>
                                    </StyledTableRow>:
                                    
                                    <StyledTableRow>
                                        <StyledTableCell align={t("shipment20")} component="th" scope="row">
                                            {row[3]}
                                        </StyledTableCell>
                                        <StyledTableCell align={t("shipment20")}>{row[2]}</StyledTableCell>
                                        <StyledTableCell align={t("shipment20")}>{row[1]}</StyledTableCell>
                                        <StyledTableCell align={t("shipment20")}>{t(row[0])}<p style = {{ color: progcol }}>{t(row[4])}</p></StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Col>
                <Col className='col-12 col-md-4 '>
                    <Row>
                    <p  className='titlee'> {t("shipment15")}</p>
                        <Paper className='colspac'>
                        <p className='addspac'>
                        {t("shipment22")}
                        </p>

                        </Paper>
                    </Row>
                    <Row>
                        <Paper className='colspac2'>
                            <Row>
                                <Col className='col-12 col-md-4 coon '>
                                <img src={pic} alt="" />
                                    

                                </Col>
                                <Col className='col-12 col-md-8 '>
                                <p className='addspac'>
                                {t("shipment23")}
                        </p>
                                    
                                    <Button className='addspac'> {t("shipment24")}</Button>
                                </Col>
                            </Row>

                        </Paper>
                    </Row>
                </Col>
            </Row>
        </Container>:<Container style={{ backgroundColor: "white"}}>
            <Row>
                <Col className='col-12 col-md-8 '>
                    <p  className='titlee'> {t("shipment14")}</p>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align={t("shipment20")}>{t("shipment16")}</StyledTableCell>
                                    <StyledTableCell align={t("shipment20")}>{t("shipment17")}</StyledTableCell>
                                    <StyledTableCell align={t("shipment20")}>{t("shipment18")}</StyledTableCell>
                                    <StyledTableCell align={t("shipment20")}>{t("shipment19")}</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {rows.map((row) => (
                                    (row.length === 4)?
                                    <StyledTableRow >
                                        <StyledTableCell align={t("shipment20")} component="th" scope="row">
                                            {row[3]}
                                        </StyledTableCell>
                                        <StyledTableCell align={t("shipment20")}>{row[2]}</StyledTableCell>
                                        <StyledTableCell align={t("shipment20")}>{row[1]}</StyledTableCell>
                                        <StyledTableCell align={t("shipment20")}>{t(row[0])}</StyledTableCell>
                                    </StyledTableRow>:
                                    
                                    <StyledTableRow>
                                        <StyledTableCell align={t("shipment20")} component="th" scope="row">
                                            {row[3]}
                                        </StyledTableCell>
                                        <StyledTableCell align={t("shipment20")}>{row[2]}</StyledTableCell>
                                        <StyledTableCell align={t("shipment20")}>{row[1]}</StyledTableCell>
                                        <StyledTableCell align={t("shipment20")}>{t(row[0])}<p style = {{ color: progcol }}>{t(row[4])}</p></StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Col>
                <Col className='col-12 col-md-4 '>
                    <Row>
                    <p  className='titlee'> {t("shipment15")}</p>
                        <Paper className='colspac'>
                        <p className='addspac'>
                        {t("shipment22")}
                        </p>

                        </Paper>
                    </Row>
                    <Row>
                        <Paper className='colspac2'>
                            <Row>
                                <Col className='col-12 col-md-4 coon '>
                                <img src={pic} alt="" />
                                    

                                </Col>
                                <Col className='col-12 col-md-8 '>
                                <p className='addspac'>
                                {t("shipment23")}
                        </p>
                                    
                                    <Button className='addspac'> {t("shipment24")}</Button>
                                </Col>
                            </Row>

                        </Paper>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = state => ({

    status: state.guest.details,
    detailsfetched: state.guest.detailsfetched
})
export default connect(mapStateToProps)(Shipmentdetails);
