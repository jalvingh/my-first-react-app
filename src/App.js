import React from "react";
import TeamCard from "./components/TeamCard"
import "./App.css";
import SectionCard from "./components/SectionCard";
import LikeCounter from "./components/LikeCounter";
import AwesomeAnimals from "./components/AwesomeAnimals";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <header id="header" className="section-header scroll">
          <a href="./">
            <img className="icon" src="https://learntocodetogether.nl/assets/icon.svg" />
          </a>
          <a href="https://www.meetup.com/Learning-to-Code-Amsterdam/">
            <img className="meetup-icon" src="https://learntocodetogether.nl/assets/meetup-icon.svg" />
          </a>
          <nav>
            <a href="/courses.html">Our Courses</a>
          </nav>
        </header>

        <div className="section-header-spacer"></div>

        <LikeCounter/>

        <AwesomeAnimals/>










        <div className="content">

          <div className="section section-what-usp">

            <SectionCard badgeTitle="Do you want to" componentTitle="Learn how to code" description="Awesome! Let’s do this together. We are here to support you in your coding journey." />
           
            <div className="component-usp-row">
              <TeamCard imgUrl="https://learntocodetogether.nl/assets/team.svg" subTitle="Get help from experienced developers"/>
              <TeamCard imgUrl = "https://learntocodetogether.nl/assets/community.svg" subTitle = "Learn &amp; share with our community" />
              <TeamCard imgUrl = "https://learntocodetogether.nl/assets/personal-speed.svg" subTitle = "Personal &amp; at your own speed" />
            </div>

          </div>

          <div className="section-line">
            <div className="line "></div>
          </div>

          <div className="section section-courses-usp">
            <div className="component-section-header">

              <div className="title-badge">
                <div className="title-badge-title">Courses</div>
              </div>

              <h2>
                <div className="component-title ">
                  Our Courses
                </div>
              </h2>

              <div className="description">
                We have created courses to help you learn, with easy to follow steps and some sparks of fun!
              </div>

            </div>

            <div className="component-usp-row">
              <TeamCard imgUrl = "https://learntocodetogether.nl/assets/expand-horizon.svg" subTitle = "Learn new skills and expand your horizon" />
              <TeamCard imgUrl="https://learntocodetogether.nl/assets/developers.svg" subTitle="Follow courses created by experienced developers" />
              <TeamCard imgUrl="https://learntocodetogether.nl/assets/step-by-step.svg" subTitle="Fun, hands on and easy to follow" />
            </div>

          </div>

          <div className="section-line">
            <div className="line "></div>
          </div>

          <div className="section section-why-usp">
            <div className="component-section-header">

              <div className="title-badge">
                <div className="title-badge-title">Why?</div>
              </div>

              <h2>
                <div className="component-title ">
                  Why do we do this
                </div>
              </h2>

              <div className="description">
                It’s really simple actually. We just love to combine our passion for code with our love for teaching. 
                Coding is so much fun when doing it together.
              </div>

            </div>

            <div className="component-usp-row">
              <TeamCard
                imgUrl="https://learntocodetogether.nl/assets/technology.svg" 
                subTitle="Technology" 
                description="We love to experiment and create awesome stuff from the comfort of our couch."
              />
              <TeamCard 
                imgUrl="https://learntocodetogether.nl/assets/community.svg" 
                subTitle="People"
                description="It’s always fun to do things together, the excitement and the collaborations."
                 />
              <TeamCard 
                imgUrl="https://learntocodetogether.nl/assets/personal-speed.svg" 
                subTitle="Teaching"
                description="We like to learn and to teach others the stuff we know."
                 />
            </div>
          </div>
        </div>

        <div className="section-line">
          <div className="line "></div>
        </div>

        <div className="section-footer">
          <img className="logo" src="https://learntocodetogether.nl/assets/logo.svg" />
          <div className="title">Created by</div>
          <div className="subtitle">Rein Op &#x27;t land &amp; Danny van der Jagt</div>
          <div className="team-container">
            <img className="team" src="https://learntocodetogether.nl/assets/danny&rein.svg" />
          </div>
        </div>

      </div>
    );
  }
}