import React from "react";
import AboutSC from "./AboutSC";
import logo from "../../assets/logo_1.png";
import SC from "../../themes/SC";
import "../../Global.scss";

export default function About() {
  return (
    <AboutSC.AboutPage id="about">
      {/* CORNERS */}
      <SC.PageCorner className="top left"></SC.PageCorner>
      <SC.PageCorner className="top right"></SC.PageCorner>
      <SC.PageCorner className="bottom left"></SC.PageCorner>
      <SC.PageCorner className="bottom right"></SC.PageCorner>
      {/* CONTAINER */}
      <AboutSC.AboutContainer className="about-container">
        <AboutSC.AboutLeft className="about-left">
          <AboutSC.AboutImgContainer className="img-container">
            <AboutSC.AboutImg src={logo} alt="" />
          </AboutSC.AboutImgContainer>
          <AboutSC.AboutTitleMobile href="#about">
            ABOUT ME
          </AboutSC.AboutTitleMobile>
        </AboutSC.AboutLeft>
        <AboutSC.AboutRight className="about-right">
          <AboutSC.AboutTitle href="#about">ABOUT ME</AboutSC.AboutTitle>
          <AboutSC.AboutInfo className="info-p">
            <SC.PrimaryColorText>&gt;</SC.PrimaryColorText> Welcome! My name is
            Tanmay Mahato, I am a self-taught web developer.
          </AboutSC.AboutInfo>
          <AboutSC.AboutInfo className="info-p">
            <SC.PrimaryColorText>&gt;</SC.PrimaryColorText> After over a year of study, 
            I am ready to contribute to the world in this new way, 
            and I'm looking forward to bringing the best traits of a creative develope.
            My focus is in creating responsive layouts on the JavaScript stack of React 
            and NodeJS, and from my background as an IT Engineer I'm well acquainted 
            to bringing out solutions to complex problems.
          </AboutSC.AboutInfo>
          <AboutSC.AboutLWT>&gt;
            <a href="https://drive.google.com/file/d/156dKbMA1b_Z6pzqq1viyaAM1WLfH_G6z/view" style={{color: "#E9B32A", textDecoration: "none", fontSize: "1.7rem"}}> RESUME(click for resume)</a> 
          </AboutSC.AboutLWT>

        </AboutSC.AboutRight>
      </AboutSC.AboutContainer>
    </AboutSC.AboutPage>
  );
}
