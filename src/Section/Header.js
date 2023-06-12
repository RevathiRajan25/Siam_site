import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import './Scss/header.scss';

// logo
import DropDown from "../Components/DropDown";
import CButton from "../Components/Button";
import { particulars } from "../Utilities/config";

const Header = () => {
    const [scrollChange, setScrollChange] = useState(false);
    let details = particulars["header"]
    const handleScroll = () => {
        if (window.scrollY >= 10) {
          setScrollChange(true);
        } else {
          setScrollChange(false);
        }
      };
    
      useEffect(() => {
        handleScroll();
        // adding the event when scroll change background
        window.addEventListener("scroll", handleScroll);
      });

    return(
        <section className="header-section">
            <div className={`${scrollChange ? "header-white" : "header-transparent"} header`}> 
            <Container>
                <Row>
                    <Col lg={4} md={12} className="col-logo">
                        <img className="logo" src={details.logo} alt="logo"/>
                        
                    </Col>
                    <Col lg={8} md={12} className="col-menu">
                        {details.menu.map((element, index) => (
                           <DropDown key={index} label={element?.name} lists={element?.list}/>
                        ))}
                        <CButton className={"btn-secondary p-3"} children={details.button}/>
                    </Col>
                </Row>
            </Container>
            </div>
        </section>
    )
}
export default Header;