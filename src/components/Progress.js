import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { FaShippingFast } from 'react-icons/fa';
import { MdOutlinePresentToAll , MdOutlineDone } from 'react-icons/md';
import { IoCreateOutline } from 'react-icons/io5';
import { RiUserReceived2Line } from 'react-icons/ri';

import { useState } from 'react';
import { connect } from 'react-redux';
import '../index.css';



const Progress = () => {
    var status = localStorage.status;
    var progcol = "";
    var prct = "";
    if (localStorage.status == "DELIVERED_TO_SENDER"){
        progcol = "#f9ba02"
        prct = "67"
    }
    else if (localStorage.status == "DELIVERED"){
        progcol = "green"
        prct = "100"
    }
    else {
        progcol = "red"
        prct = "67"
    }
    const [col, setCol] = useState('');
    const [col1, setCol1] = useState('');
    const [col2, setCol2] = useState('');
    const [col3, setCol3] = useState('');
    const [col4, setCol4] = useState('');
    const [coli, setColi] = useState('');
    const [coli1, setColi1] = useState('');
    const [coli2, setColi2] = useState('');
    const [coli3, setColi3] = useState('');
    return (
        (localStorage.status == "DELIVERED")? <ProgressBar 
        filledBackground={progcol}
        percent={prct}
    >
        <Step transition="scale">
            {({ accomplished, index }) => (
                <div
                    className={`transitionStep ${accomplished ? "accomplished" : null}`}
                >

                    {accomplished ? setCol(progcol) : null}
                    {accomplished ? setColi("white") : null}
                    <div style={{ backgroundColor: col, borderColor: col }} className="icon-wrapper">
                        <MdOutlineDone style={{ color: coli }} className="icon-color rightic" />
                    </div>
                </div>
            )}
        </Step>
        <Step transition="scale">
            {({ accomplished, index }) => (
                <div
                    className={`transitionStep ${accomplished ? "accomplished" : null}`}

                >
                    {accomplished ? setCol1(progcol) : null}
                    {accomplished ? setColi1("white") : null}
                    <div style={{ backgroundColor: col1 , borderColor: col1 }} className="icon-wrapper">
                        <MdOutlineDone style={{ color: coli1 }} className="icon-color rightic" />
                    </div>
                </div>
            )}
        </Step>
        <Step transition="scale">
            {({ accomplished, index }) => (
                <div
                    className={`transitionStep ${accomplished ? "accomplished" : null}`}
                >
                
                    {accomplished ? setCol2(progcol) : null}
                    {accomplished ? setColi2("white") : null}
                    <div style={{ backgroundColor: col2, borderColor: col2 }} className="icon-wrapper">
                      <MdOutlineDone style={{ color: coli2 }}className="icon-color rightic" />
                    </div>

                    

                </div>
            )}
        </Step>
        <Step transition="scale">
            {({ accomplished, index }) => (
                <div
                    className={`transitionStep ${accomplished ? "accomplished" : null}`}
                >
                    {accomplished ? setCol3(progcol) : null}
                    {accomplished ? setCol4(progcol) : null}
                    {accomplished ? setColi3("white") : null}
                    {!accomplished ? setCol3("white") : null}
                    {!accomplished ? setColi3("grey") : null}
                    {!accomplished ? setCol4("grey") : null}

                    
                    <div style={{ backgroundColor: col3 , borderColor: col4 }} className="icon-wrapper-f">
                        <MdOutlineDone style={{ color: coli3 }} className="icon-color3 rightic" />
                    </div>
                </div>
            )}
        </Step>

    </ProgressBar> :
        <ProgressBar 
            filledBackground={progcol}
            percent={prct}
        >
            <Step transition="scale">
                {({ accomplished, index }) => (
                    <div
                        className={`transitionStep ${accomplished ? "accomplished" : null}`}
                    >

                        {accomplished ? setCol(progcol) : null}
                        {accomplished ? setColi("white") : null}
                        <div style={{ backgroundColor: col, borderColor: col }} className="icon-wrapper">
                            <MdOutlineDone style={{ color: coli }} className="icon-color rightic"/>
                        </div>
                    </div>
                )}
            </Step>
            <Step transition="scale">
                {({ accomplished, index }) => (
                    <div
                        className={`transitionStep ${accomplished ? "accomplished" : null}`}

                    >
                        {accomplished ? setCol1(progcol) : null}
                        {accomplished ? setColi1("white") : null}
                        <div style={{ backgroundColor: col1 , borderColor: col1 }} className="icon-wrapper">
                            <MdOutlineDone style={{ color: coli1 }} className="icon-color rightic" />
                        </div>
                    </div>
                )}
            </Step>
            <Step transition="scale">
                {({ accomplished, index }) => (
                    <div
                        className={`transitionStep ${accomplished ? "accomplished" : null}`}
                    >
                    
                        {accomplished ? setCol2(progcol) : null}
                        {accomplished ? setColi2("white") : null}
                        <div style={{ backgroundColor: col2, borderColor: col2 }} className="icon-wrapper">
                          <FaShippingFast style={{ color: coli2 }}className="icon-color rightic" />
                        </div>

                        

                    </div>
                )}
            </Step>
            <Step transition="scale">
                {({ accomplished, index }) => (
                    <div
                        className={`transitionStep ${accomplished ? "accomplished" : null}`}
                    >
                        {accomplished ? setCol3(progcol) : null}
                        {accomplished ? setCol4(progcol) : null}
                        {accomplished ? setColi3("white") : null}
                        {!accomplished ? setCol3("white") : null}
                        {!accomplished ? setColi3("grey") : null}
                        {!accomplished ? setCol4("grey") : null}

                        
                        <div style={{ backgroundColor: col3 , borderColor: col4 }} className="icon-wrapper-f">
                            <MdOutlinePresentToAll style={{ color: coli3 }} className="icon-color3 rightic" />
                        </div>
                    </div>
                )}
            </Step>

        </ProgressBar>
    )
}
const mapStateToProps = state => ({
   
    status: state.guest.details
})
export default connect(mapStateToProps)(Progress);



