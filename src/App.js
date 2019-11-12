import React from "react";
import TeamCard from "./components/TeamCard"
import "./App.css";
import SectionCard from "./components/SectionCard";
import LikeCounter from "./components/LikeCounter";
import AwesomeAnimals from "./components/AwesomeAnimals";
import InfoBlock from "./components/InfoBlock";

export default class App extends React.Component {
  // define (initial) state of app
  state = {
    itemData : null
  }

  async componentDidMount(){
    // fetch data
    const response = await fetch("https://programming-quotes-api.herokuapp.com/quotes/random");
    const json = await response.json();
    // setState
    this.setState({itemData : json})
  }


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
    const {author, en } = this.state.itemData;

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


        <div className="component-usp-row">
          <InfoBlock blockTitle = {author} blockText={en} imgUrl="https://images.pexels.com/photos/3027216/pexels-photo-3027216.jpeg?cs=srgb&dl=photo-of-multi-coloured-hot-air-balloons-3027216.jpg&fm=jpg
"/>
        {/* map over data and turn it into InfoBlock components, pass data as props */}
        </div>

        







      </div>
    );
  }
}