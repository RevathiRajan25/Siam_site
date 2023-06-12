import React , {useEffect, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";

import './Scss/bannerSection.scss';

// images


// components
import CButton from "../Components/Button";

// details
import { particulars } from "../Utilities/config";

const BannerSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  let details = particulars["banner-section"]

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('banner-animated');
      const sectionTop = section.getBoundingClientRect().top;
      const threshold = window.innerHeight * 0.8;
      setIsVisible(sectionTop < threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section className="banner-section" id="banner-section">
      <div className="banner">
        <Container>
          <Row>
            <Col lg={8} md={12} className="col-banner-text">
              <div className={"banner-text " + (isVisible ? "visible" : "")}  id="banner-animated">
               <div className="banner-title">
               <h1>{details.title}</h1>
               </div>
                <p>
                  {details.description}
                </p>
                <CButton className={"btn-primary"} children={details.button}/>
              </div>
            </Col>
            <Col lg={4} md={12}>
              <div className="banner-image">
                <img src={details.bannerImage} alt="banner" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12}>
              <div className="customer-section">
                
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default BannerSection;
