import React,{useEffect} from "react";
import { getSectionDetails } from "../Utilities/CustomEvents";
import Header from "../Section/Header";
import BannerSection from "../Section/BannerSection";

const LandingPage = () => {
    useEffect(() => {
        let sections = ["banner-section"]
       getSectionDetails(sections) 
    },[])
  return <React.Fragment>
    <Header/>
    <BannerSection/>
  </React.Fragment>;
};
export default LandingPage;