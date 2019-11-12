import React from "react";
import TeamCard from "./components/TeamCard"
import "./App.css";
import SectionCard from "./components/SectionCard";
import LikeCounter from "./components/LikeCounter";
import AwesomeAnimals from "./components/AwesomeAnimals";
import InfoBlock from "./components/InfoBlock";
import Title from "./components/Title";

export default class App extends React.Component {
  // define (initial) state of app
  state = {
    itemData : []
  }

  async componentDidMount(){
    this.getQuote();

  }

  getQuote = async() => {
    const response = await fetch("https://programming-quotes-api.herokuapp.com/quotes/random");
    const json = await response.json();
    // setState
    this.setState({itemData : [...this.state.itemData, { ...json, imgUrl: `https://source.unsplash.com/random/${790 + Math.round(Math.random() * 50)}x600`}]})
};

  render() {
    // create an early exit if we dont have any data yet
    if (this.state.itemData == null){
      return(
        <div className="section section-what-usp">
          <InfoBlock blockTitle = "We kunnen nu even niets laten zien" blockText = "probeer het later opnieuw" imgUrl = "https://images.pexels.com/photos/1518754/pexels-photo-1518754.jpeg?cs=srgb&dl=man-drinking-on-white-plastic-cup-while-sitting-1518754.jpg&fm=jpg" />
        </div>
      )
    }
    // else use the data to create infoblock posts
    // const {author, en } = this.state.itemData;

    return (


      <div>
        <div className="section-header-spacer"></div>
        <div className="content">


          <div className="section section-what-usp">
            <SectionCard badgeTitle="Starting to play with react" componentTitle="tech-quote machine" description="I'm not really sure what I'm doing..." />
          </div>

          <div className="section-line">
            <div className="line "></div>
          </div>
        </div>

        {/* map over data and turn it into InfoBlock components, pass data as props */}
        <div className="component-usp-row">
        <Title content="Let's start! -->"/>

          { this.state.itemData.map((quote) => {
            const {author, en, imgUrl } = quote
            return <InfoBlock blockTitle = {author} blockText={en} imgUrl={imgUrl} />
          })}
          {/* <InfoBlock blockTitle = {author} blockText={en} imgUrl="https://source.unsplash.com/random/800x600"/> */}
        </div>

        <div className="component-usp-row">
          <button onClick={this.getQuote}> Get new quote </button>
        </div>

        


      </div>
    );
  }
}